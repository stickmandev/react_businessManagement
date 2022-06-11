import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Ledger from "./features/ledger/Ledger";
import HeaderLayout from "./features/defualt_Layouts/HeaderLayout";
import FooterLayout from "./features/defualt_Layouts/FooterLayout";
import LandingPage from "./features/landingPage/landingPage";
import Registration from "./features/register/Register";
import Login from "./features/login/Login";
import Ledger from "./features/ledger/Ledger"
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <HeaderLayout />     
                    <Routes>
                        <Route path='/' exact element={<LandingPage />} />
                        <Route path='/registration' exact element={<Registration />} />
                        <Route path='/login' exact element={<Login />} />
                        <Route path='/ledger' exact element={<Ledger />} />
                    </Routes>
                <FooterLayout />      
            </BrowserRouter>
        </>
    )   

};

export default Router; 