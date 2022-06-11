import React, {useEffect} from 'react'
import "./HeaderLayout.css"
import { useSelector, useDispatch } from 'react-redux'
import { register_nav } from './slices/navSlice'
// import { useSelector, useDispatch } from 'react-redux'

function HeaderLayout() {
    const navSlice = useSelector((state) => state.navBar.value)
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(register_nav())
        },[]
    )
    
    
    return (
        <header>
            <div id="navbar1">
                <div id="name">
                    <a href="{}">
                        <h1>BOOKEEPER</h1>
                    </a>
                </div>
                <ul>
                    {navSlice}
                </ul>
            </div>
        </header>
    )
}

export default HeaderLayout