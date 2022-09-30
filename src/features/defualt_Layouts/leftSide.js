import './leftSide.css'
import { NavLink } from "react-router-dom";
import { useState} from 'react';

import home from "../../icons/home.png"
import home_hover from "../../icons/home_hover.png"
import home_active from "../../icons/home.png"

import cashbook from "../../icons/cashbook.png"
import cashbook_hover from "../../icons/cashbook.png"
import cashbook_active from "../../icons/cashbook_white.png"

import eventory from "../../icons/eventory.png"
import eventory_hover from "../../icons/eventory_hover.png"
import eventory_active from "../../icons/eventory.png"

import keepsafe from "../../icons/keepsafe.png"
import keepsafe_hover from "../../icons/keepsafe_hover.png"
import keepsafe_active from "../../icons/keepsafe.png"

// console.log()
const LeftSide = () => {
    const [HomeNav_Active, setHomeNav_Active] = useState(false);
    const [CashBookNav_Active, setCashBookNav_Active] = useState(false);
    const [EnventoryNav_Active, setEnventoryNav_Active] = useState(false);
    const [KeepSafeNav_Active, setKeepSafeNav_Active] = useState(false);

    const [HomeIsHoverd, setHomeIsHoverd] = useState(false);
    const [CashBookIsHoverd, setCashBookIsHoverd] = useState(false);
    const [EnventoryIsHoverd, setEnventoryIsHoverd] = useState(false);
    const [KeepSafeIsHoverd, setKeepSafeIsHoverd] = useState(false);

    const [HomeRecIsHoverdIcons, setHomeRecIsHoverdIcons] = useState(false);
    const [CashRecIsHoverdIcons, setCashRecIsHoverdIcons] = useState(false);
    const [EnventoryRecIsHoverdIcons, setEnventoryRecIsHoverdIcons] = useState(false);
    const [KeepSafeRecIsHoverdIcons, setKeepSafeRecIsHoverdIcons] = useState(false);

    const [PColor_active, setPColor_active] = useState('var(--color5)');
    const [PColor_hover, setPColor_hover] = useState('var(--color5)');
    const [PColor_normal, setPColor_normal] = useState('var(--color2)');


    // const handleMouseEnter = () => {
    //     setIsHover(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsHover(false);
    // };

    return (
        <span id='leftSpan' className='desktop'>
            <div id='leftSpan_Overlay'>
                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setHomeNav_Active(true) : setHomeNav_Active(false)
                        // return {
                        //     color: isActive ? "var(--color1)" : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" to="/home"
                    onMouseEnter={() =>  {setHomeIsHoverd(true); setHomeRecIsHoverdIcons(true)}} onMouseLeave={() =>  {setHomeIsHoverd(false); setHomeRecIsHoverdIcons(false)}}
                >
                    <div className='leftNav_selected home' style={HomeNav_Active?  {backgroundColor:"var(--color5)"} : HomeIsHoverd? {backgroundColor:"var(--color1)"} : {backgroundColor:"var(--color1)"}} >
                        <div id='leftNav_home' style={HomeNav_Active? {backgroundImage:`url(${home})`} : HomeRecIsHoverdIcons? { backgroundImage:`url(${home_hover})` } : {backgroundImage:`url(${home})`}}></div>
                        <p style={HomeNav_Active? {color:"var(--color1)"} : HomeIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Home</p>
                    </div>
                </NavLink>

                
                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setCashBookNav_Active(true) : setCashBookNav_Active(false)
                        // return {
                        //     color: isActive ? "var(--color1)" : "var(--color5) !important",
                        // };
                    }} 
                    className="NavLink" to="/ledger"
                    onMouseEnter={() =>  {setCashBookIsHoverd(true); setCashRecIsHoverdIcons(true)}} onMouseLeave={() =>  {setCashBookIsHoverd(false); setCashRecIsHoverdIcons(false)}}
                >
                    <div className='leftNav_selected cashbook' style={CashBookNav_Active?  {backgroundColor:"var(--color5)"} : CashBookIsHoverd? {backgroundColor:"var(--color1)"} : {backgroundColor:"var(--color1)"}} >
                        <div id='leftNav_cashbook' style={CashBookNav_Active? {backgroundImage:`url(${cashbook_active})`} : CashRecIsHoverdIcons? { backgroundImage:`url(${cashbook_hover})` } : {backgroundImage:`url(${cashbook})`}}></div>
                        <p style={CashBookNav_Active? {color:"var(--color1)"} : CashBookIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Cashbook</p>
                    </div>
                </NavLink>
                

                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setEnventoryNav_Active(true) : setEnventoryNav_Active(false)
                        return {
                            color: isActive ? "var(--color1)" : "var(--color5) !important",
                        };
                    }} 
                    className="NavLink" to="/enventory"
                    onMouseEnter={() =>  {setEnventoryIsHoverd(true); setEnventoryRecIsHoverdIcons(true)}} onMouseLeave={() =>  {setEnventoryIsHoverd(false); setEnventoryRecIsHoverdIcons(false)}}
                >
                    <div className='leftNav_selected enventory' style={EnventoryNav_Active?  {backgroundColor:"var(--color5)"} : EnventoryIsHoverd? {backgroundColor:"var(--color1)"} : {backgroundColor:"var(--color1)"}} >
                        <div id='leftNav_enventory' style={EnventoryNav_Active? {backgroundImage:`url(${eventory_active})`} : EnventoryRecIsHoverdIcons? { backgroundImage:`url(${eventory_hover})` } : {backgroundImage:`url(${eventory})`}}></div>
                        <p style={EnventoryNav_Active? {color:"var(--color1)"} : EnventoryIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Enventory</p>
                    </div>
                </NavLink>


                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setKeepSafeNav_Active(true) : setKeepSafeNav_Active(false)
                        return {
                            color: isActive ? "var(--color1)" : "var(--color5) !important",
                        };
                    }} 
                    className="NavLink" to="/keepSafe"
                    onMouseEnter={() =>  {setKeepSafeIsHoverd(true); setKeepSafeRecIsHoverdIcons(true)}} onMouseLeave={() =>  {setKeepSafeIsHoverd(false); setKeepSafeRecIsHoverdIcons(false)}}
                >
                    <div className='leftNav_selected keepsafe' style={KeepSafeNav_Active?  {backgroundColor:"var(--color5)"} : KeepSafeIsHoverd? {backgroundColor:"var(--color1)"} : {backgroundColor:"var(--color1)"}} >
                        <div id='leftNav_keepsafe' style={KeepSafeNav_Active? {backgroundImage:`url(${keepsafe_active})`} : KeepSafeRecIsHoverdIcons? { backgroundImage:`url(${keepsafe_hover})` } : {backgroundImage:`url(${keepsafe})`}}></div>
                        <p style={KeepSafeNav_Active? {color:"var(--color1)"} : KeepSafeIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Keep safe</p>
                    </div>
                </NavLink>
            </div>
        </span>
    );
}

export default LeftSide;

