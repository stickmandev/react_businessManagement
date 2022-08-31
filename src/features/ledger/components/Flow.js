import React from 'react'
import { useState, useEffect, useMemo } from 'react';
import {get_cashFlow, delete_cashFlow, edit_cashFlow} from './api/cashFow_CRUD'
import useGlobalState from "../../../Store_&_State/GlobalState"
import useAccess from "../../auths/accessToken"
import {useEffectOnce} from "../../../custom_Hooks/useEffectOnce"
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import Moment from 'react-moment';
import moment from "moment";
import NumberFormat from 'react-number-format';
import InfiniteScroll from 'react-infinite-scroll-component';

function FlowDomManagement(prop) {
  const [flowList, setFlowList] = useState([]);
  const [flow, setFlow] = useState([]);
  // const [flowPages, setFlowPages] = useState([]);
  const [flowPage, setFlowPage] = useState(0);
  // const [flow_DateSorted, setFlow_DateSorted] = useState([]);
  const [emptyTR, setEmptyTR] = useState([]);
  // const [flowId, setFlowId] = useState([]);
  // const [currentStream, setCurrentStream] = useState([]);
  const [balances, setBalances] = useState([]);
	const [page, setPage] = useState(1);
	const [nextPage, setNextPage] = useState(1);
	const [addCashFlow_Triger, setAddCashFlow_Triger] = useState(1);
	const [sn, setSn] = useState(0);
	const [HasMore, setHasMore] = useState(true);

	// const [count, setCcount] = useState(1);
  

  const {access, setAccess} = useAccess('')
  const {createFlowModalIsOpen, setCreateFlowIsOpen} = useGlobalState([]);
  const {editFlowIsOpen, setEditFlowIsOpen} = useGlobalState([]);
  const {reRender, setReRender} = useGlobalState([0]);

  const {streamList, setStreamList} = useGlobalState([]);
  const {stream, setStream} = useGlobalState([]);
  const {priodStart, setPriodStart} = useGlobalState([]);
  const {priodEnd, setPriodEnd} = useGlobalState([]);
  
  const {start_date, setStart_date} = useGlobalState(''); 
  const {end_date, setEnd_date} = useGlobalState('');
  const {filterCategory, setFilterCategory} = useGlobalState('');
  const {search, setSearch} = useGlobalState('');

  const {flowId, setFlowId} = useGlobalState([]);


  const {total_balance, setTotal_balance} = useGlobalState([]);
  const {grandTotal, setGrandTotal} = useGlobalState('');
  

  const streamWidth = 14.4
  const periodWidth = 28
  const flowWidth = streamWidth/2
  const snWidth = periodWidth*(0.1)
  const dateWidth = periodWidth*(0.2)
  const descriptionWidth = periodWidth*(0.7)

  const [display, setDisplay] = useState("none");
  const [offsetTop, setoffsetTop] = useState(0);
  const [trHeight, setTrHeight] = useState(0);
  const table_width = (stream.length*streamWidth) + periodWidth

  // .......................... Access .............................................................................
  const set_Access = (Access_token) => {
    setAccess(Access_token)
  }
  
  useEffectOnce(() => {
      set_Access()
    },[]
  )

  // .......................... cashflow add function .............................................................................
  const addFirst = () => {
    // console.log("preparing to send flow to the DOM")

    let newList = []
    const trEmpty = []
    const data = Array.from(streamList)

    let total_balanceArr = []

    // console.log('about to map stream and flow lists and set new list')
    data.map(
        function(streamItem, id, arr){
          // console.log('mapping through stream list')

          trEmpty.push(
            <>
              <div className="td" style={{width:`${flowWidth}vw`}}></div>
              <div className="td" style={{width:`${flowWidth}vw`}}></div>
            </>
          );

          if (balances[streamItem.name] !== undefined){
            total_balanceArr.push(
              <div id='totalBalance2'>
                <div className='streamHeader' style={{height:"3.3vw"}}>
                  <div className="th" style={{width:`${flowWidth}vw`}}>
                    <NumberFormat
                      value={balances[streamItem.name].total_Credit}
                      displayType={'text'}
                      thousandSeparator={true}
                      // prefix={'$'}
                    />
                  </div>
                  <div className="th" style={{width:`${flowWidth}vw`}}>
                    <NumberFormat
                      value={balances[streamItem.name].total_Debit}
                      displayType={'text'}
                      thousandSeparator={true}
                      // prefix={'$'}
                    />
                  </div>
                </div>
  
                <div className="th" style={{height:"4vw"}}>
                  <NumberFormat
                    value={balances[streamItem.name].balance}
                    displayType={'text'}
                    thousandSeparator={true}
                    // prefix={'$'}
                  />
                </div>
              </div>
            )
          }
          
          return (
              flowList.map(
                function(flowItem, pk, flow_arr){
                  // console.log("mapping through flow list")

                  if (flowItem.CashStream_Data.name === arr[id].name){
                    // alert(arr[id].name)
                  const nullTd = [];
                  const reversNullTd = [];
                  const editDelete = [];

                    for( var i =0; i < id; i++ ){
                      nullTd.push(
                        <>
                          <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>0</div>
                          <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>0</div>
                        </>
                      );
                    };

                    for(var i = (arr.length-1); id < i; i-- ){
                      reversNullTd.push(
                        <>
                          <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>0</div>
                          <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>0</div>
                        </>
                      );

                    };

                    const date = moment(new Date(flowItem.created_at)).format('YYYY-MM-DD').replace(/-|:|[ \t]/g,"");
                    const time = moment(new Date(flowItem.created_at)).format('HH:mm:ss').replace(/-|:|[ \t]/g,"");
                    const sortByDateTime = date+time

                    setSn(flow_arr.length)
                    
                    newList.push( 
                      <>
                        <div  className="tr" key={sortByDateTime} id={flowItem.id} onMouseMove={mouseInEditDelete} onMouseOver={mouseInEditDelete} onMouseOut={mouseOutEditDelete} style={{ width:`${table_width}vw`}}>
                          <div className="tr" style={{ position: 'sticky', left: `${0}`, width:`${31.5}vw`}} onMouseMove={mouseInEditDelete} onMouseOver={mouseInEditDelete} onMouseOut={mouseOutEditDelete}>
                            <div className="td" id={flowItem.id} style={{width:`${snWidth}vw`}}>{pk+1}</div> 
                            <div className="td" id={flowItem.id} style={{width:`${dateWidth}vw`}}> 
                              <small style={{textAlign:'center'}}>
                                <Moment format="YYYY/MM/DD HH:mm a">
                                  {flowItem.created_at}
                                </Moment>
                              </small>
                            </div>
                            <div className="td discriptionTd" id={flowItem.id} style={{width:`${descriptionWidth}vw`}}>{flowItem.description}</div>
                          </div>
                          <div className='tr'>
                            {nullTd}
                            <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>
                              
                              <NumberFormat
                                value={flowItem.Credit}
                                displayType={'text'}
                                thousandSeparator={true}
                              />
                            </div>
                            <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>
                            <NumberFormat
                                value={flowItem.Debit}
                                displayType={'text'}
                                thousandSeparator={true}
                              />
                            </div> 
                            {reversNullTd}
                          </div>
                        </div>
                      </>
                    )
                  }
                }
              )
        )
        }
      )
      
    // console.log("finished setting new flow list whiling mapping")
    // console.log('new list: '+newList)
    // console.log(newList)
    // console.log("setting flow")
    setFlow( newList );
    setEmptyTR(trEmpty)
    setTotal_balance(
      <>
        <div className="tr" style={{ position: 'sticky', left: `${0}`, width:`${32}vw`}}>
          <div id='total_balance_dummyBlock' className="td" style={{ width:`${snWidth+dateWidth+descriptionWidth+1.29999}vw`}}>
            <strong><p>Total($)</p></strong>
            <strong><p>Balance($)</p></strong>
          </div>
        </div>

        {total_balanceArr}
      </>
    )
  }

  const addCashFlow = () => {
    if(true){
        const trEmpty = []
        const data = Array.from(streamList)
  
        let total_balanceArr = []
  
        // console.log('about to map stream and flow lists and set new list')
        data.map(
            function(streamItem, id, arr){
              // console.log('mapping through stream list')
  
              trEmpty.push(
                <>
                  <div className="td" style={{width:`${flowWidth}vw`}}></div>
                  <div className="td" style={{width:`${flowWidth}vw`}}></div>
                </>
              );
  
              if (balances[streamItem.name] !== undefined){
                total_balanceArr.push(
                  <div>
                    <div className='streamHeader' style={{height:"3.3vw"}}>
                      <div className="th" style={{width:`${flowWidth}vw`}}>
                        <NumberFormat
                          value={balances[streamItem.name].total_Credit}
                          displayType={'text'}
                          thousandSeparator={true}
                          // prefix={'$'}
                        />
                      </div>
                      <div className="th" style={{width:`${flowWidth}vw`}}>
                        <NumberFormat
                          value={balances[streamItem.name].total_Debit}
                          displayType={'text'}
                          thousandSeparator={true}
                          // prefix={'$'}
                        />
                      </div>
                    </div>
      
                    <div className="th" style={{height:"4vw"}}>
                      <NumberFormat
                        value={balances[streamItem.name].balance}
                        displayType={'text'}
                        thousandSeparator={true}
                        // prefix={'$'}
                      />
                    </div>
                  </div>
                )
              }
              
              // let sn = flowSN
              // setFlowSN(flow_arr.length-pk)  
              // console.log(sn)  
              return (
                flowList.map(
                  function(flowItem, pk, flow_arr){
                    // console.log("mapping through flow list")
                    
                    if (flowItem.CashStream_Data.name === arr[id].name){
                      // alert(arr[id].name)
                    const nullTd = [];
                    const reversNullTd = [];
                    const editDelete = [];
  
                      for( var i =0; i < id; i++ ){
                        nullTd.push(
                          <>
                            <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>0</div>
                            <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>0</div>
                          </>
                        );
                      };
  
                      for(var i = (arr.length-1); id < i; i-- ){
                        reversNullTd.push(
                          <>
                            <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>0</div>
                            <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>0</div>
                          </>
                        );
  
                      };
  
                      const date = moment(new Date(flowItem.created_at)).format('YYYY-MM-DD').replace(/-|:|[ \t]/g,"");
                      const time = moment(new Date(flowItem.created_at)).format('HH:mm:ss').replace(/-|:|[ \t]/g,"");
                      const sortByDateTime = date+time

                      setSn(sn + flow_arr.length)

                      setFlow(oldArray => [ ( 
                          <>
                            <div  className="tr" key={sortByDateTime} id={flowItem.id} onMouseMove={mouseInEditDelete} onMouseOver={mouseInEditDelete} onMouseOut={mouseOutEditDelete} style={{ width:`${table_width}vw`}}>
                              <div className="tr sticky_offset" style={{ position: 'sticky', left: `${0}`, width:`${31.5}vw`}} onMouseMove={mouseInEditDelete} onMouseOver={mouseInEditDelete} onMouseOut={mouseOutEditDelete}>
                                <div className="td" id={flowItem.id} style={{width:`${snWidth}vw`}}>{sn+pk+1}</div> 
                                <div className="td" id={flowItem.id} style={{width:`${dateWidth}vw`}}> 
                                  <small style={{textAlign:'center'}}>
                                    <Moment format="YYYY/MM/DD HH:mm a">
                                      {flowItem.created_at}
                                    </Moment>
                                  </small>
                                </div>
                                <div className="td discriptionTd" id={flowItem.id} style={{width:`${descriptionWidth}vw`}}>{flowItem.description}</div>
                              </div>
                              {/* {moment(new Date(flowItem.created_at.slice(0, 10))).format('DD-MM-YYYY')} */}
                              <div className='tr'>
                                {nullTd}
                                <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>
                                  
                                  <NumberFormat
                                    value={flowItem.Credit}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    // prefix={'$'}
                                  />
                                </div>
                                <div className="td" id={flowItem.id} style={{width:`${flowWidth}vw`}}>
                                <NumberFormat
                                    value={flowItem.Debit}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    // prefix={'$'}
                                  />
                                </div> 
                                {reversNullTd}
                              </div>
                            </div>
                          </>
                        ), ...oldArray
                      ])
                    }
                  }
                )
              )
            }
          )
          
        // console.log("finished setting new flow list whiling mapping")
        // console.log("setting flow")
        setEmptyTR(trEmpty)
        setTotal_balance(
          <>
            <div className="tr" style={{ position: 'sticky', left: `${0}`, width:`${32}vw`}}>
              <div id='total_balance_dummyBlock' className="td" style={{ width:`${snWidth+dateWidth+descriptionWidth+1.29999}vw`}}>
                <strong><p>Total($)</p></strong>
                <strong><p>Balance($)</p></strong>
              </div>
            </div>

            {total_balanceArr}
          </>
        )  
        // setPage(page+1)
    }   
  }


  const flow_Success = async(data, pagez) => {
    // console.log('data extracton on flow successful')
    // console.log('setting flowList')

    setFlowList(data.results[0]);
    setNextPage(data.next)
    // console.log(data.results)
    setGrandTotal(data.results[1].grandTotal.total)
    setBalances(data.results[1])

    setPriodStart(moment(new Date(data.results[2].firstDate.created_at)).format('YYYY-MM-DD'))
    setPriodEnd(moment(new Date(data.results[2].lastDate.created_at)).format('YYYY-MM-DD'))
    // console.log(data.results[1]['bank'].total_Credit)
    // console.log('finished setting flowList')
    // addFirst()

    if(pagez !== 1){
      setAddCashFlow_Triger(addCashFlow_Triger+1)
    }

  };

  useEffect(() => {
    if(page !== 1){
      addCashFlow()
    }
    },[addCashFlow_Triger]
  )
  useEffect(() => {
    if(page === 1){
      addFirst()
    }
    },[stream, access,flowList,flowPage]
  )

  const flow_fail = (text) => {
    console.log("Error: ", text)
  }

  const getData = async(pagez)=>{
    console.log('%c getting data', 'background:yellow; color:red')

    // if(nextPage !== null){
      await get_cashFlow(flow_Success, flow_fail, start_date, end_date, filterCategory, search, pagez, access, set_Access,);
    // }else{
    //   console.log('%c end reached', 'background:yellow; color:red')
    //   console.log(`%c ${nextPage}`, 'background:yellow; color:red')
    // }

    if(pagez>1){
      setPage(page+1)      
    }else{
      setPage(1)
    }
    // console.log(pagez)
    // console.log(page)
  };  

  const getMoreData = async(pagez)=>{
    if(pagez !== 1){
      console.log('%c getting data', 'background:yellow; color:red')

      if(nextPage !== null){
        await get_cashFlow(flow_Success, flow_fail, start_date, end_date, filterCategory, search, pagez, access, set_Access,);
      }else{
        setHasMore(false)
        console.log('%c end reached', 'background:yellow; color:red')
        console.log(`%c ${nextPage}`, 'background:yellow; color:red')
      }

    
      setPage(page+1)      
    }
    // console.log(pagez)
    // console.log(page)
  };

  useEffect(()=>{
    // console.log("flow useEffet getting data")
    // if(page === 1){
      setNextPage(1);
      getData(1);
      document.getElementsByClassName('tbody_class')[0].scrollTo(0,0)
    // }
    console.log(search)
  }, [streamList, stream, reRender, search, start_date, end_date]);

  const deleteFlowData = async()=>{
    await delete_cashFlow(flowId, () =>{getData(1)}, access, set_Access);
    // getData()
    setDisplay("none")
  };

  const editFlowData = async()=>{
    setEditFlowIsOpen(true); prop.blur(8)
    // await edit_cashFlow(flowId, description, selectd_Streamm, credit, debit, () =>{getData(1)}, access, set_Access);
    // // getData()
    // setDisplay("none")
  };
  
  const mouseInEditDelete = (e) => {
    let target = e.target
    let scrolled_by = document.getElementsByClassName('tbody_class')[0].scrollTop
    
    if (target.offsetTop===0){
      const sticky_offset = flowList.length-target.parentElement.firstChild.innerText
      const id = sticky_offset
      let sticky_scroll = document.getElementsByClassName('sticky_offset')[id].offsetTop
      setoffsetTop(sticky_scroll-scrolled_by)
    }else{
      setoffsetTop(target.offsetTop - scrolled_by)
    }
    
    setFlowId(target.id)
    setTrHeight(target.scrolled_by)
    setDisplay("flex")
  }
  
  const mouseOutEditDelete = () => {
    // alert('mouce out')
    setDisplay("none")
  }
  

  
  // const sortedFlow = flow.sort(function(a, b){return a.props.children.key - b.props.children.key})
  const sortedFlow = flow.sort(function(a, b){return b.props.children.key - a.props.children.key})
  return (
    <>
    <ScrollSyncPane>
      <div id="tbody" className='tbody_class'>
        <InfiniteScroll
          dataLength={flow.length}
          next={() => {getMoreData(page+1);}}
          style={{ display: 'flex', flexDirection: 'column-reverse', overflow:'unset' }} //To put endMessage and loader to the top.
          inverse={true} //
          hasMore={HasMore}
          loader={<h4>loading...</h4>}
          scrollableTarget="tbody"
          // scrollThreshold='200px'
          endMessage={
            <p>
              <b style={{ textAlign: "center", position: 'sticky', left:'25vw', fontSize:"0.8vw" }}>End of record reached</b>
            </p>
          }
        >
          {/* {sortedFlow} */}

          <div className="tr" id="addTr" style={{ width:`${table_width}vw`}}>
            <div  className="tr" style={{position: 'sticky', left: `${0}`, width:`${31.5}vw`}}>
              <div className="td" style={{width:`${snWidth}vw`}}></div> 
              <div className="td" style={{width:`${dateWidth}vw`}}></div>
              <div className="td discriptionTd" style={{width:`${descriptionWidth}vw`}}>
                <button id='open_CreateFlowModal_btn' onClick={()=>{setCreateFlowIsOpen(true); prop.blur(8)}}> <span></span> Add</button> 
              </div>
            </div>
            <div className="tr">{emptyTR}</div>
          </div>
          {sortedFlow}
        </InfiniteScroll>
      </div>
    </ScrollSyncPane>

        
    <div id="EditDeleteOverlay" onMouseOver={()=>{ setDisplay("flex") }} onMouseOut={mouseOutEditDelete} style={{  display:display, top:offsetTop, height:trHeight}} >
      <button onClick={deleteFlowData} ></button><br/>
      <button onClick={editFlowData}></button>
    </div>
    </>
  )
}


export default FlowDomManagement
