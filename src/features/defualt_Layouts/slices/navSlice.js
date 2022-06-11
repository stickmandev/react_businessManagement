import { createSlice } from '@reduxjs/toolkit'
import { NavLink } from "react-router-dom";

const initialState = {
  value: '',
}

export const navSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    landing_page_nav: (state) => {
        state.value =<> 
            <li><NavLink id='home' to="/">Home</NavLink></li>
            <li><NavLink id='about' to="">About</NavLink></li>
            <li><NavLink id='contact' to="">Contact</NavLink></li>
            <li><NavLink id='register' to="">Register</NavLink></li>
            <li><NavLink id='login' to="/login">Login</NavLink></li>
        </>
    },

    register_nav: (state) => {
        state.value =<> 
            <li><NavLink id='home' to="/">Home</NavLink></li>
            <li><NavLink id='about' to="">About</NavLink></li>
            <li><NavLink id='contact' to="">Contact</NavLink></li>
            <li><NavLink id='login' to="/login">Login</NavLink></li>
        </>
    },

    login_nav: (state) => {
        state.value =<> 
            <li><NavLink href="">Home</NavLink></li>
            <li><NavLink href="">Register</NavLink></li>
        </>
    },

    ledger_nav: (state) => {
        state.value =<> 
            <li><NavLink href="">Home</NavLink></li>
        </>
    },

    clear_nav: (state) => {
        state.value ={}
    },
  },
})

// Action creators are generated for each case reducer function
export const { landing_page_nav, register_nav, login_nav, ledger_nav} = navSlice.actions

export default navSlice.reducer