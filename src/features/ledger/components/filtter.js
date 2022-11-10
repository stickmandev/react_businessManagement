import React from 'react';
import useAccess from "../../auths/accessToken"
import { useState, useEffect } from 'react';
import {create_cashFlow} from './api/cashFow_CRUD'
import {get_categories, create_categories} from "./api/categories_api"
import LeftSide from '../../defualt_Layouts/leftSide';
import RightSide from '../../defualt_Layouts/rightSide';
import SubNav from '../../defualt_Layouts/subNav';
import "./filter.css"
import Moment from 'react-moment';
import moment from "moment";
import useGlobalState from "../../../Store_&_State/GlobalState"
import { useNavigate } from "react-router-dom";
import SubNav_mobile from '../../defualt_Layouts/subNav_mobile';

import filter_icon_hover_icon from "../../../icons/filter_hover.png"

const Filtter = () => {
    const [stream, setStream] = useState([]);
    const {streamList, setStreamList} = useGlobalState([]);
    const {streamFilter, setStreamFilter} = useGlobalState([]);

    const [categoryList, setcategoryList] = useState("");
    const [categorySelected, setCategorySelected] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [categorySelectFontWieght, setCategorySelectFontWieght] = useState("bolder");
    const [categorySelectColor, setCategorySelectColor] = useState("");

    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [dateFromDisp, setDateFromDisp] = useState("Old records");
    const [dateToDisp, setDateToDisp] = useState("Today");
    const [filterError, setFilterError] = useState("");

    // const [ButtonColorToggle, setButtonButtonToggleToggle] = useState(false);

    const {start_date, setStart_date} = useGlobalState('');
    const {end_date, setEnd_date} = useGlobalState('');
    const {filterCategory, setFilterCategory} = useGlobalState('');
    
    let navigate = useNavigate();
    const {access, setAccess} = useAccess('')

    const set_Access = (Access_token) => {
        setAccess(Access_token)
    }


    // set stream data............................................................................................
    useEffect(() => {
        setStream(
          streamList.map(function(item){
            return(
                <button 
                    className='streamBTNs' 
                    id={'stream'+item.id} 
                    required 
                    onClick={(e)=>{ 
                        e.preventDefault(); 
                        
                        
                        const streamBTNs = document.getElementsByClassName('streamBTNs')
                        const elemBackgroundColor = window.getComputedStyle(e.target).backgroundColor

                        if(elemBackgroundColor !== 'rgb(127, 119, 224)'){
                            e.target.style.backgroundColor = 'var(--color5)'
                            e.target.style.color = 'var(--textColor1)'
                            setStreamFilter(
                                oldArray => [
                                    ...oldArray,(
                                        `selected_id=${item.id}&`
                                    )
                                ]
                            );
                        }else{
                            e.target.style.backgroundColor = 'var(--color1)'
                            e.target.style.color = 'var(--textColor5)'
                            setStreamFilter(
                                oldArray => [
                                    ...oldArray.filter(
                                        (n) =>  n !== `selected_id=${item.id}&`
                                    )
                                ]
                            );
                        }
                    } 
                }>
                    {item.name}
                </button>
            )
          })
        );
        console.log(streamFilter)
    }, [streamList,streamFilter]);

    // GET category ..................................................................................................
    const getCategories_success = async(data) => {
        setcategoryList(
            data.results.map(function(item){
              return(
                <option value={JSON.stringify(item.id)}>{item.name}</option> 
              )
            })
        )
    };

    const getCategories_fail = async(failed) => {
        console.log(failed)
    };

    const load_categories = () => {
        get_categories(getCategories_success, getCategories_fail, access, setAccess)
    }

    useEffect(() => {
        load_categories()
        // document.getElementById('subNav_filtter').style.backgroundImage = `url(${filter_icon_hover_icon}) `;
    }, []);

    useEffect(() => {
        if(categorySelected === '' || categorySelected === JSON.stringify('')){
            setCategorySelectFontWieght('bold')
            setCategorySelectColor('gray')
        }else{
            setCategorySelectFontWieght('normal')
            setCategorySelectColor('black')
        }
    }, [categorySelected]);
    

    // category created................................................................................................
    const create_Category_Success = () => {
        alert('category created')
        load_categories() 
    }

    const create_Category = async(e)=>{
        e.preventDefault()
        await create_categories(newCategory, create_Category_Success, access, set_Access);
    };

    const changeDateFrom = (e) => {
        setDateFrom(e.target.value)
    }
    
    const changeDateTo = (e) => {
        setDateTo(e.target.value)
    }
    
    useEffect(() => {
        if(dateFrom !==""){
            setDateFromDisp(moment(dateFrom).format("Do, MMM.  YYYY"))
        }

        if(dateTo !==""){
            setDateToDisp(`${moment(dateTo).format("Do, MMM.  YYYY")}`)
        }
    }, [dateFrom, dateTo]);

    const filterData = (e) => {
        e.preventDefault()
        setFilterCategory(categorySelected)
        
        if(dateFrom.replace(/-/g,"") !== dateTo.replace(/-/g,"") ){
            if(dateFrom.replace(/-/g,"")<dateTo.replace(/-/g,"")){
                setStart_date(dateFrom)
                setEnd_date(dateTo)
                navigate("../ledger", { replace: true });
            }
    
            if(dateTo.replace(/-/g,"")<dateFrom.replace(/-/g,"")){
                setStart_date(dateTo)
                setEnd_date(dateFrom)
                navigate("../ledger", { replace: true });
            }
        }
        else if((dateFrom.replace(/-/g,"")==="" && dateTo.replace(/-/g,"")==="")){
                navigate("../ledger", { replace: true });
        }else{ 
            setFilterError(
                <p id='FilterError'>sorry, you can not set filter To and From the same day</p>
            )
        }
    }   

    return (
        <>
            <section id='filter_section' className='column'>
            <SubNav visibility="hidden"/>
            <div className='row overlay'>
                <LeftSide/>
                <span id='flilter_Overlay'>
                    <div id='ledger_filtter'>
                        <div id='filterCategoryOverlay' >
                            <p id='filterCategoryOverlay_p'>Category <br/></p> 
                            <select value={categorySelected} onChange={(e)=>{setCategorySelected(e.target.value)}} style={{fontWeight:categorySelectFontWieght, color:categorySelectColor}} >
                                <option value={JSON.stringify('')}>Choose category</option>
                                    {categoryList }
                                {/* <option value="grapefruit">coco</option> */}
                            </select>
                        </div>

                        <div id='filter_accountOverlay'>
                            <strong>Account</strong>
                            <div>
                              {stream}
                            </div>
                        </div><br/>
                        
                        <div id='filterDate_overlay'>
                            <strong><p id='setPeriod_p'>Set period</p></strong>
                            <strong><p id='dateDisp'>{`From ${dateFromDisp} To ${dateToDisp}`}</p></strong>
                            
                            <div id='filterDate'>
                                <div>
                                    <strong><span>From</span></strong>
                                    <input type="date" id="filterDateFrom" name="filterDateFrom" value ={dateFrom} onChange={changeDateFrom}/>
                                </div>

                                <div>
                                    <strong><span>To</span></strong>
                                    <input type="date" id="filterDateTo" name="filterDateTo" value={dateTo} onChange={changeDateTo}/>
                                </div>
                            </div>
                            {filterError}

                            <div id='filter_btn_Overlay'>
                                <button id='filter_btn' onClick={filterData}>Filter</button>
                            </div>
                        </div>
                    </div>
                </span>
                <RightSide/>
            </div>
            </section>
            <SubNav_mobile/>
        </>
    );
}

export default Filtter;
