import './ratios.css'
import { useState, useEffect } from 'react';
import LeftSide from '../../defualt_Layouts/leftSide';
import RightSide from '../../defualt_Layouts/rightSide';
import SubNav from '../../defualt_Layouts/subNav';
import { Link } from "react-router-dom";
import { get_ratioApi } from './api/ratios_api';
import useAccess from "../../auths/accessToken"
import useGlobalState from "../../../Store_&_State/GlobalState"
import NumberFormat from 'react-number-format';
import SubNav_mobile from '../../defualt_Layouts/subNav_mobile';

const Ratios = () => {
    // const [dateFrom, setDateFrom] = useState("");
    // const [dateTo, setDateTo] = useState("");
    // const [period, setPeriod] = useState('');
    const [selectFonthWieght, setSelectFonthWieght] = useState("normal");
    const [selectColor, setSelectColor] = useState("gray");

    const {access, setAccess} = useAccess('')
    const {ratioDetailList, setRatioDetailList} = useGlobalState('')
    const {totalExpenditure, setTotalExpenditure} = useGlobalState('')
    const {totalExpensis, setTotalExpensis} = useGlobalState('')
    const {profit, setProfit} = useGlobalState('')
    const {profitMargin, setProfitMargin} = useGlobalState('')
    const {markup, setMarkup} = useGlobalState('')
    const {ratioPeriodInterval, setRatioPeriodInterval} = useGlobalState('')
    const {ratioDateFrom, setRatioDateFrom} = useGlobalState('')
    const {ratioDateTo, setRatioDateTo} = useGlobalState('')
    const {ratioPeriod, setRatioPeriod} = useGlobalState('')

    const set_Access = (Access_token) => {
        setAccess(Access_token)
    }

    const changeDateFrom = (e) => {
        setRatioDateFrom(e.target.value)
    }
    
    const changeDateTo = (e) => {
        setRatioDateTo(e.target.value)
    }

    const ratios_Success = async(data) => {
        const result = data.results
        console.log(result)

        setRatioDetailList(result[0])
        if(result[1].total_Revenue !== null){
            setTotalExpenditure(result[1].total_Revenue)
        }else{
            setTotalExpenditure(0)
        }

        if(result[2].total_Expensis !== null){
            setTotalExpensis(result[2].total_Expensis)
        }else{
            setTotalExpensis(0)
        }

        if(result[3].profit !== null){
            setProfit(result[3].profit)
        }else{
            setProfit(0)
        }

        if(result[4].profit_Margin !== null){
            setProfitMargin(result[4].profit_Margin)
        }else{
            setProfitMargin(0)
        }

        if(result[5].markup !== null){
            setMarkup(result[5].markup)
        }else{
            setMarkup(0)
        }
    };

    const ratios_fail = (text) => {
        console.log("Error: ", text)
    }
    
    const applyPeriod = (e) => {
        setRatioDateFrom('')
        setRatioDateTo('')
    }

    const getData = async()=>{
        await get_ratioApi(ratios_Success, ratios_fail, ratioPeriodInterval, ratioDateFrom, ratioDateTo, ratioPeriod, access, set_Access,);
    };

    useEffect(()=>{
        getData();
        if(ratioPeriod == ''){
            setSelectColor("gray")
            setSelectFonthWieght("bolder")
        }else{
            setSelectColor("black")
            setSelectFonthWieght("normal")
        }
    }, [ratioPeriodInterval, ratioDateFrom, ratioDateTo, ratioPeriod]);

    return (
        <section id='ledgerRation_section' className='column'>
            <SubNav visibility="hidden"/>
            <div className='row overlay'>
            <LeftSide/>
                <div id='ratioOverlay'>
                    <div id='ratioHomeform'>
                        <div className='reverseDiv'>
                            <div>
                                <strong className='desktop'><p>From</p></strong>
                                <p className='mobile'>From</p>
                                <input type="date" id="filterDateFrom" name="filterDateFrom" value ={ratioDateFrom} onChange={changeDateFrom}/>
                                <strong className='desktop'><p>To</p></strong>
                                <p className='mobile'>To</p>
                                <input type="date" id="filterDateTo" name="filterDateTo" value={ratioDateTo} onChange={changeDateTo}/>
                                <select value={ratioPeriod} onChange={(e)=>{setRatioPeriod(e.target.value);  applyPeriod(e) }} style={{fontWeight:selectFonthWieght, color:selectColor}} >
                                    <option value=''>ratioPeriod</option>
                                    <option value='week'> 7 days ago</option> 
                                    <option value='month'> this Month</option> 
                                    <option value='year'> this Year</option> 
                                    {/* <option value={JSON.stringify('')}>ratioPeriod</option>
                                    <option value={JSON.stringify('week')}> 7 days ago</option> 
                                    <option value={JSON.stringify('month')}> this Month</option> 
                                    <option value={JSON.stringify('year')}> this Year</option>  */}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div id='all_ratios_overlay'>
                            <Link className='NavLink' to="/ledger/ratios/profit">
                                <div className='each_Ratio_BigOverlay' id='ratio_home_profit'>
                                    <div>
                                        <h3>
                                            Profit 
                                            <span className='h3_normal'>
                                                <NumberFormat
                                                    className="ratio_number_values"
                                                    value={profit}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'$'}
                                                />
                                            </span>
                                        </h3>

                                        <h3>Profit Margin <span className="h3_percentage">{profitMargin}<sup className='sub'>%</sup></span></h3>
                                        <h3>Markup <span className="h3_percentage">{markup}<sup className='sub'>%</sup></span></h3>
                                    </div>

                                    <div>
                                        <p> Total Revenue:
                                            <NumberFormat
                                                className="ratio_number_values"
                                                value={totalExpenditure}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'$'}
                                            />
                                        </p>
                                        <p>
                                            Total Expensis:
                                            <NumberFormat
                                                className="ratio_number_values"
                                                value={totalExpensis}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'$'}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link className='NavLink' to="/ledger/NotAvailableYet/ratio">
                                <div className='each_Ratio_SmallOverlay' id='ratio_home_NetProfit'>
                                    <h3 className='each_Ratio_SmallOverlay_titile' >Net Profit</h3>
                                    <div className='each_Ratio_SmallOverlay_details'>
                                        <div>
                                            <h1 className='desktop'>98<sup className='sub'>%</sup></h1>
                                            <h3 className='desktop'>$500,000</h3> 
                                            <p> Total Revenue: 900,000</p>
                                            <p>Total Expensis: 200,000</p>
                                        </div>
                                        
                                        <div className='mobile'>
                                            <h1>47<sup className='sub'>%</sup></h1>
                                            <h3 >$500,000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link className='NavLink' to="/ledger/NotAvailableYet/ratio">
                                <div className='each_Ratio_SmallOverlay' id='ratio_home_FreeCashFlow'>
                                    <h3 className='each_Ratio_SmallOverlay_titile'>Free CashFlow</h3>
                                    <div className='each_Ratio_SmallOverlay_details'>
                                        <div>
                                            <h1 className='desktop'>66<sup className='sub'>%</sup></h1>
                                            <h3 className='desktop'>$500,000</h3> 
                                            <p> Total Revenue: 900,000</p>
                                            <p>Total Expensis: 200,000</p>
                                        </div>
                                        
                                        <div className='mobile'>
                                            <h1>66<sup className='sub'>%</sup></h1>
                                            <h3 >$500,000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link className='NavLink' to="/ledger/NotAvailableYet/ratio">
                                <div className='each_Ratio_SmallOverlay' id='ratio_home_OwnersEquity'>
                                <h3 className='each_Ratio_SmallOverlay_titile'>Owner's Equity</h3>
                                    <div className='each_Ratio_SmallOverlay_details'>
                                        <div>
                                            <h1 className='desktop'>34<sup className='sub'>%</sup></h1>
                                            <h3 className='desktop'>$500,000</h3> 
                                            <p> Total Revenue: 900,000</p>
                                            <p>Total Expensis: 200,000</p>
                                        </div>
                                        
                                        <div className='mobile'>
                                            <h1>66<sup className='sub'>%</sup></h1>
                                            <h3 >$500,000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </Link>
                    </div>
                </div>
            <RightSide/>
            </div>
            <SubNav_mobile/>
        </section>
    );
}

export default Ratios;
