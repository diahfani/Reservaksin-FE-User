import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/LoginPage/LoginPage";
import UserProfilePage from "../Pages/UserProfilePage/UserProfilePage";
import PersonalData from "../Pages/PersonalDataPage/PersonalData";
import RegisterPage from "Pages/RegisterPage/RegistrePage";
import FamilyMemberPage from "Pages/FamilyMemberPage/FamilyMemberPage";
import History from "Pages/History/History";
import ReservationCekValidasi from "Pages/ReservationPage/ReservationCekValidasi";
import ReservationCekLokasi from "Pages/ReservationPage/ReservationCekLokasi";
import ReservationFaskes from "Pages/ReservationPage/ReservationFaskes";
import ReservasitionPilihTanggal from "Pages/ReservationPage/ReservationPilihTanggal";
import ReservationBerhasil from "Pages/ReservationPage/ReservationBerhasil";
import MyReservation from "Pages/MyReservation/MyReservation";
import ReservationDetails from "Pages/ReservationDetails/ReservationDetails";
import { useSelector } from "react-redux";
import PrivateRoute from "Utilities/PrivateRoute/PrivateRoute";

function Router() {
  const user = useSelector((state) => state.auth);
  // console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfilePage userid={user} />
            </PrivateRoute>
          }
        ></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        {/* <Route path="/profile" element={<UserProfilePage />}></Route> */}
        <Route path="/profile/:id/personal" element={<PersonalData />}></Route>
        <Route
          path="/profile/:id/family"
          element={<FamilyMemberPage />}
        ></Route>
        <Route path="/profile/:id/history" element={<History />}></Route>
        <Route
          path="/reservasi/cek-validasi"
          element={
            <PrivateRoute>
              <ReservationCekValidasi />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reservasi/cek-lokasi"
          element={
            <PrivateRoute>
              <ReservationCekLokasi />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reservasi/pilih-faskes"
          element={
            <PrivateRoute>
              <ReservationFaskes />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reservasi/faskes/:id"
          element={
            <PrivateRoute>
              <ReservasitionPilihTanggal />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reservasi-berhasil"
          element={<ReservationBerhasil />}
        ></Route>
        <Route
          path="/my-reservation"
          element={
            <PrivateRoute>
              <MyReservation />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path={`/reservation-details/${user.id}`}
          element={
            <PrivateRoute>
              <ReservationDetails userid={user}/>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
