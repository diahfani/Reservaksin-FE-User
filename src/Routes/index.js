import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import MyReservation from '../Pages/MyReservation/MyReservation'
import Reservation from '../Pages/Reservation/Reservation'
import UserProfilePage from '../Pages/UserProfilePage/UserProfilePage'
import Login from '../Pages/LoginPage/Login'
import PersonalData from '../Pages/PersonalDataPage/PersonalData'
import FamilyMember from '../Pages/FamilyMemberList/FamilyMember';
import History from '../Pages/History/History';

function Router() {
    const isLogged = useSelector((state) => state.auth.login)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<><Navbar isLoggedIn={isLogged}/><UserProfilePage/></>}></Route>
                <Route path="/reservasi-vaksin" element={<><Reservation/></>}></Route>
                <Route path="/my-reservation" element={<><MyReservation/></>}></Route>
                <Route path="/login" element={<><Navbar isLoggedIn={isLogged}/><Login/></>}></Route>
                <Route path="/profile/id/personal" element={<><Navbar isLoggedIn={isLogged}/><PersonalData/></>}></Route>
                <Route path="/profile/id/family" element={<><Navbar isLoggedIn={isLogged}/><FamilyMember/></>}></Route>
                <Route path="/profile/id/history" element={<><Navbar isLoggedIn={isLogged}/><History/></>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
