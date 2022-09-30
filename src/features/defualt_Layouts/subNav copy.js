import "./subNav.css"
import { NavLink } from "react-router-dom";
import useGlobalState from "../../Store_&_State/GlobalState"
import { useState, useEffect } from 'react';

import recurring_rec_dark_icon from "../../icons/recurring_record_dark.png"
import recurring_rec_hover_icon from "../../icons/recurring_record_hover.png"

import convert_to_pdf_dark_icon from "../../icons/convert_to_pdf_dark_icon.png"

import graph_dark_icon from "../../icons/graph_dark_icon.png"

import ratio_icon_dark_icon from "../../icons/ratio_dark.png"
import ratio_icon_hover_icon from "../../icons/ratio_hover.png"
import ratio_icon_active_icon from "../../icons/ratio_dark.png"

import filter_icon_dark_icon from "../../icons/filter_dark.png"
import filter_icon_hover_icon from "../../icons/filter_hover.png"
import filter_icon_active_icon from "../../icons/filter_active.png"

import settings_dark_icon from "../../icons/settings_dark_icon.png"

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



    const subNav_selected_hover = (e) => {
        // console.log(e.target.firstChild.id)
        // if(e.target.firstChild.id !== undefined && e.target.firstChild.id !== null){
        //     switch( e.target.firstChild.id) {
        //         case 'subNav_recurring_record':
        //             if(window.getComputedStyle( document.getElementById('subNav_recurring_record_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
        //                 document.getElementById('subNav_recurring_record_p').style.color = 'rgb(142, 143, 197)';
        //             }
        //             else{
        //                 document.getElementById('subNav_recurring_record').style.backgroundImage = `url(${recurring_rec_hover_icon})`;
        //                 document.getElementById('subNav_recurring_record_p').style.color = 'rgb(142, 143, 196)';
        //             }
        //             break;
        //         case 'subNav_convert_to_pdf':
        //             if(window.getComputedStyle( document.getElementById('subNav_convert_to_pdf_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
        //                 document.getElementById('subNav_convert_to_pdf_p').style.color = 'rgb(142, 143, 197)';
        //             }
        //             else{
        //                 document.getElementById('subNav_convert_to_pdf').style.backgroundImage = `url(${convert_to_pdf_dark_icon})`;
        //                 document.getElementById('subNav_convert_to_pdf_p').style.color = 'rgb(142, 143, 196)';
        //             }
        //             break;
        //         case 'subNav_graphs':
        //             if(window.getComputedStyle( document.getElementById('subNav_graphs_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
        //                 document.getElementById('subNav_graphs_p').style.color = 'rgb(142, 143, 197)';
        //             }
        //             else{
        //                 document.getElementById('subNav_graphs').style.backgroundImage = `url(${graph_dark_icon})`;
        //                 document.getElementById('subNav_graphs_p').style.color = 'rgb(142, 143, 196)';
        //             }
        //             break;
        //         case 'subNav_ratios':
        //             if(window.getComputedStyle( document.getElementById('subNav_ratios_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
        //                 document.getElementById('subNav_ratios_p').style.color = 'rgb(142, 143, 197)';
        //             }
        //             else{
        //                 document.getElementById('subNav_ratios').style.backgroundImage = `url(${ratio_icon_hover_icon})`;
        //                 document.getElementById('subNav_ratios_p').style.color = 'rgb(142, 143, 196)';
        //             }
        //             break;
        //         case 'subNav_filtter':
        //             if(window.getComputedStyle( document.getElementById('subNav_filtter_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
        //                 document.getElementById('subNav_filtter_p').style.color = 'rgb(142, 143, 197)';
        //             }
        //             else{
        //                 document.getElementById('subNav_filtter').style.backgroundImage = `url(${filter_icon_hover_icon})`;
        //                 document.getElementById('subNav_filtter_p').style.color = 'rgb(142, 143, 196)';
        //             }
        //             break;
        //         case 'subNav_settings':
        //             if(window.getComputedStyle( document.getElementById('subNav_settings_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
        //                 document.getElementById('subNav_filtter_p').style.color = 'rgb(142, 143, 197)';
        //             }
        //             else{
        //                 document.getElementById('subNav_settings').style.backgroundImage = `url(${settings_dark_icon})`;
        //                 document.getElementById('subNav_settings_p').style.color = 'rgb(142, 143, 196)';
        //             }
        //             break;
        //         default:
        //     }
        // }
    }

    const subNav_selected_leave = (e) => {
        // switch( e.target.firstChild.id) {
        //     case 'subNav_recurring_record':
        //         if(window.getComputedStyle( document.getElementById('subNav_recurring_record_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
        //             document.getElementById('subNav_recurring_record').style.backgroundImage = `url(${recurring_rec_dark_icon})`;
        //             document.getElementById('subNav_recurring_record_p').style.color = 'black';
        //         }
        //         break;
        //     case 'subNav_convert_to_pdf':
        //         if(window.getComputedStyle( document.getElementById('subNav_convert_to_pdf_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
        //             document.getElementById('subNav_convert_to_pdf').style.backgroundImage = `url(${convert_to_pdf_dark_icon})`;
        //             document.getElementById('subNav_convert_to_pdf_p').style.color = 'black';
        //         }
        //         break;
        //     case 'subNav_graphs':
        //         if(window.getComputedStyle( document.getElementById('subNav_graphs_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
        //             document.getElementById('subNav_graphs').style.backgroundImage = `url(${graph_dark_icon})`;
        //             document.getElementById('subNav_graphs_p').style.color = 'black';
        //         }
        //         break;
        //     case 'subNav_ratios':
        //         if(window.getComputedStyle( document.getElementById('subNav_ratios_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
        //             document.getElementById('subNav_ratios').style.backgroundImage = `url(${ratio_icon_dark_icon})`;
        //             document.getElementById('subNav_ratios_p').style.color = 'black';
        //         }
        //         break;
        //     case 'subNav_filtter':
        //         if(window.getComputedStyle( document.getElementById('subNav_filtter_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
        //             document.getElementById('subNav_filtter').style.backgroundImage = `url(${filter_icon_dark_icon})`;
        //             document.getElementById('subNav_filtter_p').style.color = 'black';
        //         }
        //         break;
        //     case 'subNav_settings':
        //         if(window.getComputedStyle( document.getElementById('subNav_settings_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
        //             document.getElementById('subNav_settings').style.backgroundImage = `url(${settings_dark_icon})`;
        //             document.getElementById('subNav_settings_p').style.color = 'black';
        //         }
        //         break;
        //     default:
        // }
    }

    // useEffect(() => {
        
    // }, []);

    return (
        <span id="subNav" className="desktop">
            <div id="subNav_overlay">
                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setRecurringRecNav_Active(true) : setRecurringRecNav_Active(false)
                        // return {
                        //     color: isActive ? "var(--color5)" : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/NotAvailableYet/RecurringRecord"
                    onMouseEnter={() =>  setRecurringRecIsHoverd(true)} onMouseLeave={() =>  setRecurringRecIsHoverd(false)}
                >
                    <div className='subNav_selected' style={RecurringRecNav_Active?  {borderBottom:"3px solid var(--color5)"} : RecurringRecIsHoverd? {borderBottom:"3px solid var(--color7)"} : {borderBottom:"3px solid var(--color1)"}} >
                        <div id='subNav_recurring_record' className="subNav_icon_div"></div>
                        <p id="subNav_recurring_record_p" style={RecurringRecNav_Active? {color:"var(--color5)"} : RecurringRecIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Recurring record</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setConvertToPdfNav_Active(true) : setConvertToPdfNav_Active(false)
                        // return {
                        //     color: isActive ? "var(--color5)" : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/NotAvailableYet/convert_to_pdf"
                    onMouseEnter={() =>  setConvertToPdfIsHoverd(true)} onMouseLeave={() =>  setConvertToPdfIsHoverd(false)}
                >
                    <div className='subNav_selected' style={ConvertToPdfNav_Active?  {borderBottom:"3px solid var(--color5)"} : ConvertToPdfIsHoverd? {borderBottom:"3px solid var(--color7)"} : {borderBottom:"3px solid var(--color1)"}} >
                        <div id="subNav_convert_to_pdf" className="subNav_icon_div"></div>
                        <p id="subNav_convert_to_pdf_p" style={ConvertToPdfNav_Active? {color:"var(--color5)"} : ConvertToPdfIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Convert to PDF</p>
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
                        //     color: isActive ? "var(--color5)" : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" to="/ledger/NotAvailableYet/Graphs"
                    onMouseEnter={() =>  setGraphsIsHoverd(true)} onMouseLeave={() =>  setGraphsIsHoverd(false)}
                >
                    <div className='subNav_selected' style={GraphsNav_Active?  {borderBottom:"3px solid var(--color5)"} : GraphsIsHoverd? {borderBottom:"3px solid var(--color7)"} : {borderBottom:"3px solid var(--color1)"}} >
                        <div div id="subNav_graphs" className="subNav_icon_div"></div>
                        <p id="subNav_graphs_p" style={GraphsNav_Active? {color:"var(--color5)"} : GraphsIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Graphs</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setRatiosNav_Active(true) : setRatiosNav_Active(false)
                        // return {
                        //     color: isActive ? "var(--color5)" : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/ratios"
                    onMouseEnter={() =>  setRatiosIsHoverd(true)} onMouseLeave={() =>  setRatiosIsHoverd(false)}
                >
                    <div className='subNav_selected' style={RatiosNav_Active?  {borderBottom:"3px solid var(--color5)"} : RatiosIsHoverd? {borderBottom:"3px solid var(--color7)"} : {borderBottom:"3px solid var(--color1)"}} >
                        <div id="subNav_ratios" className="subNav_icon_div"></div>
                        <p id="subNav_ratios_p" style={RatiosNav_Active? {color:"var(--color5)"} : RatiosIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Ratios</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setFilterNav_Active(true) : setFilterNav_Active(false)
                        // return {
                        //     color: isActive ? "var(--color5)" : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/filtter"
                    onMouseEnter={() =>  setFilterIsHoverd(true)} onMouseLeave={() =>  setFilterIsHoverd(false)}
                >
                    <div className='subNav_selected' style={FilterNav_Active?  {borderBottom:"3px solid var(--color5)"} : FilterIsHoverd? {borderBottom:"3px solid var(--color7)"} : {borderBottom:"3px solid var(--color1)"}} >
                        <div id="subNav_filtter" className="subNav_icon_div"></div>
                        <p id="subNav_filtter_p" style={FilterNav_Active? {color:"var(--color5)"} : FilterIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Filtter</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setsettingsNav_Active(true) : setsettingsNav_Active(false)
                        // return {
                        //     color: isActive ? "var(--color5)" : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" 
                    to="/ledger/NotAvailableYet/Settings"
                    onMouseEnter={() =>  setsettingsIsHoverd(true)} onMouseLeave={() =>  setsettingsIsHoverd(false)}
                >
                    <div className='subNav_selected' style={settingsNav_Active?  {borderBottom:"3px solid var(--color5)"} : settingsIsHoverd? {borderBottom:"3px solid var(--color7)"} : {borderBottom:"3px solid var(--color1)"}} >
                        <div id="subNav_settings" className="subNav_icon_div"></div>
                        <p id="subNav_settings_p" style={settingsNav_Active? {color:"var(--color5)"} : settingsIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Settings</p>
                    </div>
                </NavLink>
            </div>
        </span>
        
    );
}

export default SubNav;
