import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { login } from "../../Config/Redux/LoginSlice";
import { user } from "../../Config/Redux/UserSlice";
import { Toaster } from "react-hot-toast";
import { ToastError } from "../Toast/Toast";
import axios from 'axios'
import jwt from 'jwt-decode';
import jwt_decode from "jwt-decode";
// import useHandleLogin from '../../Hooks/useHandleLogin'
import { Spinner } from 'react-bootstrap'


function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleLogin = useHandleLogin()
  const formKosong = {
    email_or_nik: "",
    // nik:"",
    password: "",

  };
  const formError = {
    username: "",
    password: "",
  };

  //init state
  const [form, setForm] = useState(formKosong);
  const [errMsg, setErrMsg] = useState(formError);
  const [error, setError] = useState([])
  const [isLoaded, setIsLoaded] = useState()

  //regex for validation
  const isEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isNIK =
    /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;

  //validation function
  const validateFormValue = (name, value) => {
    //validate username
    if (name === "email_or_nik") {
      if (isEmail.test(value) || isNIK.test(value)) {
        setErrMsg({ ...formError, username: "" });
      } else {
        if (isNaN(value)) {
          setErrMsg({
            ...formError,
            username: "email yang Anda masukkan salah",
          });
        } else {
          setErrMsg({ ...formError, username: "NIK yang anda masukkan salah" });
        }
      }
      //validate password
      if (name === "password" && value !== "") {
        setErrMsg({ ...formError, password: "" });
      }
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    validateFormValue(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateOnSubmit = () => {
    setErrMsg(() => {
      const errorMessageArr = Object.keys(errMsg).map((key) => {
        if (form[key] === "") {
          const err = `${key.charAt(0).toUpperCase() + key.slice(1)
            } tidak boleh kosong`;

          return { [key]: err };
        }
        return { [key]: "" };
      });
      const updatedErrorMessage = errorMessageArr.reduce(
        (previousValue, currentValue) => {
          return { ...previousValue, ...currentValue };
        },
        {}
      );
      return updatedErrorMessage;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validForm = Object.keys(form).filter((key) => form[key] !== "");
    // const has
    var API_URL = 'https://reservaksin-be.herokuapp.com'
    if (validForm.length < 2) {
      validateOnSubmit();
    } else {
    
      setIsLoaded("logging in")

      await axios
        .post(`${API_URL}/citizen/login`, form)

        .then((resp) => {
          if (resp.data.meta.status !== 200) {
            setError(resp.data.meta.messages)


          } else {
            
            // console.log(resp.data.data.DataCitizen.current_Address.alamat)
            // console.log(resp.data.data.DataCitizen.current_Address.provinsi)
            // handleLogin(resp.data.data)
            var userToken = jwt(resp.data.data.token)
            // console.log(user)
            dispatch(login(({
              email_or_nik: form.email_or_nik,
              login: true,
              token: jwt_decode(resp.data.data.token),
              id: userToken.id
            })))
            dispatch(user(({
              email: resp.data.data.DataCitizen.email,
              nik: resp.data.data.DataCitizen.nik,
              nohp: resp.data.data.DataCitizen.nohp,
              fullname: resp.data.data.DataCitizen.fullname,
              nokk: resp.data.data.DataCitizen.nokk,
              dob: resp.data.data.DataCitizen.dob,
              relationship: resp.data.data.DataCitizen.relationship,
              gender: resp.data.data.DataCitizen.gender,
              status: resp.data.data.DataCitizen.status,
              role: resp.data.data.DataCitizen.role,
              alamat: resp.data.data.DataCitizen.current_Address.alamat,
              provinsi: resp.data.data.DataCitizen.current_Address.provinsi,
              kota: resp.data.data.DataCitizen.current_Address.kota,
              kecamatan: resp.data.data.DataCitizen.current_Address.provinsi,
              kelurahan: resp.data.data.DataCitizen.current_Address.kelurahan,
            })))
            
            // handleLogin(resp.data.data)
            navigate("/")
          }
        })
        .catch((e) => {
          // console.log(e)
          if (e.response) {
            if (e.response.status === 401) {
              ToastError("email/nik atau password salah!")
            }
          } else if (e.request) {
            console.log("isi err req", e.request)
          }
          setIsLoaded()
        })
    }
  };

  return (
    <div>
      <Toaster />
    
      <form className="form needs-validation pt-5" onSubmit={handleSubmit}>
        <div className="mb-3 has-validation">
          <label htmlFor="username" className="form-label">
            Email atau NIK
          </label>
          <input
            name="email_or_nik"
            value={form.email_or_nik}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="email-or-nik"
            placeholder="Masukkan email atau NIK"
          />
          <span className="error-msg">{errMsg.username}</span>
        </div>

        <div className="mb-3 has-validation">
          <label htmlFor="password" className="form-label">
            Kata sandi
          </label>
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <span className="error-msg">{errMsg.password}</span>
        </div>
        <div className="form-group d-flex justify-content-between mb-3">
          <label className="form-remember">
            <input type="checkbox" /> Ingat saya
          </label>
          <a className="form-recovery" href="/">
            Lupa password?
          </a>
        </div>
        <button className="btn btn-primary w-100" type="submit">
        {isLoaded === "logging in" ?
        (<Spinner animation="border" variant="primary" />)
        : 
      "Login"
      }

        </button>
      </form>
      <div className="text-center btnact-container">
        <hr />
        <p className="text-unregis">Belum terdaftar?</p>
        <Link className="btn btn-outline-primary mb-3 w-100" to="/register">
          Daftar sekarang
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
