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
    const isLogged = useSelector((state) => state)
    console.log("isi use selector", isLogged)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<><UserProfilePage/></>}></Route>
                <Route path="/reservasi-vaksin" element={<><Reservation/></>}></Route>
                <Route path="/my-reservation" element={<><MyReservation/></>}></Route>
                <Route path="/login" element={<><Navbar/><Login/></>}></Route>
                <Route path="/profile/id/personal" element={<><Navbar/><PersonalData/></>}></Route>
                <Route path="/profile/id/family" element={<><FamilyMember/></>}></Route>
                <Route path="/profile/id/history" element={<><Navbar/><History/></>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
