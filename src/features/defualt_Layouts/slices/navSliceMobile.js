import { createSlice } from '@reduxjs/toolkit'
import { NavLink } from "react-router-dom";
import "./navSliceMobile.css"
const initialState = {
  value: '',
}

export const navSliceMobile = createSlice({
  name: 'navBarMobile',
  initialState,
  reducers: {
    ledger_mobileNav: (state) => {
        state.value =<> 
            <li><div className='mobile_navs' id='apps'></div></li>
            <li><div className='mobile_navs' id='search'></div></li>
            <li><div className='mobile_navs' id='notifications'></div></li>
            <li><div className='mobile_navs' id='profile'></div></li>
            <li><div className='mobile_navs' id='options'></div></li>
        </>
    },

    ledger_subPages_mobileNav: (state) => {
        state.value =<> 
            <li><div className='mobile_navs' id='apps'></div></li>
            <li><div className='mobile_navs' id='notifications'></div></li>
            <li><div className='mobile_navs' id='profile'></div></li>
            <li><div className='mobile_navs' id='options'></div></li>
        </>
    },

    clear_mobileNav: (state) => {
        state.value =<></>
    },
  },
})

// Action creators are generated for each case reducer function
export const { ledger_mobileNav, ledger_subPages_mobileNav, clear_mobileNav} = navSliceMobile.actions

export default navSliceMobile.reducer