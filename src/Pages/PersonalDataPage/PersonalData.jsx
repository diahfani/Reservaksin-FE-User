import React, { useState } from "react";
// import PersonalDataForm from "Components/PersonalDataForm/PersonalDataForm";
import BackButton from "../../Components/BackButton/BackButton";
import { Form } from "react-bootstrap";
import ProfilePic from "../../Components/ProfilePicture/ProfilePic";
// import axios from 'axios'
// import { Toaster } from "react-hot-toast";
// import { ToastError } from "../../Components/Toast/Toast";
// // import {useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { Spinner } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { user } from "../../Config/Redux/UserSlice";
// import { data } from "Pages/RegisterPage/Data";



// function PersonalData({ userid }) {
//   const { id } = useParams()
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   // console.log(id)
//   const dataUser = useSelector((state) => state.user)
//   // const isLoggedIn = useSelector((state) => state.auth.login)
//   const [formData, setFormData] = useState({
//     no_kk: dataUser.nokk,
//     nik: dataUser.nik,
//     fullname: dataUser.fullname,
//     nohp: dataUser.nohp,
//     gender: dataUser.gender,
//     dateof_birth: dataUser.dob,
//     family_relationship: dataUser.relationship,
//     marriage_status: dataUser.status,
//     address: dataUser.alamat,
//     kelurahan: dataUser.kelurahan,
//     kecamatan: dataUser.kecamatan,
//     kabupaten: dataUser.kota,
//     provinsi: dataUser.provinsi,
import { useSelector, useDispatch } from "react-redux";
import CustomToast from "Components/CustomToast/CustomToast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "Config/Redux/UserSlice";
import "./PersonalData.scss";

export default function PersonalData() {
  // declare new state or new variable below ...
  const dataUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formDataUser, setFormDataUser] = useState(dataUser?.data);
  const [validated, setValidated] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    body: <></>,
    delay: 0,
    headIcon: <></>,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // console.log(formData.no_kk)
  // const handleInputData = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  //   // console.log(formData)
  // };

  // const [errMsgNoKK, seterrMsgNoKK] = useState("");
  // const [errMsgNIK, seterrMsgNIK] = useState("");
  // const [errMsgNama, seterrMsgNama] = useState("");
  // const [errMsgJeniKelamin, seterrMsgJeniKelamin] = useState("");
  // const [errMsgStatusHubungan, seterrMsgStatusHubungan] = useState("");
  // const [errMsgStatusPerkawinan, seterrMsgStatusPerkawinan] = useState("");
  // const [errMsgTglLahir, seterrMsgTglLahir] = useState("");
  // const [errMsgAddress, seterrMsgAddress] = useState("");
  // const [errMsgKelurahan, seterrMsgKelurahan] = useState("");
  // const [errMsgKecamatan, seterrMsgKecamatan] = useState("");
  // const [errMsgKabupaten, seterrMsgKabupaten] = useState("");
  // const [errMsgProvinsi, seterrMsgProvinsi] = useState("");
  // const [errMsgNoTelp, seterrMsgNoTelp] = useState("")
  // const [error, setError] = useState([])
  // const [isLoaded, setIsLoaded] = useState()
  // const regexNIK =
  //   /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;
  // const regexnotelp =
  //   /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;
  // // const isNoKK = /^\\d{16}$/


  // const handleValidation = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   if (name === "no_kk") {
  //     if (formData.no_kk !== 0 || formData.no_kk !== "") {
  //       seterrMsgNoKK("")
  //     } else {
  //       seterrMsgNoKK("Nomor KK tidak boleh kosong")
  //     }
  //   }

  //   if (name === "nik") {
  //     if (formData.nik !== 0 || formData.nik !== "") {
  //       if (regexNIK.test(value)) {
  //         seterrMsgNIK("");
  //       } else {
  //         seterrMsgNIK("NIK tidak sesuai!");
  //       }
  //     } else {
  //       seterrMsgNIK("NIK tidak boleh kosong!");
  //     }
  //   }

  //   if (name === "fullname") {
  //     if (formData.fullname !== "") {
  //       seterrMsgNama("");
  //     } else {
  //       seterrMsgNama("Nama tidak boleh kosong!");
  //     }
  //   }

  //   if (name === "nohp") {
  //     if (formData.nohp !== "") {
  //       if (regexnotelp.test(value)) {
  //         seterrMsgNoTelp("");
  //       } else {
  //         seterrMsgNoTelp("No. Telepon tidak sesuai");
  //       }
  //     } else {
  //       seterrMsgNoTelp("No. Telepon kosong!");
  //     }
  //   }

  //   if (name === "gender") {
  //     if (formData.gender !== "") {
  //       seterrMsgJeniKelamin("");
  //     } else {
  //       seterrMsgJeniKelamin("Pilih salah satu!");
  //     }
  //   }

  //   if (name === "family_relationship") {
  //     if (formData.family_relationship !== "") {
  //       seterrMsgStatusHubungan("");
  //     } else {
  //       seterrMsgStatusHubungan("Pilih salah satu!");
  // // code your handle functions below ...
  const handleInput = (e) => {
    if (
      e.target.name === "alamat" ||
      e.target.name === "kelurahan" ||
      e.target.name === "kecamatan" ||
      e.target.name === "kota" ||
      e.target.name === "provinsi"
    ) {
      setFormDataUser({
        ...formDataUser,
        current_Address: {
          ...formDataUser.current_Address,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      if (e.target.name === "nik") {
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
          setFormDataUser({
            ...formDataUser,
            [e.target.name]: e.target.value,
          });
        }
      } else {
        setFormDataUser({
          ...formDataUser,
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  //   if (name === "marriage_status") {
  //     if (formData.marriage_status !== "") {
  //       seterrMsgStatusPerkawinan("");
  //     } else {
  //       seterrMsgStatusPerkawinan("Pilih salah satu!");
  //     }
  //   }

  //   if (name === "dateof_birth") {
  //     if (formData.dateof_birth !== "") {
  //       seterrMsgTglLahir("");
  //     } else {
  //       seterrMsgTglLahir("Tanggal lahir harus diisi!");
  //     }
  //   }

  //   if (name === "address") {
  //     if (formData.address !== "") {
  //       seterrMsgAddress("");
  //     } else {
  //       seterrMsgAddress("Alamat harus diisi!");
  //     }
  //   }

  //   if (name === "kelurahan") {
  //     if (formData.kelurahan !== "") {
  //       seterrMsgKelurahan("");
  //     } else {
  //       seterrMsgKelurahan("Kelurahan harus diisi!");
  //     }
  //   }

  //   if (name === "kecamatan") {
  //     if (formData.kecamatan !== "") {
  //       seterrMsgKecamatan("");
  //     } else {
  //       seterrMsgKecamatan("Kecamatan harus diisi!");
  //     }
  //   }

  //   if (name === "kabupaten") {
  //     if (formData.kabupaten !== "") {
  //       seterrMsgKabupaten("");
  //     } else {
  //       seterrMsgKabupaten("Kabupaten harus diisi!");
  //     }
  //   }

  //   if (name === "provinsi") {
  //     if (formData.provinsi !== "") {
  //       seterrMsgProvinsi("");
  //     } else {
  //       seterrMsgProvinsi("Provinsi harus diisi!");
  //     }
  //   }
  // };
  // const submitFormData = async (e) => {
  //   // console.log(formData)
  //   e.preventDefault();
  //   if (
  //     errMsgNoKK !== "" ||
  //     errMsgNIK !== "" ||
  //     errMsgNama !== "" ||
  //     errMsgNoTelp !== "" ||
  //     errMsgJeniKelamin !== "" ||
  //     errMsgTglLahir !== "" ||
  //     errMsgStatusHubungan !== "" ||
  //     errMsgStatusPerkawinan !== "" ||
  //     errMsgAddress !== "" ||
  //     errMsgKelurahan !== "" ||
  //     errMsgKecamatan !== "" ||
  //     errMsgKabupaten !== "" ||
  //     errMsgProvinsi !== ""
  //   ) {
  //     alert("terdapat data yang tidak sesuai");
  //   } else if (
  //     formData.no_kk === "" ||
  //     formData.no_kk === 0 ||
  //     formData.nik === "" ||
  //     formData.nik === 0 ||
  //     formData.fullname === "" ||
  //     formData.nohp === "" ||
  //     formData.nohp === 0 ||
  //     formData.gender === "" ||
  //     formData.dateof_birth === "" ||
  //     formData.family_relationship === "" ||
  //     formData.marriage_status === "" ||
  //     formData.address === "" ||
  //     formData.kelurahan === "" ||
  //     formData.kecamatan === "" ||
  //     formData.kabupaten === "" ||
  //     formData.provinsi === ""
  //   ) {
  //     alert("ada data yang masih kosong");
  //   } else {
  //     setIsLoaded("updating")
  //     var API_URL = 'https://reservaksin-be.herokuapp.com'
  //     await axios.put(`${API_URL}/citizen/${id}`, {
  //       nohp: formData.nohp,
  //       nokk: formData.no_kk,
  //       nik: formData.nik,
  //       fullname: formData.fullname,
  //       gender: formData.gender,
  //       dob: formData.dateof_birth,
  //       relationship: formData.family_relationship,
  //       status: formData.marriage_status,
  //       current_address: {
  //         alamat: formData.address,
  //         kelurahan: formData.desa,
  //         kecamatan: formData.kecamatan,
  //         kota: formData.kota,
  //         provinsi: formData.provinsi,
  //       }
  //       ,
  //       role: "user"
  //     })
  //       .then((response) => {
  //         // console.log(response)
  //         dispatch(user(({
  //           email: response.data.data.email,
  //           nik: response.data.data.nik,
  //           nohp: response.data.data.nohp,
  //           fullname: response.data.data.fullname,
  //           nokk: response.data.data.nokk,
  //           dob: response.data.data.dob,
  //           relationship: response.data.data.relationship,
  //           gender: response.data.data.gender,
  //           status: response.data.data.status,
  //           role: response.data.data.role,
  //           alamat: response.data.data.current_Address.alamat,
  //           provinsi: response.data.data.current_Address.provinsi,
  //           kota: response.data.data.current_Address.kota,
  //           kecamatan: response.data.data.current_Address.provinsi,
  //           kelurahan: response.data.data.current_Address.kelurahan,
  //         })))
  //         navigate(-1)
  //         // if (response.data.meta.status !== 200) {
  //         //   setError(response.data.meta.messages)
  //         // } else {
            
            
  //         //   // setError(response.data.meta.messages)
  //         // }


  //         // console.log(error)
  //       })
  //       .catch((e) => {
  //         console.log(e)
  //         if (e.response) {
  //           if (e.response.status === 400) {
  //             ToastError("bad request")
  //           }
  //         } else if (e.request) {
  //           console.log("isi err req", e.request)
  //         }
  //         setIsLoaded()
  //       })
  //   }
  // };

  // return (
  //   <div className="container mx-auto page-wrapper">
  //     <Toaster />
  const updateToAPI = async () => {
    await axios
      .put(`https://reservaksin-be.herokuapp.com/citizen/${formDataUser?.id}`, {
        ...formDataUser,
        nohp: dataUser?.nohp,
      })
      .then((response) => {
        dispatch(setUser(response?.data?.data));
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("ngga valid");
    } else {
      event.preventDefault();
      setToast({
        show: true,
        body: (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
              Proses edit data
            </p>
          </div>
        ),
        delay: 10000,
        headIcon: (
          <span className="material-icons-outlined text-secondary">
            hourglass_top
          </span>
        ),
      });
      setIsLoaded(true);
      await updateToAPI();
    }
    setValidated(true);
  };

  return (
    <div className="personal-data container mx-auto page-wrapper">
      <br />
      <BackButton title="Personal Data" />
      <section className="py-3 form-content">
        <ProfilePic />
        {/* <form onSubmit={submitFormData}>
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
          /> */}
          {/* <button className="btn btn-primary w-100 my-3" type="submit">
            {isLoaded === "updating" ?
              (<Spinner animation="border" variant="primary" />)
              :
              "Simpan"
            } */}
        <section className="pt-3 mt-3 fam-content">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="mb-3 ctr-input ">
              <Form.Label>No. KK*</Form.Label>
              <Form.Control
                disabled
                placeholder="Masukkan no. KK"
                name="nokk"
                type="number"
                value={formDataUser?.nokk}
                required
              />
            </div>
            <div className="mb-3 ctr-input">
              <Form.Label>NIK*</Form.Label>
              <Form.Control
                placeholder="Masukkan NIK"
                name="nik"
                value={formDataUser?.nik}
                onChange={(e) => handleInput(e)}
                type="text"
                maxLength={16}
                required
              />
              <Form.Control.Feedback type="invalid">
                NIK tidak boleh kosong
              </Form.Control.Feedback>
            </div>
            <div className="mb-3 ctr-input">
              <Form.Label>Nama Lengkap*</Form.Label>
              <Form.Control
                placeholder="Masukkan nama lengkap"
                type="text"
                value={formDataUser?.fullname}
                onChange={(e) => handleInput(e)}
                name="fullname"
                required
              />
              <Form.Control.Feedback type="invalid">
                Nama lengkap tidak boleh kosong
              </Form.Control.Feedback>
            </div>
            <div className="mb-3 ctr-input">
              <Form.Label className="col-form-label">Jenis Kelamin*</Form.Label>
              <div className="d-flex">
                <div className="form-check form-check-inline me-5">
                  <Form.Check
                    type="radio"
                    name="gender"
                    value="Pria"
                    checked={formDataUser?.gender === "Pria"}
                    onChange={(e) => handleInput(e)}
                    required
                  />
                  <Form.Label className="form-check-label">Pria</Form.Label>
                </div>
                <div className="form-check form-check-inline ms-5">
                  <Form.Check
                    type="radio"
                    name="gender"
                    value="Wanita"
                    checked={formDataUser?.gender === "Wanita"}
                    onChange={(e) => handleInput(e)}
                    required
                  />
                  <label className="form-check-label">Wanita</label>
                </div>
              </div>
              <Form.Control.Feedback type="invalid">
                Pilih salah satu
              </Form.Control.Feedback>
            </div>
            <div className="mb-3 ctr-input date-input">
              <Form.Label>Tanggal Lahir *</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formDataUser?.dob}
                onChange={(e) => handleInput(e)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Tanggal lahir tidak boleh kosong
              </Form.Control.Feedback>
            </div>
            <div className="mb-3 ctr-input">
              <Form.Label>Status Hubungan dalam Kartu Keluarga*</Form.Label>
              <Form.Select
                name="relationship"
                value={formDataUser?.relationship}
                onChange={(e) => handleInput(e)}
                required
              >
                <option value="" disabled>
                  Hubungan keluarga
                </option>
                <option value="anak">Anak</option>
                <option value="suami">Suami</option>
                <option value="istri">Istri</option>
                <option value="mertua">Mertua</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Pilih salah satu
              </Form.Control.Feedback>
            </div>
            <div className="mb-4 ctr-input">
              <Form.Label>Status Perkawinan*</Form.Label>
              <Form.Select
                value={formDataUser?.status}
                name="status"
                onChange={(e) => handleInput(e)}
                required
              >
                <option value="" disabled>
                  Status perkawinan
                </option>
                <option value="Belum Kawin">Belum Kawin</option>
                <option value="Kawin">Kawin</option>
                <option value="Cerai">Cerai</option>
                <option value="Cerai Mati">Cerai Mati</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Pilih salah satu
              </Form.Control.Feedback>
            </div>
            <Form.Label>Data Alamat</Form.Label>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed border"
                  style={{ borderRadius: "5px" }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Lihat Data Alamat
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="mb-3 ctr-input">
                    <Form.Label>Alamat*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan Alamat"
                      name="alamat"
                      value={formDataUser?.current_Address?.alamat}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Alamat tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 ctr-input">
                    <Form.Label>Kelurahan/Desa*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan Kelurahan"
                      name="kelurahan"
                      value={formDataUser?.current_Address?.kelurahan}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Kelurahan tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 ctr-input">
                    <Form.Label>Kecamatan*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan NIK"
                      name="kecamatan"
                      value={formDataUser?.current_Address?.kecamatan}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Kecamatan tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 ctr-input">
                    <Form.Label>Kabupaten/Kota*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan NIK"
                      name="kota"
                      value={formDataUser?.current_Address?.kota}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Kabupaten/Kota tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 ctr-input">
                    <Form.Label>Provinsi*</Form.Label>
                    <Form.Control
                      placeholder="Masukkan NIK"
                      name="provinsi"
                      value={formDataUser?.current_Address?.provinsi}
                      onChange={(e) => handleInput(e)}
                      type="text"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Provinsi tidak boleh kosong
                    </Form.Control.Feedback>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-5">
              {isLoaded ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Simpan"
              )}
            </button>
          </Form>
          <button
            className="btn btn-outline-primary w-100 mt-3"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </section>
        <CustomToast toast={toast} setToast={setToast} />
      </section>
    </div>
  );
}
