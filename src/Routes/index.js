import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/LoginPage/LoginPage";
import UserProfilePage from "../Pages/UserProfilePage/UserProfilePage";
import Reservation from "../Pages/Reservation/Reservation";
import PersonalData from "../Pages/PersonalDataPage/PersonalData";
import RegisterPage from "Pages/RegisterPage/RegistrePage";
import FamilyMemberPage from "Pages/FamilyMemberPage/FamilyMemberPage";
import History from "Pages/History/History";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/profile" element={<UserProfilePage />}></Route>
        <Route path="/reservasi-vaksin" element={<Reservation />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/profile" element={<UserProfilePage />}></Route>
        <Route path="/reservasi-vaksin" element={<Reservation />}></Route>
        <Route path="/profile/id/personal" element={<PersonalData />}></Route>
        <Route path="/profile/id/family" element={<FamilyMemberPage />}></Route>
        <Route path="/profile/id/history" element={<History />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
