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

const Profit = () => {
    const [ratioDetail, setRatioDetail] = useState("");
    const {ratioDetailList, setRatioDetailList} = useGlobalState('')
    const {totalExpenditure, setTotalExpenditure} = useGlobalState('')
    const {totalExpensis, setTotalExpensis} = useGlobalState('')
    const {profit, setProfit} = useGlobalState('')
    const {profitMargin, setProfitMargin} = useGlobalState('')
    const {markup, setMarkup} = useGlobalState('')

    const ratioTable_SideBar = ratioDetailList.length*6
    useEffect(() => {
      setRatioDetail(
        ratioDetailList.map(
          function(DetailItem, id, arr){
            // console.log(DetailItem)
            // const date = moment(new Date(flowItem.created_at)).format('YYYY-MM-DD').replace(/-|:|[ \t]/g,"");
            // const time = moment(new Date(flowItem.created_at)).format('HH:mm:ss').replace(/-|:|[ \t]/g,"");
            // const sortByDateTime = date+time

            return(
              <div id="rato_table_rows">
              {/* <div id="rato_table_rows"key={}> */}
                {/* <div id="rato_table_rows_date"><strong>{DetailItem.created_at__day}-{DetailItem.created_at__month}-{DetailItem.created_at__year}</strong></div> */}
                <div id="rato_table_rows_date"><strong>{moment(new Date(DetailItem.created_at__year+'/'+DetailItem.created_at__month+'/'+ DetailItem.created_at__day)).format('YYYY-MM-DD')}</strong></div>
                {/* <div id="rato_table_rows_date"><strong><Moment format="YYYY/MM/DD">{DetailItem.created_at__day}{DetailItem.created_at__month}{DetailItem.created_at__year}</Moment></strong></div> */}
                <div className="rato_table_rows">{DetailItem.credit_sum}</div>
                <div className="rato_table_rows">{DetailItem.debit_sum}</div>
                <div className="rato_table_rows">{DetailItem.profit}</div>
                <div className="rato_table_rows_pecentage">{DetailItem.profit_Margin}%</div>
                <div className="rato_table_rows_pecentage">{DetailItem.markup}%</div>
              </div>
            )
          }
        )
      )
    }, []);
    
    return (
      <section className='column' id="left_right_section">
        <SubNav visibility="hidden"/>
        <div className='row overlay' >
          <LeftSide/>
          <div id="profit_scroll_overlay">
            <div id='profitOverlaay'>
                <div id='ratio_Profit_flag'>
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
                      <div id="rato_table_header">
                        <div id="headers_date"><strong>Date</strong></div>
                        <div className="headers"><strong>Revenue</strong></div>
                        <div className="headers"><strong>Expensis</strong></div>
                        <div className="headers"><strong>Profit</strong></div>
                        <div className="headers_pecentage"><strong>Profit margin</strong></div>
                        <div className="headers_pecentage"><strong>Markup</strong></div>
                      </div>
                      <div id="">
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
          </div>
            </div>
          <RightSide/>
        </div>
      </section>
    );
}

export default Profit;
