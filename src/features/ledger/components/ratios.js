import './ratios.css'
import { useState, useEffect } from 'react';
import LeftSide from '../../defualt_Layouts/leftSide';
import RightSide from '../../defualt_Layouts/rightSide';
import SubNav from '../../defualt_Layouts/subNav';
import { Link } from "react-router-dom";
import { get_ratioApi } from './api/ratios_api';
import useAccess from "../../auths/accessToken"
import useGlobalState from "../../../Store_&_State/GlobalState"

const Ratios = () => {
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [period, setPeriod] = useState('');
    const [selectFonthWieght, setSelectFonthWieght] = useState("normal");
    const [selectColor, setSelectColor] = useState("gray");

    const {access, setAccess} = useAccess('')
    const {ratioDetailList, setRatioDetailList} = useGlobalState('')
    const {totalExpenditure, setTotalExpenditure} = useGlobalState('')
    const {totalExpensis, setTotalExpensis} = useGlobalState('')
    const {profit, setProfit} = useGlobalState('')
    const {profitMargin, setProfitMargin} = useGlobalState('')
    const {markup, setMarkup} = useGlobalState('')

    const set_Access = (Access_token) => {
        setAccess(Access_token)
    }

    const changeDateFrom = (e) => {
        setDateFrom(e.target.value)
    }
    
    const changeDateTo = (e) => {
        setDateTo(e.target.value)
    }

    const ratios_Success = async(data) => {
        const result = data.results
        console.log(result)
        setRatioDetailList(result[0])
        setTotalExpenditure(result[1].total_Revenue)
        setTotalExpensis(result[2].total_Expensis)
        setProfit(result[3].profit)
        setProfitMargin(result[4].profit_Margin)
        setMarkup(result[5].markup)
    };

    const ratios_fail = (text) => {
        console.log("Error: ", text)
    }
    
    const applyPeriod = (e) => {
        setDateFrom(JSON.stringify(''))
        setDateTo(JSON.stringify(''))
    }

    const getData = async()=>{
        await get_ratioApi(ratios_Success, ratios_fail, dateFrom, dateTo, period, access, set_Access,);
    };

    useEffect(()=>{
        getData();
        if(period == JSON.stringify('')){
            setSelectColor("gray")
            setSelectFonthWieght("bolder")
        }else{
            setSelectColor("black")
            setSelectFonthWieght("normal")
        }
    }, [period, dateFrom, dateTo]);

    return (
        <section className='column'>
        <SubNav visibility="hidden"/>
        <div className='row overlay'>
          <LeftSide/>
            <div id='ratioOverlaay'>
                <div id='ratioHomeform'>
                    <div className='reverseDiv'>
                        <div>
                            <strong><p>From</p></strong>
                            <input type="date" id="filterDateFrom" name="filterDateFrom" value ={dateFrom} onChange={changeDateFrom}/>
                            <strong><p>To</p></strong>
                            <input type="date" id="filterDateTo" name="filterDateTo" value={dateTo} onChange={changeDateTo}/>
                            <select value={period} onChange={(e)=>{setPeriod(e.target.value);  applyPeriod(e) }} style={{fontWeight:selectFonthWieght, color:selectColor}} >
                                <option value={JSON.stringify('')}>period</option>
                                <option value={JSON.stringify('week')}> 7 days ago</option> 
                                <option value={JSON.stringify('month')}> this Month</option> 
                                <option value={JSON.stringify('year')}> this Year</option> 
                            </select>
                        </div>
                    </div>
                </div>

                <div id='all_ratios_overlay'>
                    <div className='all_ratios'>
                        <Link className='NavLink' to="/ledger/ratios/profit">
                            <div className='each_Ratio' id='ratio_home_profit'>
                                <div>
                                    <h3>Profit: <span>${profit}</span></h3>
                                    <h3>Profit Margin: <span>{profitMargin}%</span></h3>
                                    <h3>Markup: <span>{markup}%</span></h3>
                                </div>

                                <div>
                                    {/* <h1>58<sup className='sub'>%</sup></h1> */}
                                    <p> Total Revenue:{totalExpenditure}</p>
                                    <p>Total Expensis:{totalExpensis}</p>
                                </div>
                            </div>
                        </Link>

                        <Link className='NavLink' to="/ledger/ratios/netprofit">
                            <div className='each_Ratio' id='ratio_home_NetProfit'>
                                <div><h3>Net Profit</h3></div>
                                <div>
                                    <h1>47<sup className='sub'>%</sup></h1>
                                    <h3>$500,000</h3> 
                                    <p> Total Revenue:900,000</p>
                                    <p>Total Expensis:200,000</p>
                                </div>
                            </div>
                        </Link>

                        <Link className='NavLink' to="/ledger/ratios/freecashflow">
                            <div className='each_Ratio' id='ratio_home_FreeCashFlow'>
                                <div><h3>Free CashFlow</h3></div>
                                <div>
                                    <h1>66<sup className='sub'>%</sup></h1>
                                    <h3>$500,000</h3>
                                    <p> Total Revenue:900,000</p>
                                    <p>Total Expensis:200,000</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='all_ratios'>
                        

                        <Link className='NavLink' to="/ledger/ratios/ownersequity">
                            <div className='each_Ratio' id='ratio_home_OwnersEquity'>
                                <div><h3>Owner's Equity</h3></div>
                                <div>
                                    <h1>34<sup className='sub'>%</sup></h1>
                                    <h3>$500,000</h3>
                                    <p> Total Revenue:900,000</p>
                                    <p>Total Expensis:200,000</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
          <RightSide/>
        </div>
      </section>
    );
}

export default Ratios;
