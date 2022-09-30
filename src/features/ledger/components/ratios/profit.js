import "./profit.css"
import { useState, useEffect } from 'react';
import LeftSide from '../../../defualt_Layouts/leftSide';
import RightSide from '../../../defualt_Layouts/rightSide';
import SubNav from '../../../defualt_Layouts/subNav';
import moneytree from '../../../../icons/moneytree.png'
import useGlobalState from "../../../../Store_&_State/GlobalState"
import Moment from 'react-moment';
import moment from "moment";
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import SubNav_mobile from '../../../defualt_Layouts/subNav_mobile';
import Ratios from '../ratios'

const Profit = () => {
    const [ratioDetail, setRatioDetail] = useState([]);
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    const {ratioDetailList, setRatioDetailList} = useGlobalState('')
    const {totalExpenditure, setTotalExpenditure} = useGlobalState('')
    const {totalExpensis, setTotalExpensis} = useGlobalState('')
    const {profit, setProfit} = useGlobalState('')
    const {profitMargin, setProfitMargin} = useGlobalState('')
    const {markup, setMarkup} = useGlobalState('')
    // const {start_date, setStart_date} = useGlobalState('');
    // const {end_date, setEnd_date} = useGlobalState('');
    const {filterCategory, setFilterCategory} = useGlobalState('');

    const {ratioPeriodInterval, setRatioPeriodInterval} = useGlobalState('')
    const {ratioDateFrom, setRatioDateFrom} = useGlobalState('')
    const {ratioDateTo, setRatioDateTo} = useGlobalState('')
    // const {ratioPeriod, setRatioPeriod} = useGlobalState('')

    const ratioTable_SideBar = ratioDetailList.length*6

    const changeDateFrom = (e) => {
      setRatioDateFrom(e.target.value)
    }
    
    const changeDateTo = (e) => {
        setRatioDateTo(e.target.value)
    }

    const leftClick = (e) => {
      const elem = document.getElementsByClassName('eachRatio_slide')[1]
      const elem_marginRight = window.getComputedStyle(elem).marginRight
      const elem_width = elem.offsetWidth
      const scroll_width = new Number(elem_marginRight.replace(/px/g,""))+elem_width
      document.getElementById('ratio_slide_overlay').scrollBy(-scroll_width, 0)
    }
    
    const rightClick = (e) => {
      const elem = document.getElementsByClassName('eachRatio_slide')[1]
      const elem_marginRight = window.getComputedStyle(elem).marginRight
      const elem_width = elem.offsetWidth
      const scroll_width = new Number(elem_marginRight.replace(/px/g,""))+elem_width
      document.getElementById('ratio_slide_overlay').scrollBy(scroll_width, 0)
    }


    const onClick_ratioPeriodIntervalBTN = (e) => {
      e.preventDefault(); 
      // console.log(e.target.id)
      setRatioPeriodInterval(e.target.id)
      const ratioPeriodIntervalBTN = document.getElementsByClassName('ratioPeriodIntervalBTN')

      for( var i =0; i < ratioPeriodIntervalBTN.length; i++){
        ratioPeriodIntervalBTN[i].style.backgroundColor = 'white'
        ratioPeriodIntervalBTN[i].style.color = 'rgb(142, 143, 196)'
      }

      e.target.style.backgroundColor = 'rgb(142, 143, 196)'
      e.target.style.color = 'white'
    }

    // ...........................................................................................................................................
    Ratios()
    
    useEffect(() => {
      // setRatioDetail(
        let newList = []

        ratioDetailList.map(
          function(DetailItem, id, arr){
            // const date = moment(new Date(flowItem.created_at)).format('YYYY-MM-DD').replace(/-|:|[ \t]/g,"");
            // const time = moment(new Date(flowItem.created_at)).format('HH:mm:ss').replace(/-|:|[ \t]/g,"");
            const sortByDateTime = DetailItem.created_at__year+DetailItem.created_at__month+DetailItem.created_at__day
            console.log(sortByDateTime)
            if(ratioPeriodInterval==='daily'){
              return(
                newList.push(
                  <div key={sortByDateTime} id="rato_table_rows">
                    <div id="rato_table_rows_date"><strong>{moment(new Date(DetailItem.created_at__date)).format('YYYY-MM-DD')}</strong></div>
                    <div className="rato_table_rows">{DetailItem.credit_sum}</div>
                    <div className="rato_table_rows">{DetailItem.debit_sum}</div>
                    <div className="rato_table_rows">{DetailItem.profit}</div>
                    <div className="rato_table_rows_pecentage">{DetailItem.profit_Margin}%</div>
                    <div className="rato_table_rows_pecentage">{DetailItem.markup}%</div>
                  </div>
                )
              )
            }else if(ratioPeriodInterval==='weekly'){
              return(
                newList.push(
                  <div key={sortByDateTime} id="rato_table_rows">
                    <div id="rato_table_rows_date"><strong>{'week-'+DetailItem.created_at__week+`(${DetailItem.created_at__year})`}</strong></div>
                    <div className="rato_table_rows">{DetailItem.credit_sum}</div>
                    <div className="rato_table_rows">{DetailItem.debit_sum}</div>
                    <div className="rato_table_rows">{DetailItem.profit}</div>
                    <div className="rato_table_rows_pecentage">{DetailItem.profit_Margin}%</div>
                    <div className="rato_table_rows_pecentage">{DetailItem.markup}%</div>
                  </div>
                )
              )
            }else if(ratioPeriodInterval==='monthly'){
              console.log(`${DetailItem.created_at__year}`+`${DetailItem.created_at__month}`)
              return(
                newList.push(
                  <div key={sortByDateTime} id="rato_table_rows">
                    <div id="rato_table_rows_date">
                      <strong>
                        {/* {moment(new Date(`${DetailItem.created_at__year}`+`${DetailItem.created_at__month}`)).format('MMMM-YY')} */}
                        <Moment format="MMMM/YYYY">
                          {`${DetailItem.created_at__year}-${DetailItem.created_at__month}`}
                        </Moment>
                      </strong></div>
                    <div className="rato_table_rows">{DetailItem.credit_sum}</div>
                    <div className="rato_table_rows">{DetailItem.debit_sum}</div>
                    <div className="rato_table_rows">{DetailItem.profit}</div>
                    <div className="rato_table_rows_pecentage">{DetailItem.profit_Margin}%</div>
                    <div className="rato_table_rows_pecentage">{DetailItem.markup}%</div>
                  </div>
                )
              )
            }else if(ratioPeriodInterval==='yearly'){
              return(
                newList.push(
                  <div key={sortByDateTime} id="rato_table_rows">
                    <div id="rato_table_rows_date"><strong>{DetailItem.created_at__year}</strong></div>
                    <div className="rato_table_rows">{DetailItem.credit_sum}</div>
                    <div className="rato_table_rows">{DetailItem.debit_sum}</div>
                    <div className="rato_table_rows">{DetailItem.profit}</div>
                    <div className="rato_table_rows_pecentage">{DetailItem.profit_Margin}%</div>
                    <div className="rato_table_rows_pecentage">{DetailItem.markup}%</div>
                  </div>
                )
              )
            }
          }
        )

        setRatioDetail(newList)
      // )
    }, [ratioDetailList]);

    
    // const sortedRatioDetail = ratioDetail.sort(function(a, b){return b.props.children.key - a.props.children.key})
    console.log(ratioDetail)
    return (
      <section className='column' id="left_right_section">
        <SubNav visibility="hidden"/>
        <div className='row overlay' >
          <LeftSide/>
          <div id="profit_scroll_overlay">
            <div id='profitOverlaay'>
              <div id='ratio_Profit_flag' style={{display:'flex'}}>
                <div>
                    <strong><h3>Profit</h3></strong>
                    <strong><h4>March 2022</h4></strong>
                </div> 
                
                <img id="profitImg" src={moneytree} alt="" />

                <div>
                    <div>
                        <h1>58<sup className='sub'>%</sup></h1>
                        <h3>$500,000</h3>
                    </div>
                    <div>
                        <span> Total Revenue:$900,000</span>
                        <span>Total Expensis:$200,000</span>
                    </div>
                </div>
              </div>

              <div id="ratio_Profit_text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quos distinctio earum unde ratione debitis velit quaerat! magni cupiditate praesenIure non quia incidunt quasi quis modi illum, nam magni cupiditate praesentium fuga veniam archit incidunt non blanditiis assumenda ut, tempore maxime eos?</p><br/><br/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quae rerum magnam saepe. Maiores quisquam ducimus eligendi exercitationem um illo!</p>
              </div>
              
              <ScrollSync>
              <div id="ratio_table_background">
                <ScrollSyncPane>
                  <div id="ratio_table">
                    <div className="desktop" id="rato_table_header">
                      <div id="headers_date"><strong>Date</strong></div>
                      <div className="headers"><strong>Revenue</strong></div>
                      <div className="headers"><strong>Expensis</strong></div>
                      <div className="headers"><strong>Profit</strong></div>
                      <div className="headers_pecentage"><strong>Profit margin</strong></div>
                      <div className="headers_pecentage"><strong>Markup</strong></div>
                    </div>

                    <div className="mobile" id="rato_table_header">
                      <div id="rato_table_rows_date"><strong>Date</strong></div>
                      <div className="rato_table_rows"><strong>Revenue</strong></div>
                      <div className="rato_table_rows"><strong>Expensis</strong></div>
                      <div className="rato_table_rows"><strong>Profit</strong></div>
                      <div className="rato_table_rows_pecentage"><strong>Profit margin</strong></div>
                      <div className="rato_table_rows_pecentage"><strong>Markup</strong></div>
                    </div>

                    <div id="">
                      {/* {ratioDetail.sort(function(a, b){return a.props.children.key - b.props.children.key})} */}
                      {/* {sortedRatioDetail} */}
                      {ratioDetail}
                    </div>
                  </div>
                </ScrollSyncPane>

                <ScrollSyncPane>
                  <div id="ratioTable_sideBar_overlay"> 
                    <div id="ratioTable_sideBar" style={{height:`${ratioTable_SideBar}vh`}}> </div>
                  </div>
                </ScrollSyncPane>
              </div>
              </ScrollSync>

              <div id="profitSetPeriod_Overlay">
                <p id="profitSetPeriod_p">Set Period</p>
                <div id="profitSetPeriod_formOverlay">
                  <div id="profitSetPeriodBTNS_Overlay">
                    <div>
                      <button id="daily" className="ratioPeriodIntervalBTN" required onClick={onClick_ratioPeriodIntervalBTN}>Show Daily</button>
                      <button id="weekly" className="ratioPeriodIntervalBTN" required onClick={onClick_ratioPeriodIntervalBTN}>Show Weekly</button>
                    </div>
                    
                    <div>
                      <button id="monthly" className="ratioPeriodIntervalBTN" required onClick={onClick_ratioPeriodIntervalBTN}>Show Monthly</button>
                      <button id="yearly" className="ratioPeriodIntervalBTN" required onClick={onClick_ratioPeriodIntervalBTN}>Show Yearly</button>
                    </div>
                  </div>

                  <div id="profitSetPeriodInput_Overlay">
                    <div>
                      <strong className='desktop'><p>From</p></strong>
                      <p className='mobile'>From</p>
                      <input type="date" id="filterDateFrom" name="filterDateFrom" value ={ratioDateFrom} onChange={changeDateFrom}/>
                    </div>
                    
                    <div>
                      <strong className='desktop'><p>To</p></strong>
                      <p className='mobile'>To</p>
                      <input type="date" id="filterDateTo" name="filterDateTo" value={ratioDateTo} onChange={changeDateTo}/>
                    </div>
                  </div>
                </div>
              </div>

              <div id="ratio_slide_BigOverlay">
                <button id="leftArrow" onClick={leftClick}></button>

                <div id="ratio_slide_overlay">
                  <div id="ratio_slide_smallOverlay">  
                    <div className="eachRatio_slide eachRatio_slide_selected" id="profits">
                      <div className="eachRatio_slide_icon"></div>
                      <p>profits</p>
                    </div>

                    <div className="eachRatio_slide" id="netProfit" >
                      <div className="eachRatio_slide_icon"></div>
                      <p>Net Profit</p>
                    </div>

                    <div className="eachRatio_slide" id="freeCashFlow">
                      <div className="eachRatio_slide_icon"></div>
                      <p>Free Cash Flow</p>
                    </div>

                    <div className="eachRatio_slide" id="ownersEquity">
                      <div className="eachRatio_slide_icon"></div>
                      <p>Owner's Equity</p>
                    </div>

                    {/* delete from here ..........................................................*/}
                    <div className="eachRatio_slide" id="netProfit" >
                      <div className="eachRatio_slide_icon"></div>
                      <p>Net Profit</p>
                    </div>

                    <div className="eachRatio_slide" id="freeCashFlow">
                      <div className="eachRatio_slide_icon"></div>
                      <p>Free Cash Flow</p>
                    </div>

                    <div className="eachRatio_slide" id="ownersEquity">
                      <div className="eachRatio_slide_icon"></div>
                      <p>Owner's Equity</p>
                    </div>
                  </div>
                </div>
                
                <button id="rightArrow" onClick={rightClick}></button>
              </div>
            </div>
          </div>
          <RightSide/>
        </div>
        <SubNav_mobile/>
      </section>
    );
}

export default Profit;
