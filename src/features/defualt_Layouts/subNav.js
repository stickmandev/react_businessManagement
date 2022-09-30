import "./subNav.css"
import { NavLink } from "react-router-dom";
import useGlobalState from "../../Store_&_State/GlobalState"
import { useState, useEffect } from 'react';
import recurring_rec_dark_icon from "../../icons/recurring_record_dark.png"
import recurring_rec_hover_icon from "../../icons/recurring_record_hover.png"
// import recurring_record_active from "../../icons/recurring_record_active.png"

import convert_to_pdf_dark_icon from "../../icons/convert_to_pdf_dark_icon.png"
import convert_to_pdf_hover_icon from "../../icons/convert_to_pdf_hover_icon.png"
// import convert_to_pdf_active_icon from "../../icons/convert_to_pdf_active_icon.png"

import graph_dark_icon from "../../icons/graph_dark_icon.png"
import graph_hover_icon from "../../icons/graph_hover_icon.png"
import graph_active_icon from "../../icons/graph_active_icon.png"

import ratio_icon_dark_icon from "../../icons/ratio_dark.png"
import ratio_icon_hover_icon from "../../icons/ratio_hover.png"
import ratio_icon_active_icon from "../../icons/ratio_active.png"

import filter_icon_dark_icon from "../../icons/filter_dark.png"
import filter_icon_hover_icon from "../../icons/filter_hover.png"
import filter_icon_active_icon from "../../icons/filter_active.png"

import settings_dark_icon from "../../icons/settings_dark_icon.png"
import settings_hover_icon from "../../icons/settings_hover_icon.png"
import settings_active_icon from "../../icons/settings_active_icon.png"

import React from 'react';

const SubNav = (props) => {
    const {search, setSearch} = useGlobalState('');

    const [RecurringRecNav_Active, setRecurringRecNav_Active] = useState(false);
    const [ConvertToPdfNav_Active, setConvertToPdfNav_Active] = useState(false);
    const [GraphsNav_Active, setGraphsNav_Active] = useState(false);
    const [RatiosNav_Active, setRatiosNav_Active] = useState(false);
    const [FilterNav_Active, setFilterNav_Active] = useState(false);
    const [settingsNav_Active, setsettingsNav_Active] = useState(false);

    const [RecurringRecIsHoverd, setRecurringRecIsHoverd] = useState(false);
    const [ConvertToPdfIsHoverd, setConvertToPdfIsHoverd] = useState(false);
    const [GraphsIsHoverd, setGraphsIsHoverd] = useState(false);
    const [RatiosIsHoverd, setRatiosIsHoverd] = useState(false);
    const [FilterIsHoverd, setFilterIsHoverd] = useState(false);
    const [settingsIsHoverd, setsettingsIsHoverd] = useState(false);

    const [RecurringRecIsHoverdIcons, setRecurringRecIsHoverdIcons] = useState(false);
    const [ConvertToPdfIsHoverdIcons, setConvertToPdfIsHoverdIcons] = useState(false);
    const [GraphsIsHoverdIcons, setGraphsIsHoverdIcons] = useState(false);
    const [RatiosIsHoverdIcons, setRatiosIsHoverdIcons] = useState(false);
    const [FilterIsHoverdIcons, setFilterIsHoverdIcons] = useState(false);
    const [settingsIsHoverdIcons, setsettingsIsHoverdIcons] = useState(false);


    const [BoderBottom_active, setBoderBottom_active] = useState("6px solid var(--color5)");
    const [BoderBottom_hover, setBoderBottom_hover] = useState("0px solid var(--color1)");
    const [BoderBottom_normal, setBoderBottom_normal] = useState("6px solid var(--color1)");

    const [PColor_active, setPColor_active] = useState('var(--color5)');
    const [PColor_hover, setPColor_hover] = useState('var(--color5)');
    const [PColor_normal, setPColor_normal] = useState('var(--color)');


    return (
        <span id="subNav" className="desktop">
            <div id="subNav_overlay">
                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setRecurringRecNav_Active(true) : setRecurringRecNav_Active(false)
                        // return {
                        //     color: isActive ? PColor_active : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/NotAvailableYet/RecurringRecord"
                    onMouseEnter={() =>  {setRecurringRecIsHoverd(true); setRecurringRecIsHoverdIcons(true)}} onMouseLeave={() =>  {setRecurringRecIsHoverd(false); setRecurringRecIsHoverdIcons(false)}}
                >
                    <div className='subNav_selected' style={RecurringRecNav_Active?  {borderBottom:BoderBottom_active} : RecurringRecIsHoverd? {borderBottom:BoderBottom_hover} : {borderBottom:BoderBottom_normal}} >
                        <div id='subNav_recurring_record' className="subNav_icon_div" style={RecurringRecNav_Active? {backgroundImage:`url(${recurring_rec_hover_icon})`} : RecurringRecIsHoverdIcons? { backgroundImage:`url(${recurring_rec_hover_icon})` } : {backgroundImage:`url(${recurring_rec_dark_icon})`}}></div>
                        <p id="subNav_recurring_record_p" style={RecurringRecNav_Active? {color:PColor_active} : RecurringRecIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>Recurring record</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setConvertToPdfNav_Active(true) : setConvertToPdfNav_Active(false)
                        // return {
                        //     color: isActive ? PColor_active : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/NotAvailableYet/convert_to_pdf"
                    onMouseEnter={() =>  {setConvertToPdfIsHoverd(true); setConvertToPdfIsHoverdIcons(true)}} onMouseLeave={() =>  {setConvertToPdfIsHoverd(false); setConvertToPdfIsHoverdIcons(false)}}
                >
                    <div className='subNav_selected' style={ConvertToPdfNav_Active?  {borderBottom:BoderBottom_active} : ConvertToPdfIsHoverd? {borderBottom:BoderBottom_hover} : {borderBottom:BoderBottom_normal}} >
                        <div id="subNav_convert_to_pdf" className="subNav_icon_div" style={ConvertToPdfNav_Active? {backgroundImage:`url(${convert_to_pdf_hover_icon})`} : ConvertToPdfIsHoverdIcons? { backgroundImage:`url(${convert_to_pdf_hover_icon})` } : {backgroundImage:`url(${convert_to_pdf_dark_icon})`}}></div>
                        <p id="subNav_convert_to_pdf_p" style={ConvertToPdfNav_Active? {color:PColor_active} : ConvertToPdfIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>Convert to PDF</p>
                    </div>
                </NavLink>


                <div  id="search_overlay"  style={{ visibility:`${props.visibility}`}}>
                    <input type="text" value={search} placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
                    <div id="search_icon_overlay">
                        <div id="search_icon"></div>
                    </div>
                </div>


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
                    <div className='subNav_selected' style={GraphsNav_Active?  {borderBottom:BoderBottom_active} : GraphsIsHoverd? {borderBottom:BoderBottom_hover} : {borderBottom:BoderBottom_normal}} >
                        <div div id="subNav_graphs" className="subNav_icon_div" style={GraphsNav_Active? {backgroundImage:`url(${graph_hover_icon})`} : GraphsIsHoverdIcons? { backgroundImage:`url(${graph_hover_icon})` } : {backgroundImage:`url(${graph_dark_icon})`}}></div>
                        <p id="subNav_graphs_p" style={GraphsNav_Active? {color:PColor_active} : GraphsIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>Graphs</p>
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
                    <div className='subNav_selected' style={RatiosNav_Active?  {borderBottom:BoderBottom_active} : RatiosIsHoverd? {borderBottom:BoderBottom_hover} : {borderBottom:BoderBottom_normal}} >
                        <div id="subNav_ratios" className="subNav_icon_div" style={RatiosNav_Active? {backgroundImage:`url(${ratio_icon_hover_icon})`} : RatiosIsHoverdIcons? { backgroundImage:`url(${ratio_icon_hover_icon})` } : {backgroundImage:`url(${ratio_icon_dark_icon})`}}></div>
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
                    <div className='subNav_selected' style={FilterNav_Active?  {borderBottom:BoderBottom_active} : FilterIsHoverd? {borderBottom:BoderBottom_hover} : {borderBottom:BoderBottom_normal}} >
                        <div id="subNav_filtter" className="subNav_icon_div" style={FilterNav_Active? {backgroundImage:`url(${filter_icon_hover_icon})`} : FilterIsHoverdIcons? { backgroundImage:`url(${filter_icon_hover_icon})` } : {backgroundImage:`url(${filter_icon_dark_icon})`}}></div>
                        <p id="subNav_filtter_p" style={FilterNav_Active? {color:PColor_active} : FilterIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>Filtter</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setsettingsNav_Active(true) : setsettingsNav_Active(false)
                        // return {
                        //     color: isActive ? PColor_active : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/NotAvailableYet/Settings"
                    onMouseEnter={() =>  {setsettingsIsHoverd(true); setsettingsIsHoverdIcons(true)}} onMouseLeave={() => {setsettingsIsHoverd(false); setsettingsIsHoverdIcons(false)} }
                >
                    <div className='subNav_selected' style={settingsNav_Active?  {borderBottom:BoderBottom_active} : settingsIsHoverd? {borderBottom:BoderBottom_hover} : {borderBottom:BoderBottom_normal}} >
                        <div id="subNav_settings" className="subNav_icon_div" style={settingsNav_Active? {backgroundImage:`url(${settings_hover_icon})`} : settingsIsHoverdIcons? { backgroundImage:`url(${settings_hover_icon})` } : {backgroundImage:`url(${settings_dark_icon})`}}></div>
                        <p id="subNav_settings_p" style={settingsNav_Active? {color:PColor_active} : settingsIsHoverd? { color:PColor_hover } : {color:PColor_normal}}>Settings</p>
                    </div>
                </NavLink>
            </div>
        </span>
        
    );
}

export default SubNav;
