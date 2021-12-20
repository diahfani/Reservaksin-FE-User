import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar'

import LandingPage from '../Pages/LandingPage/LandingPage'
import MyReservation from '../Pages/MyReservation/MyReservation'
import Reservation from '../Pages/Reservation/Reservation'
import UserProfilePage from '../Pages/UserProfilePage/UserProfilePage'
import Login from '../Pages/LoginPage/LoginPage'
import PersonalData from '../Pages/PersonalDataPage/PersonalData'
import Navbar from '../Components/Navbar/Navbar'
import Register from '../Pages/RegisterPage/Register'
import RegisterPage2 from '../Pages/RegisterPage/DataPribadi'
import DataKeluarga from 'Pages/RegisterPage/DataKeluarga'
import DataAlamat from 'Pages/RegisterPage/DataAlamat'
import Submit from 'Pages/RegisterPage/Submit'

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
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/register/data-pribadi" element={<RegisterPage2/>}></Route>
                <Route path='/register/data-keluarga' element={<DataKeluarga/>}></Route>
                <Route path='/register/alamat' element={<DataAlamat/>}></Route>
                <Route path='register/submit' element={<Submit/>}></Route>
                <Route path="/profile" element={<UserProfilePage/>}></Route>
                <Route path="/reservasi-vaksin" element={<Reservation/>}></Route>
                <Route path="/my-reservation" element={<MyReservation/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
