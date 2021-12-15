import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import MyReservation from '../Pages/MyReservation/MyReservation'
import Reservation from '../Pages/Reservation/Reservation'
import UserProfilePage from '../Pages/UserProfilePage/UserProfilePage'
import Navbar from '../Components/Navbar'
import Login from '../Pages/LoginPage/Login'
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<><UserProfilePage/></>}></Route>
                <Route path="/reservasi-vaksin" element={<><Reservation/></>}></Route>
                <Route path="/my-reservation" element={<><MyReservation/></>}></Route>
                <Route path="/login" element={<><Navbar/><Login/></>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
