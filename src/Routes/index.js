import React from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/LoginPage/LoginPage";
import UserProfilePage from "../Pages/UserProfilePage/UserProfilePage";
import PersonalData from "../Pages/PersonalDataPage/PersonalData";
import RegisterPage from "Pages/RegisterPage/RegistrePage";
import History from "Pages/History/History";
import ReservationCekValidasi from "Pages/ReservationPage/ReservationCekValidasi";
import ReservationCekLokasi from "Pages/ReservationPage/ReservationCekLokasi";
import ReservationFaskes from "Pages/ReservationPage/ReservationFaskes";
import ReservasitionPilihTanggal from "Pages/ReservationPage/ReservationPilihTanggal";
import ReservationBerhasil from "Pages/ReservationPage/ReservationBerhasil";
import MyReservation from "Pages/MyReservation/MyReservation";
import ReservationDetails from "Pages/ReservationDetails/ReservationDetails";
// import { useSelector } from "react-redux";
// import PrivateRoute from "Utilities/PrivateRoute/PrivateRoute";

// function Router() {
//   const user = useSelector((state) => state.auth);
  // console.log(user);
import EditFamilyPage from "Pages/FamilyMemberPage/EditFamilyPage";
import FamilyMemberPage from "Pages/FamilyMemberPage/FamilyMemberPage";
import AddFamilyPage from "Pages/FamilyMemberPage/AddFamilyPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        {/* <Route
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
        {/* <Route path="/profile/:id/personal" element={<PersonalData />}></Route>
        <Route
          path="/profile/:id/family"
          element={<FamilyMemberPage />}
        ></Route>
        <Route path="/profile/:id/history" element={<History />}></Route>
        <Route
          path="/reservasi/cek-validasi"
          element={
            <PrivateRoute>
              <ReservationCekValidasi /> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          // path="/reservasi/cek-lokasi"
          // element={
          //   <PrivateRoute>
          //     <ReservationCekLokasi />
          path="/profile/:id/personal"
          element={
            <PrivateRoute>
              <PersonalData />
            </PrivateRoute>
          }
        ></Route>
        <Route
          // path="/reservasi/pilih-faskes"
          // element={
          //   <PrivateRoute>
          //     <ReservationFaskes />
          path="/profile/:id/family"
          element={
            <PrivateRoute>
              <FamilyMemberPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          // path="/reservasi/faskes/:id"
          // element={
          //   <PrivateRoute>
          //     <ReservasitionPilihTanggal />
          path="/family-member/edit"
          element={
            <PrivateRoute>
              <EditFamilyPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/family-member/add"
          element={
            <PrivateRoute>
              <AddFamilyPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profile/:id/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
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
          // path={`/reservation-details/${user.id}`}
          // element={
          //   <PrivateRoute>
          //     <ReservationDetails userid={user}/>
          path="/reservation-details/:id"
          element={
            <PrivateRoute>
              <ReservationDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reservasi/cek-validasi"
          element={
            <PrivateRoute>
              <ReservationCekValidasi />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reservasi-berhasil"
          element={
            <PrivateRoute>
              <ReservationBerhasil />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reservasi/cek-lokasi"
          element={
            <PrivateRoute>
              <ValidatedNIK>
                <ReservationCekLokasi />
              </ValidatedNIK>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reservasi/pilih-faskes"
          element={
            <PrivateRoute>
              <ValidatedNIK>
                <ReservationFaskes />
              </ValidatedNIK>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/reservasi/faskes/:sessionID"
          element={
            <PrivateRoute>
              <ValidatedNIK>
                <ReservasitionPilihTanggal />
              </ValidatedNIK>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.login);
  return isLoggedIn ? children : <Navigate to="/login" />;
}
function ValidatedNIK({ children }) {
  const isValid = useSelector((state) => state.reservation.isValid);
  return isValid ? children : <Navigate to="/reservasi/cek-validasi" />;
}
