import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Ledger from "./features/ledger/Ledger";
import HeaderLayout from "./features/defualt_Layouts/HeaderLayout";
import FooterLayout from "./features/defualt_Layouts/FooterLayout";
import LandingPage from "./features/landingPage/landingPage";
import Registration from "./features/register/Register";
import Login from "./features/login/Login";
import Ledger from "./features/ledger/Ledger"
import ServiceNotAvailable from "./features/ledger/ServiceNotAvailable"
import UserVerification from "./features/register/components/UserVerification";
import Filtter from "./features/ledger/components/filtter";
import Ratios from "./features/ledger/components/ratios";
import Profit from "./features/ledger/components/ratios/profit";
import ProfitMargin from "./features/ledger/components/ratios/profitMargin";
import Markup from "./features/ledger/components/ratios/markup";
import NetProfit from "./features/ledger/components/ratios/netProfit";
import FreeCashFlow from "./features/ledger/components/ratios/freeCashFlow";
import OwnersEquity from "./features/ledger/components/ratios/ownersEquity";
import Enventory from "./features/enventory/Enventory";
import KeepSafe from "./features/keepSafe/KeepSafe";
import Home from "./features/home/Home";

const Router = () => {
    return (
        <>
            <BrowserRouter >
                <HeaderLayout />     
                    <Routes  >
                        {/* <Route path='/' exact element={<LandingPage />} /> */}
                        <Route path='/registration' exact element={<Registration />} />
                        <Route path='/registration/verify/' exact element={<UserVerification />} />
                        <Route path='/' exact element={<Login />} />
                        <Route path='/login/' exact element={<Login />} />

                        <Route path='/ledger/' exact element={<Ledger />} />
                        <Route path='/ledger/filtter' exact element={<Filtter />} />
                        <Route path='/ledger/ratios/' exact element={<Ratios />} />
                        <Route path='/ledger/ratios/profit' exact element={<Profit />} />
                        <Route path='/ledger/ratios/profitmargin' exact element={<ProfitMargin />} />
                        <Route path='/ledger/ratios/markup' exact element={<Markup />} />
                        <Route path='/ledger/ratios/netprofit' exact element={<NetProfit />} />
                        <Route path='/ledger/ratios/freecashflow' exact element={<FreeCashFlow />} />
                        <Route path='/ledger/ratios/ownersequity' exact element={<OwnersEquity />} />

                        <Route path='/ledger/NotAvailableYet/RecurringRecord' exact element={<ServiceNotAvailable />} />
                        <Route path='/ledger/NotAvailableYet/convert_to_pdf' exact element={<ServiceNotAvailable />} />
                        <Route path='/ledger/NotAvailableYet/Graphs' exact element={<ServiceNotAvailable />} />
                        <Route path='/ledger/NotAvailableYet/Settings' exact element={<ServiceNotAvailable />} />


                        <Route path='/enventory' exact element={<Enventory />} />
                        <Route path='/keepSafe' exact element={<KeepSafe />} />
                        <Route path='/home' exact element={<Home />} />
                    </Routes>
                <FooterLayout />      
            </BrowserRouter>
        </>
    )   

};

export default Router; 