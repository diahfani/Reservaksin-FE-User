import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import MyReservation from "../Pages/MyReservation/MyReservation";
import Reservation from "../Pages/Reservation/Reservation";
import UserProfilePage from "../Pages/UserProfilePage/UserProfilePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/profile" element={<UserProfilePage />}></Route>
        <Route path="/reservasi-vaksin" element={<Reservation />}></Route>
        <Route path="/my-reservation" element={<MyReservation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
