import './leftSide.css'
import { NavLink } from "react-router-dom";

// console.log()
const LeftSide = () => {
    return (
        <span id='leftSpan'>
            <div id='leftSpan_Overlay'>
                <NavLink className="NavLink" to="/home">
                    <div className='leftNav_selected home'>
                        <div id='leftNav_home'></div>
                        <p>Home</p>
                    </div>
                </NavLink>
                
                <NavLink className="NavLink" to="/ledger">
                    <div className='leftNav_selected cashbook'>
                        <div id='leftNav_cashbook'></div>
                        <p>Cashbook</p>
                    </div>
                </NavLink>

                <NavLink className="NavLink" to="/enventory">
                    <div className='leftNav_selected enventory'>
                        <div id='leftNav_enventory'></div>
                        <p>Enventory</p>
                    </div>
                </NavLink>

                <NavLink className="NavLink" to="/keepSafe">
                    <div className='leftNav_selected keepsafe'>
                        <div id='leftNav_keepsafe'></div>
                        <p>Keep safe</p>
                    </div>
                </NavLink>
            </div>
        </span>
    );
}

export default LeftSide;

