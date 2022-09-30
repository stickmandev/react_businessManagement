import './leftSide.css'
import { NavLink } from "react-router-dom";
import { useState} from 'react';

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
                    onMouseEnter={() =>  setHomeIsHoverd(true)} onMouseLeave={() =>  setHomeIsHoverd(false)}
                >
                    <div className='leftNav_selected home' style={HomeNav_Active?  {backgroundColor:"var(--color5)"} : HomeIsHoverd? {backgroundColor:"var(--color7)"} : {backgroundColor:"var(--color1)"}} >
                        <div id='leftNav_home'></div>
                        <p style={HomeNav_Active? {color:"var(--color1)"} : HomeIsHoverd? { color:"var(--color5)" } : {color:"var(--color2)"}}>Home</p>
                    </div>
                </NavLink>

                
                <NavLink style={
                    ({ isActive }) => {
                        isActive ? setCashBookNav_Active(true) : setCashBookNav_Active(false)
                        return {
                            color: isActive ? "var(--color1)" : "var(--color5) !important",
                        };
                    }} 
                    className="NavLink" to="/ledger"
                    onMouseEnter={() =>  setCashBookIsHoverd(true)} onMouseLeave={() =>  setCashBookIsHoverd(false)}
                >
                    <div className='leftNav_selected cashbook' style={CashBookNav_Active?  {backgroundColor:"var(--color5)"} : CashBookIsHoverd? {backgroundColor:"var(--color5)"} : {backgroundColor:"var(--color1)"}} >
                        <div id='leftNav_cashbook'></div>
                        <p style={CashBookNav_Active? {color:"var(--color1)"} : CashBookIsHoverd? { color:"var(--color1)" } : {color:"var(--color2)"}}>Cashbook</p>
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
                    onMouseEnter={() =>  setEnventoryIsHoverd(true)} onMouseLeave={() =>  setEnventoryIsHoverd(false)}
                >
                    <div className='leftNav_selected enventory' style={EnventoryNav_Active?  {backgroundColor:"var(--color5)"} : EnventoryIsHoverd? {backgroundColor:"var(--color5)"} : {backgroundColor:"var(--color1)"}} >
                        <div id='leftNav_enventory'></div>
                        <p style={EnventoryNav_Active? {color:"var(--color1)"} : EnventoryIsHoverd? { color:"var(--color1)" } : {color:"var(--color2)"}}>Enventory</p>
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
                    onMouseEnter={() =>  setKeepSafeIsHoverd(true)} onMouseLeave={() =>  setKeepSafeIsHoverd(false)}
                >
                    <div className='leftNav_selected keepsafe' style={KeepSafeNav_Active?  {backgroundColor:"var(--color5)"} : KeepSafeIsHoverd? {backgroundColor:"var(--color5)"} : {backgroundColor:"var(--color1)"}} >
                        <div id='leftNav_keepsafe'></div>
                        <p style={KeepSafeNav_Active? {color:"var(--color1)"} : KeepSafeIsHoverd? { color:"var(--color1)" } : {color:"var(--color2)"}}>Keep safe</p>
                    </div>
                </NavLink>
            </div>
        </span>
    );
}

export default LeftSide;

