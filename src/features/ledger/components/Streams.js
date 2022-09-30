import { useState, useEffect, useMemo } from 'react';
import {get_cashStream} from './api/cashStream_CRUD'
import useAccess from "../../auths/accessToken"
import useGlobalState from "../../../Store_&_State/GlobalState"
import {useEffectOnce} from "../../../custom_Hooks/useEffectOnce"
import Ledger from '../Ledger'
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import Moment from 'react-moment';
import moment from "moment";

function Streams() {
  // console.log(load_flow)
  const {streamList, setStreamList} = useGlobalState([]);
  const {stream, setStream} = useGlobalState([]);
  const {priodStart, setPriodStart} = useGlobalState([]);
  const {priodEnd, setPriodEnd} = useGlobalState([]);
  
  const {start_date, setStart_date} = useGlobalState('');
  const {end_date, setEnd_date} = useGlobalState('');

  const {access, setAccess} = useAccess('')

  const [StreamPages, setStreamPages] = useState([]);
  const [Streampage, setStreamPage] = useState(0);

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  
  Ledger(stream.length)
    // CashStream data management----------------------------------------------------------------------------------------------------
  const stream_Success = async(data) => {
    // alert("d")
    await setStreamList(data.results);
    const newPages = [];
    if (data.count > 10) {
      for (let i=0; i<Math.ceil(data.count / 10); i++) {
        newPages.push({
          name: (i+1).toString(),
          page: i,
        });
        console.log("page",i);
      }
      if (Streampage > newPages.length-1) {
        await setStreamPage(Streampage-1);
      }
    } else {
      await setStreamPage(0);
    }
    await setStreamPages(newPages);
  };
  
  const set_Access = (Access_token) => {
    setAccess(Access_token)
  }

  // console.log(access)

  useEffectOnce(
    () => {
      set_Access()
    },[]
  )

  const getStreamData = async()=>{
    await get_cashStream(Streampage, stream_Success, (text)=>{console.log("Error: ", text)}, access, set_Access );
  };

  useEffect(()=>{
    getStreamData();
    if(dateFrom == ""){
      setDateFrom(priodStart)
    }

    if(dateTo == ""){
        setDateTo(priodEnd)
    }
    // alert(dateFrom)
  }, [priodStart, access, priodEnd, dateFrom, dateTo]);

  useEffect(() => {
    setStream(
      streamList.map(function(item){
        return(
          <div > 
            <div className="th stream th_stream" >{item.name}</div>
            
            <div className='streamHeader'>
              <div className="th " >Credit($)</div>
              <div className="th" >Debit($)</div>
            </div>
          </div>
        )
      })
    );

  }, [streamList]);

  const if_start_date = (fromDate) => {
    if( fromDate.replace(/-/g,"") !== dateTo.replace(/-/g,"") ){
      if (priodEnd !== dateTo){
        setStart_date(fromDate)
        setEnd_date(dateTo)

        console.log("from:  "+fromDate)
        console.log("to today:    "+dateTo)
      }

      if (priodEnd == dateTo){
        setStart_date(fromDate)
        setEnd_date(moment(new Date()).format('YYYY-MM-DD'))
        setDateTo(moment(new Date()).format('YYYY-MM-DD'))
      }
    }
    else{ 
      alert("%c sorry, you can not set filter To and From the same date")
    }
  }

  const if_end_date = (toDate) => {
    if( dateFrom.replace(/-/g,"") !== toDate.replace(/-/g,"") ){
        setStart_date(dateFrom)
        setEnd_date(toDate)

        console.log("from:  "+dateFrom)
        console.log("to:    "+toDate)
    }
    else{ 
      alert("%c sorry, you can not set filter To and From the same date")
    }
  }

  const changeDateFrom = (e) => {
    setDateFrom(e.target.value)
    if_start_date(e.target.value)
  }

  const changeDateTo = (e) => {
    setDateTo(e.target.value)
    if_end_date(e.target.value)
  }


    return (
      <ScrollSyncPane>
      <div id="thead"  >
        <div className="tr" style={{ width:`calc((${stream.length} * var(--streamWidth)) + var(--periodWidth))`}}>
            <div style={{ position: 'sticky', left: `${0}`}}>
              <div className="th stream th_stream" id="period">
                <div>
                  <strong><span>From:</span></strong>
                  <input type="date" id="filterDateFrom" name="filterDateFrom" value ={dateFrom} onChange={changeDateFrom}/>
                </div>

                <div>
                  <strong><span>To:</span></strong>
                  <input type="date" id="filterDateTo" name="filterDateTo" value={dateTo} onChange={changeDateTo}/>
                </div>
              </div>
              <div className="tr" id="trSecondRow">
                <div  className="th ledgerSn desktop" id="snHeader" >S/N</div>
                <div  className="th ledgerDates" id="dateHeader" >Date</div>
                <div   className="th discriptionTd" id="descriptionHeader" >Description</div>
              </div>
            </div>
             
          <div className='tr' id='stream'>
            {stream} 
          </div>
        </div>
      </div>
      </ScrollSyncPane>
    )
}

export default Streams