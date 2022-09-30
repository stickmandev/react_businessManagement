import React, {useEffect} from 'react'
import "./HeaderLayout.css"
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";
// import { register_nav } from './slices/navSlice'
// import { register_nav } from './slices/navSliceMobile'
// import { useSelector, useDispatch } from 'react-redux'

function HeaderLayout() {
    const navSlice = useSelector((state) => state.navBar.value)
    const navSliceMobile = useSelector((state) => state.navBarMobile.value)
    // const dispatch = useDispatch()
    
    
    return (
        <header>
            <div id="navbar1" className='desktop'>
                <div id="name">
                    <NavLink to="/">
                        <h1>Oga Manager</h1>
                    </NavLink>
                </div>
                <ul>
                    {navSlice}
                </ul>
            </div>

            <div id='navbarMobile' className='mobile'>
                <div id="name">
                    <NavLink to="/">
                        <h1>OGA</h1>
                        <h1>MANAGER</h1>
                    </NavLink>
                </div>
                <ul>
                    {navSliceMobile}
                </ul>
            </div>
        </header>
    )
}

export default HeaderLayout