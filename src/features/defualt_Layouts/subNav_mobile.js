import "./subNav.css"
import { NavLink } from "react-router-dom";
import useGlobalState from "../../Store_&_State/GlobalState"
import { useState, useEffect } from 'react';


import graph_white_icon from "../../icons/mobile_icon/graph_white.png"

import add_white_icon from "../../icons/mobile_icon/add_white.png"

import cashbook_white_icon from "../../icons/mobile_icon/cashbook_white.png"

import ratio_white_icon from "../../icons/mobile_icon/ratio_white.png"

import filter_white_icon from "../../icons/mobile_icon/filter_white.png"


import React from 'react';

const SubNav_mobile = () => {
    const {search, setSearch} = useGlobalState('');

    const [AddNav_Active, setAddRecNav_Active] = useState(false);
    const [CashbookNav_Active, setCashbookNav_Active] = useState(false);
    const [GraphsNav_Active, setGraphsNav_Active] = useState(false);
    const [RatiosNav_Active, setRatiosNav_Active] = useState(false);
    const [FilterNav_Active, setFilterNav_Active] = useState(false);
    // const [settingsNav_Active, setsettingsNav_Active] = useState(false);

    const [AddIsHoverd, setAddIsHoverd] = useState(false);
    const [CashbookIsHoverd, setCashbookIsHoverd] = useState(false);
    const [GraphsIsHoverd, setGraphsIsHoverd] = useState(false);
    const [RatiosIsHoverd, setRatiosIsHoverd] = useState(false);
    const [FilterIsHoverd, setFilterIsHoverd] = useState(false);
    // const [settingsIsHoverd, setsettingsIsHoverd] = useState(false);

    const [AddIsHoverdIcons, setAddIsHoverdIcons] = useState(false);
    const [CashbookIsHoverdIcons, setCashbookIsHoverdIcons] = useState(false);
    const [GraphsIsHoverdIcons, setGraphsIsHoverdIcons] = useState(false);
    const [RatiosIsHoverdIcons, setRatiosIsHoverdIcons] = useState(false);
    const [FilterIsHoverdIcons, setFilterIsHoverdIcons] = useState(false);
    // const [settingsIsHoverdIcons, setsettingsIsHoverdIcons] = useState(false);

    const [Boder_active, setBoder_active] = useState("2px solid var(--color1)");
    const [Boder_hover, setBoder_hover] = useState("2px solid var(--color1)");
    const [Boder_normal, setBoder_normal] = useState("2px solid var(--color4)");

    const [PColor_active, setPColor_active] = useState('var(--color1)');
    const [PColor_hover, setPColor_hover] = useState('var(--color1)');
    const [PColor_normal, setPColor_normal] = useState('var(--color1)');


    return (
        <>
            <div id="mobileSubNav" className="mobile">

                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setGraphsNav_Active(true) : setGraphsNav_Active(false)
                        // return {
                        //     color: isActive ? PColor_active : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" to="/ledger/NotAvailableYet/Graphs"
                    onMouseEnter={() =>  {setGraphsIsHoverd(true); setGraphsIsHoverdIcons(true)}} onMouseLeave={() =>  {setGraphsIsHoverd(false); setGraphsIsHoverdIcons(false)}}
                >
                    <div className='subNav_selected' style={GraphsNav_Active?  {border:Boder_active} : GraphsIsHoverd? {border:Boder_hover} : {border:Boder_normal}} >
                        <div div id="subNav_graphs" className="subNav_icon_div" style={GraphsNav_Active? {backgroundImage:`url(${graph_white_icon})`} : GraphsIsHoverdIcons? { backgroundImage:`url(${graph_white_icon})` } : {backgroundImage:`url(${graph_white_icon})`}}></div>
                        <p id="subNav_graphs_p" style={GraphsNav_Active? {color:PColor_active} : GraphsIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>Graphs</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setAddRecNav_Active(true) : setAddRecNav_Active(false)
                        // return {
                        //     color: isActive ? PColor_active : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/NotAvailableYet/Add"
                    onMouseEnter={() =>  {setAddIsHoverd(true); setAddIsHoverdIcons(true)}} onMouseLeave={() =>  {setAddIsHoverd(false); setAddIsHoverdIcons(false)}}
                >
                    <div className='subNav_selected' style={AddNav_Active?  {border:Boder_active} : AddIsHoverd? {border:Boder_hover} : {border:Boder_normal}} >
                        <div id='subNav_add' className="subNav_icon_div" style={AddNav_Active? {backgroundImage:`url(${add_white_icon})`} : AddIsHoverdIcons? { backgroundImage:`url(${add_white_icon})` } : {backgroundImage:`url(${add_white_icon})`}}></div>
                        <p id="add" style={AddNav_Active? {color:PColor_active} : AddIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>Add</p>
                    </div>
                </NavLink>
               


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setCashbookNav_Active(true) : setCashbookNav_Active(false)
                        // return {
                        //     color: isActive ? PColor_active : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/MobileLedger"
                    onMouseEnter={() =>  {setCashbookIsHoverd(true); setCashbookIsHoverdIcons(true)}} onMouseLeave={() =>  {setCashbookIsHoverd(false); setCashbookIsHoverdIcons(false)}}
                >
                    <div className='subNav_selected' style={CashbookNav_Active?  {border:Boder_active} : CashbookIsHoverd? {border:Boder_hover} : {border:Boder_normal}} >
                        <div id="subNav_cash_book" className="subNav_icon_div" style={CashbookNav_Active? {backgroundImage:`url(${cashbook_white_icon})`} : CashbookIsHoverdIcons? { backgroundImage:`url(${cashbook_white_icon})` } : {backgroundImage:`url(${cashbook_white_icon})`}}></div>
                        <p id="subNav_cash_book_p" style={CashbookNav_Active? {color:PColor_active} : CashbookIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>cash book</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setRatiosNav_Active(true) : setRatiosNav_Active(false)
                        // return {
                        //     color: isActive ? PColor_active : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/ratios"
                    onMouseEnter={() =>  {setRatiosIsHoverd(true); setRatiosIsHoverdIcons(true)}} onMouseLeave={() =>  {setRatiosIsHoverd(false); setRatiosIsHoverdIcons(false)}}
                >
                    <div className='subNav_selected' style={RatiosNav_Active?  {border:Boder_active} : RatiosIsHoverd? {border:Boder_hover} : {border:Boder_normal}} >
                        <div id="subNav_ratios" className="subNav_icon_div" style={RatiosNav_Active? {backgroundImage:`url(${ratio_white_icon})`} : RatiosIsHoverdIcons? { backgroundImage:`url(${ratio_white_icon})` } : {backgroundImage:`url(${ratio_white_icon})`}}></div>
                        <p id="subNav_ratios_p" style={RatiosNav_Active? {color:PColor_active} : RatiosIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>Ratios</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setFilterNav_Active(true) : setFilterNav_Active(false)
                        // return {
                        //     color: isActive ? PColor_active : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/filtter"
                    onMouseEnter={() =>  {setFilterIsHoverd(true); setFilterIsHoverdIcons(true)}} onMouseLeave={() =>  {setFilterIsHoverd(false); setFilterIsHoverdIcons(false)}}
                >
                    <div className='subNav_selected' style={FilterNav_Active?  {border:Boder_active} : FilterIsHoverd? {border:Boder_hover} : {border:Boder_normal}} >
                        <div id="subNav_filtter" className="subNav_icon_div" style={FilterNav_Active? {backgroundImage:`url(${filter_white_icon})`} : FilterIsHoverdIcons? { backgroundImage:`url(${filter_white_icon})` } : {backgroundImage:`url(${filter_white_icon})`}}></div>
                        <p id="subNav_filtter_p" style={FilterNav_Active? {color:PColor_active} : FilterIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>Filtter</p>
                    </div>
                </NavLink>
            </div>
        </>
        
    );
}

export default SubNav_mobile;
