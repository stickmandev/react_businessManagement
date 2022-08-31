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

import filter_icon_hover_icon from "../../../icons/filter_hover.png"

const Filtter = () => {
    const [categoryList, setcategoryList] = useState("");
    const [categorySelected, setCategorySelected] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [dateFromDisp, setDateFromDisp] = useState("Old records");
    const [dateToDisp, setDateToDisp] = useState("Today");
    const [filterError, setFilterError] = useState("");

    const {start_date, setStart_date} = useGlobalState('');
    const {end_date, setEnd_date} = useGlobalState('');
    const {filterCategory, setFilterCategory} = useGlobalState('');
    
    let navigate = useNavigate();
    const {access, setAccess} = useAccess('')

    const set_Access = (Access_token) => {
        setAccess(Access_token)
    }

    // GET category ..................................................................................................
    const getCategories_success = async(data) => {
        setcategoryList(
            data.results.map(function(item){
              return(
                <>
                    <div id='each_filter_category'>
                        <input type="radio" className='categoriesInput' id={"category"+item.id} name="category" value={item.name} onClick={()=>{setCategorySelected(item.id)}} />
                        <label for={item.name}>{item.name}</label>
                    </div>
                </>
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
        document.getElementById('subNav_filtter').style.backgroundImage = `url(${filter_icon_hover_icon}) `;
    }, []);
    

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
                <p id='FilterError'>sorry, you can not set filter To and From the same date</p>
            )
        }
    }   

    return (
        <section className='column'>
      <SubNav visibility="hidden"/>
      <div className='row overlay'>
        <LeftSide/>
          <span id='flilter_Overlay'>
            <div id='ledger_filtter'>
                <div id='select_filter_category' className='column'>
                    <strong><p id='select_filter_category_p'>Category</p></strong>
                    <div className='row' id='each_filter_category_overlay'>
                        {categoryList}
                    </div>
                </div>

                <div id='addFiltterCategory_Overlay'>
                    <strong><p>Add category</p></strong>
                    <input className="add_category" type="text" id="category" onChange={(e)=>{setNewCategory(e.target.value)}} value={newCategory} />
                    <button onClick={create_Category}>+</button>
                </div>
                
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
);
}

export default Filtter;
