import React, { useState } from "react";
import PersonalDataForm from "Components/PersonalDataForm/PersonalDataForm";
import BackButton from "../../Components/BackButton/BackButton";
import ProfilePic from "../../Components/ProfilePicture/ProfilePic";
import {useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'

function PersonalData({userid}) {
  const { id } = useParams()
  const isLoggedIn = useSelector((state) => state.auth.login)
  const [formData, setFormData] = useState({
    email: "",
    no_hp: "",
    password: "",
    passAgain: "",
    no_kk: "",
    nik: "",
    fullname: "",
    gender: "",
    dateof_birth: "",
    family_relationship: "",
    marriage_status: "",
    alamat: "",
    kelurahan: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
  });

  const handleInputData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [errMsgNoKK, seterrMsgNoKK] = useState("");
  const [errMsgNIK, seterrMsgNIK] = useState("");
  const [errMsgNama, seterrMsgNama] = useState("");
  const [errMsgJeniKelamin, seterrMsgJeniKelamin] = useState("");
  const [errMsgStatusHubungan, seterrMsgStatusHubungan] = useState("");
  const [errMsgStatusPerkawinan, seterrMsgStatusPerkawinan] = useState("");
  const [errMsgTglLahir, seterrMsgTglLahir] = useState("");
  const regexNIK =
    /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;

  const handleValidation = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nokk") {
      if (formData.nokk === 0 || formData.nokk === "") {
        seterrMsgNoKK("No. KK tidak boleh kosong!");
      } else {
        seterrMsgNoKK("");
      }
    }

    if (name === "nik") {
      if (formData.nik !== 0 || formData.nik !== "") {
        if (regexNIK.test(value)) {
          seterrMsgNIK("");
        } else {
          seterrMsgNIK("NIK tidak sesuai!");
        }
      } else {
        seterrMsgNIK("NIK tidak boleh kosong!");
      }
    }

    if (name === "namalengkap") {
      if (formData.namalengkap !== "") {
        seterrMsgNama("");
      } else {
        seterrMsgNama("Nama tidak boleh kosong!");
      }
    }

    if (name === "jeniskelamin") {
      if (formData.jeniskelamin !== "") {
        seterrMsgJeniKelamin("");
      } else {
        seterrMsgJeniKelamin("Pilih salah satu!");
      }
    }

    if (name === "statusHubungan") {
      if (formData.statusHubungan !== "") {
        seterrMsgStatusHubungan("");
      } else {
        seterrMsgStatusHubungan("Pilih salah satu!");
      }
    }

    if (name === "statusPerkawinan") {
      if (formData.statusPerkawinan !== "") {
        seterrMsgStatusPerkawinan("");
      } else {
        seterrMsgStatusPerkawinan("Pilih salah satu!");
      }
    }

    if (name === "tglLahir") {
      if (formData.tglLahir !== "") {
        seterrMsgTglLahir("");
      } else {
        seterrMsgTglLahir("Tanggal lahir harus diisi!");
      }
    }
  };
  return (
    <div className="container mx-auto page-wrapper">
      <br />
      <BackButton title="Personal Data" />
      <section className="py-3 form-content">
        <ProfilePic />
        <form>
          <PersonalDataForm
            // formData={formData}
            // errMsgNoKK={errMsgNoKK}
            // errMsgNIK={errMsgNIK}
            // errMsgNama={errMsgNama}
            // errMsgJeniKelamin={errMsgJeniKelamin}
            // errMsgStatusHubungan={errMsgStatusHubungan}
            // errMsgTglLahir={errMsgTglLahir}
            // errMsgStatusPerkawinan={errMsgStatusPerkawinan}
            // handleInputData={handleInputData}
            // handleValidation={handleValidation}
            // isLoggedIn={isLoggedIn}
          />
          <button className="btn btn-primary w-100 my-3" type="submit">
            Simpan
          </button>
        </form>
      </section>
    </div>
  );
}

export default PersonalData;
