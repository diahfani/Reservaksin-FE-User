import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar'

import LandingPage from '../Pages/LandingPage/LandingPage'
import MyReservation from '../Pages/MyReservation/MyReservation'
import Reservation from '../Pages/Reservation/Reservation'
import UserProfilePage from '../Pages/UserProfilePage/UserProfilePage'
import Login from '../Pages/LoginPage/LoginPage'
import PersonalData from '../Pages/PersonalDataPage/PersonalData'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage></LandingPage>}></Route>
                <Route path="/profile" element={<><UserProfilePage/></>}></Route>
                <Route path="/reservasi-vaksin" element={<><Reservation/></>}></Route>
                <Route path="/my-reservation" element={<><MyReservation/></>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/profile" element={<><Navbar/><PersonalData/></>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
