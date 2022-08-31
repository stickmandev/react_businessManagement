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

  const subNav_selected_hover = (e) => {
    // console.log(e.target.firstChild.id)
    if(e.target.firstChild.id !== undefined && e.target.firstChild.id !== null){
        switch( e.target.firstChild.id) {
            case 'subNav_recurring_record':
                if(window.getComputedStyle( document.getElementById('subNav_recurring_record_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
                    document.getElementById('subNav_recurring_record_p').style.color = 'rgb(142, 143, 197)';
                }
                else{
                    document.getElementById('subNav_recurring_record').style.backgroundImage = `url(${recurring_rec_hover_icon})`;
                    document.getElementById('subNav_recurring_record_p').style.color = 'rgb(142, 143, 196)';
                }
                break;
            case 'subNav_convert_to_pdf':
                if(window.getComputedStyle( document.getElementById('subNav_convert_to_pdf_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
                    document.getElementById('subNav_convert_to_pdf_p').style.color = 'rgb(142, 143, 197)';
                }
                else{
                    document.getElementById('subNav_convert_to_pdf').style.backgroundImage = `url(${convert_to_pdf_dark_icon})`;
                    document.getElementById('subNav_convert_to_pdf_p').style.color = 'rgb(142, 143, 196)';
                }
                break;
            case 'subNav_graphs':
                if(window.getComputedStyle( document.getElementById('subNav_graphs_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
                    document.getElementById('subNav_graphs_p').style.color = 'rgb(142, 143, 197)';
                }
                else{
                    document.getElementById('subNav_graphs').style.backgroundImage = `url(${graph_dark_icon})`;
                    document.getElementById('subNav_graphs_p').style.color = 'rgb(142, 143, 196)';
                }
                break;
            case 'subNav_ratios':
                if(window.getComputedStyle( document.getElementById('subNav_ratios_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
                    document.getElementById('subNav_ratios_p').style.color = 'rgb(142, 143, 197)';
                }
                else{
                    document.getElementById('subNav_ratios').style.backgroundImage = `url(${ratio_icon_hover_icon})`;
                    document.getElementById('subNav_ratios_p').style.color = 'rgb(142, 143, 196)';
                }
                break;
            case 'subNav_filtter':
                if(window.getComputedStyle( document.getElementById('subNav_filtter_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
                    document.getElementById('subNav_filtter_p').style.color = 'rgb(142, 143, 197)';
                }
                else{
                    document.getElementById('subNav_filtter').style.backgroundImage = `url(${filter_icon_hover_icon})`;
                    document.getElementById('subNav_filtter_p').style.color = 'rgb(142, 143, 196)';
                }
                break;
            case 'subNav_settings':
                if(window.getComputedStyle( document.getElementById('subNav_settings_p') ).getPropertyValue('color') === 'rgb(142, 143, 196)'){
                    document.getElementById('subNav_filtter_p').style.color = 'rgb(142, 143, 197)';
                }
                else{
                    document.getElementById('subNav_settings').style.backgroundImage = `url(${settings_dark_icon})`;
                    document.getElementById('subNav_settings_p').style.color = 'rgb(142, 143, 196)';
                }
                break;
            default:
        }
    }
  }

    const subNav_selected_leave = (e) => {
        switch( e.target.firstChild.id) {
            case 'subNav_recurring_record':
                if(window.getComputedStyle( document.getElementById('subNav_recurring_record_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
                    document.getElementById('subNav_recurring_record').style.backgroundImage = `url(${recurring_rec_dark_icon})`;
                    document.getElementById('subNav_recurring_record_p').style.color = 'black';
                }
                break;
            case 'subNav_convert_to_pdf':
                if(window.getComputedStyle( document.getElementById('subNav_convert_to_pdf_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
                    document.getElementById('subNav_convert_to_pdf').style.backgroundImage = `url(${convert_to_pdf_dark_icon})`;
                    document.getElementById('subNav_convert_to_pdf_p').style.color = 'black';
                }
                break;
            case 'subNav_graphs':
                if(window.getComputedStyle( document.getElementById('subNav_graphs_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
                    document.getElementById('subNav_graphs').style.backgroundImage = `url(${graph_dark_icon})`;
                    document.getElementById('subNav_graphs_p').style.color = 'black';
                }
                break;
            case 'subNav_ratios':
                if(window.getComputedStyle( document.getElementById('subNav_ratios_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
                    document.getElementById('subNav_ratios').style.backgroundImage = `url(${ratio_icon_dark_icon})`;
                    document.getElementById('subNav_ratios_p').style.color = 'black';
                }
                break;
            case 'subNav_filtter':
                if(window.getComputedStyle( document.getElementById('subNav_filtter_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
                    document.getElementById('subNav_filtter').style.backgroundImage = `url(${filter_icon_dark_icon})`;
                    document.getElementById('subNav_filtter_p').style.color = 'black';
                }
                break;
            case 'subNav_settings':
                if(window.getComputedStyle( document.getElementById('subNav_settings_p') ).getPropertyValue('color') !== 'rgb(142, 143, 197)'){
                    document.getElementById('subNav_settings').style.backgroundImage = `url(${settings_dark_icon})`;
                    document.getElementById('subNav_settings_p').style.color = 'black';
                }
                break;
            default:
        }
    }

    // useEffect(() => {
        
    // }, []);

    return (
        <span id="subNav">
            <div id="subNav_overlay">
                {/* <li><NavLink to="/"></NavLink></li> */}

                <NavLink className="NavLink" activeClassName="active" to="/ledger/NotAvailableYet">
                    <div className='subNav_selected' onMouseEnter={subNav_selected_hover} onMouseLeave={subNav_selected_leave}>
                        <div id="subNav_recurring_record" className="subNav_icon_div"></div>
                        <p id="subNav_recurring_record_p">Recurring record</p>
                    </div>
                </NavLink>

                <NavLink className="NavLink" activeClassName="active" to="/ledger/NotAvailableYet">
                    <div  className='subNav_selected' onMouseEnter={subNav_selected_hover} onMouseLeave={subNav_selected_leave}>
                        <div id="subNav_convert_to_pdf" className="subNav_icon_div"></div>
                        <p id="subNav_convert_to_pdf_p">Convert to PDF</p>
                    </div>
                </NavLink>

                <div  id="search_overlay"  style={{ visibility:`${props.visibility}`}}>
                    <input type="text" value={search} placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
                    <div id="search_icon_overlay">
                        <div id="search_icon"></div>
                    </div>
                </div>

                <NavLink className="NavLink" activeClassName="active"  to="/ledger/NotAvailableYet">
                    <div  className='subNav_selected' onMouseEnter={subNav_selected_hover} onMouseLeave={subNav_selected_leave}>
                        <div id="subNav_graphs" className="subNav_icon_div"></div>
                        <p id="subNav_graphs_p">Graphs</p>
                    </div>
                </NavLink>

                <NavLink className="NavLink" activeClassName="active" to="/ledger/ratios">
                    <div  className='subNav_selected' onMouseEnter={subNav_selected_hover} onMouseLeave={subNav_selected_leave}>
                        <div id="subNav_ratios" className="subNav_icon_div"></div>
                        <p id="subNav_ratios_p">Ratios</p>
                    </div>
                </NavLink>

                <NavLink className="NavLink" activeClassName="active" to="/ledger/filtter">
                    <div  className='subNav_selected' onMouseEnter={subNav_selected_hover} onMouseLeave={subNav_selected_leave}>
                        <div id="subNav_filtter" className="subNav_icon_div"></div>
                        <p id="subNav_filtter_p">Filtter</p>
                    </div>
                </NavLink>

                <NavLink className="NavLink" activeClassName="active" to="/ledger/NotAvailableYet">
                    <div  className='subNav_selected' onMouseEnter={subNav_selected_hover} onMouseLeave={subNav_selected_leave}>
                        <div id="subNav_settings" className="subNav_icon_div"></div>
                        <p id="subNav_settings_p">Settings</p>
                    </div>
                </NavLink>
            </div>
        </span>
        
    );
}

export default SubNav;
