import React, { useState } from "react";
import PersonalDataForm from "Components/PersonalDataForm/PersonalDataForm";
import BackButton from "../../Components/BackButton/BackButton";
import ProfilePic from "../../Components/ProfilePicture/ProfilePic";
import axios from 'axios'
import { Toaster } from "react-hot-toast";
import { ToastError } from "../../Components/Toast/Toast";
// import {useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { user } from "../../Config/Redux/UserSlice";
import { data } from "Pages/RegisterPage/Data";



function PersonalData({ userid }) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // console.log(id)
  const dataUser = useSelector((state) => state.user)
  // const isLoggedIn = useSelector((state) => state.auth.login)
  const [formData, setFormData] = useState({
    no_kk: dataUser.nokk,
    nik: dataUser.nik,
    fullname: dataUser.fullname,
    nohp: dataUser.nohp,
    gender: dataUser.gender,
    dateof_birth: dataUser.dob,
    family_relationship: dataUser.relationship,
    marriage_status: dataUser.status,
    address: dataUser.alamat,
    kelurahan: dataUser.kelurahan,
    kecamatan: dataUser.kecamatan,
    kabupaten: dataUser.kota,
    provinsi: dataUser.provinsi,
  });

  // console.log(formData.no_kk)
  const handleInputData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(formData)
  };

  const [errMsgNoKK, seterrMsgNoKK] = useState("");
  const [errMsgNIK, seterrMsgNIK] = useState("");
  const [errMsgNama, seterrMsgNama] = useState("");
  const [errMsgJeniKelamin, seterrMsgJeniKelamin] = useState("");
  const [errMsgStatusHubungan, seterrMsgStatusHubungan] = useState("");
  const [errMsgStatusPerkawinan, seterrMsgStatusPerkawinan] = useState("");
  const [errMsgTglLahir, seterrMsgTglLahir] = useState("");
  const [errMsgAddress, seterrMsgAddress] = useState("");
  const [errMsgKelurahan, seterrMsgKelurahan] = useState("");
  const [errMsgKecamatan, seterrMsgKecamatan] = useState("");
  const [errMsgKabupaten, seterrMsgKabupaten] = useState("");
  const [errMsgProvinsi, seterrMsgProvinsi] = useState("");
  const [errMsgNoTelp, seterrMsgNoTelp] = useState("")
  const [error, setError] = useState([])
  const [isLoaded, setIsLoaded] = useState()
  const regexNIK =
    /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;
  const regexnotelp =
    /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;
  // const isNoKK = /^\\d{16}$/


  const handleValidation = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "no_kk") {
      if (formData.no_kk !== 0 || formData.no_kk !== "") {
        seterrMsgNoKK("")
      } else {
        seterrMsgNoKK("Nomor KK tidak boleh kosong")
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

    if (name === "fullname") {
      if (formData.fullname !== "") {
        seterrMsgNama("");
      } else {
        seterrMsgNama("Nama tidak boleh kosong!");
      }
    }

    if (name === "nohp") {
      if (formData.nohp !== "") {
        if (regexnotelp.test(value)) {
          seterrMsgNoTelp("");
        } else {
          seterrMsgNoTelp("No. Telepon tidak sesuai");
        }
      } else {
        seterrMsgNoTelp("No. Telepon kosong!");
      }
    }

    if (name === "gender") {
      if (formData.gender !== "") {
        seterrMsgJeniKelamin("");
      } else {
        seterrMsgJeniKelamin("Pilih salah satu!");
      }
    }

    if (name === "family_relationship") {
      if (formData.family_relationship !== "") {
        seterrMsgStatusHubungan("");
      } else {
        seterrMsgStatusHubungan("Pilih salah satu!");
      }
    }

    if (name === "marriage_status") {
      if (formData.marriage_status !== "") {
        seterrMsgStatusPerkawinan("");
      } else {
        seterrMsgStatusPerkawinan("Pilih salah satu!");
      }
    }

    if (name === "dateof_birth") {
      if (formData.dateof_birth !== "") {
        seterrMsgTglLahir("");
      } else {
        seterrMsgTglLahir("Tanggal lahir harus diisi!");
      }
    }

    if (name === "address") {
      if (formData.address !== "") {
        seterrMsgAddress("");
      } else {
        seterrMsgAddress("Alamat harus diisi!");
      }
    }

    if (name === "kelurahan") {
      if (formData.kelurahan !== "") {
        seterrMsgKelurahan("");
      } else {
        seterrMsgKelurahan("Kelurahan harus diisi!");
      }
    }

    if (name === "kecamatan") {
      if (formData.kecamatan !== "") {
        seterrMsgKecamatan("");
      } else {
        seterrMsgKecamatan("Kecamatan harus diisi!");
      }
    }

    if (name === "kabupaten") {
      if (formData.kabupaten !== "") {
        seterrMsgKabupaten("");
      } else {
        seterrMsgKabupaten("Kabupaten harus diisi!");
      }
    }

    if (name === "provinsi") {
      if (formData.provinsi !== "") {
        seterrMsgProvinsi("");
      } else {
        seterrMsgProvinsi("Provinsi harus diisi!");
      }
    }
  };
  const submitFormData = async (e) => {
    // console.log(formData)
    e.preventDefault();
    if (
      errMsgNoKK !== "" ||
      errMsgNIK !== "" ||
      errMsgNama !== "" ||
      errMsgNoTelp !== "" ||
      errMsgJeniKelamin !== "" ||
      errMsgTglLahir !== "" ||
      errMsgStatusHubungan !== "" ||
      errMsgStatusPerkawinan !== "" ||
      errMsgAddress !== "" ||
      errMsgKelurahan !== "" ||
      errMsgKecamatan !== "" ||
      errMsgKabupaten !== "" ||
      errMsgProvinsi !== ""
    ) {
      alert("terdapat data yang tidak sesuai");
    } else if (
      formData.no_kk === "" ||
      formData.no_kk === 0 ||
      formData.nik === "" ||
      formData.nik === 0 ||
      formData.fullname === "" ||
      formData.nohp === "" ||
      formData.nohp === 0 ||
      formData.gender === "" ||
      formData.dateof_birth === "" ||
      formData.family_relationship === "" ||
      formData.marriage_status === "" ||
      formData.address === "" ||
      formData.kelurahan === "" ||
      formData.kecamatan === "" ||
      formData.kabupaten === "" ||
      formData.provinsi === ""
    ) {
      alert("ada data yang masih kosong");
    } else {
      setIsLoaded("updating")
      var API_URL = 'https://reservaksin-be.herokuapp.com'
      await axios.put(`${API_URL}/citizen/${id}`, {
        nohp: formData.nohp,
        nokk: formData.no_kk,
        nik: formData.nik,
        fullname: formData.fullname,
        gender: formData.gender,
        dob: formData.dateof_birth,
        relationship: formData.family_relationship,
        status: formData.marriage_status,
        current_address: {
          alamat: formData.address,
          kelurahan: formData.desa,
          kecamatan: formData.kecamatan,
          kota: formData.kota,
          provinsi: formData.provinsi,
        }
        ,
        role: "user"
      })
        .then((response) => {
          // console.log(response)
          dispatch(user(({
            email: response.data.data.email,
            nik: response.data.data.nik,
            nohp: response.data.data.nohp,
            fullname: response.data.data.fullname,
            nokk: response.data.data.nokk,
            dob: response.data.data.dob,
            relationship: response.data.data.relationship,
            gender: response.data.data.gender,
            status: response.data.data.status,
            role: response.data.data.role,
            alamat: response.data.data.current_Address.alamat,
            provinsi: response.data.data.current_Address.provinsi,
            kota: response.data.data.current_Address.kota,
            kecamatan: response.data.data.current_Address.provinsi,
            kelurahan: response.data.data.current_Address.kelurahan,
          })))
          navigate(-1)
          // if (response.data.meta.status !== 200) {
          //   setError(response.data.meta.messages)
          // } else {
            
            
          //   // setError(response.data.meta.messages)
          // }


          // console.log(error)
        })
        .catch((e) => {
          console.log(e)
          if (e.response) {
            if (e.response.status === 400) {
              ToastError("bad request")
            }
          } else if (e.request) {
            console.log("isi err req", e.request)
          }
          setIsLoaded()
        })
    }
  };

  return (
    <div className="container mx-auto page-wrapper">
      <Toaster />
      <br />
      <BackButton title="Personal Data" />
      <section className="py-3 form-content">
        <ProfilePic />
        <form onSubmit={submitFormData}>
          <PersonalDataForm
            formData={formData}
            errMsgNoKK={errMsgNoKK}
            errMsgNIK={errMsgNIK}
            errMsgNama={errMsgNama}
            errMsgJeniKelamin={errMsgJeniKelamin}
            errMsgStatusHubungan={errMsgStatusHubungan}
            errMsgTglLahir={errMsgTglLahir}
            errMsgStatusPerkawinan={errMsgStatusPerkawinan}
            errMsgAddress={errMsgAddress}
            errMsgKelurahan={errMsgKelurahan}
            errMsgKecamatan={errMsgKecamatan}
            errMsgKabupaten={errMsgKabupaten}
            errMsgProvinsi={errMsgProvinsi}
            handleInputData={handleInputData}
            handleValidation={handleValidation}
            errMsgNoTelp={errMsgNoTelp}
          />
          <button className="btn btn-primary w-100 my-3" type="submit">
            {isLoaded === "updating" ?
              (<Spinner animation="border" variant="primary" />)
              :
              "Simpan"
            }
          </button>
        </form>
      </section>
    </div>
  );
}

export default PersonalData;
