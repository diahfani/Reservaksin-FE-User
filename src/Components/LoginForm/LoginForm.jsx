import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { loginByEmail, loginByNIK } from "../../Config/Redux/LoginSlice";
import { Toaster } from "react-hot-toast";
import { ToastError } from "../Toast/Toast";
import axios from 'axios'
import jwt from 'jwt-decode';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formKosong = {
    email:"",
    nik:"",
    password: "",
  };
  const formError = {
    username:"",
    password: "",
  };
  const formNIK = {
    nik:"",
    password: "",
  };

  //init state
  const [form, setForm] = useState(formKosong);
  const [errMsg, setErrMsg] = useState(formError);
  const [error, setError] = useState([])

  //regex for validation
  const isEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isNIK =
    /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;

  //validation function
  const validateFormValue = (name, value) => {
    //validate username
    if (name === "username") {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const validForm = Object.keys(form).filter((key) => form[key] !== "");
    var API_URL = 'https://reservaksin-be.herokuapp.com'
    if (validForm.length < 2) {
      validateOnSubmit();
    } else if (isNaN(form.email)){
      
      console.log(form)

      axios
      .post(`${API_URL}/citizen/loginEmail`, form)

      .then((resp)=> {
        console.log("isi resp", resp)
        if (resp.data.meta.status !== 200) {
          setError(resp.data.meta.messages)
        } else {
          var user = jwt(resp.data.data.token)
          dispatch(loginByEmail(({
            email:form.email, 
            login:true, 
            token:resp.data.data.token, id:user.id})))
          navigate("/")
        }
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.status === 400) {
            ToastError("Username atau password salah!")
          }
        } else if (e.request) {
          console.log("isi err req", e.request)
        }
      })
      // // console.log(errMsg);
      // // if (errMsg.username !== "" || errMsg.password !== "") {
      // //   ToastError("masih ada data yg salah!");
      //   return;
      // }
      // const loginData = {
      //   username: form.username,
      //   login: true,
      // };
      // dispatch(login(loginData));
      // navigate("/profile");
    } else {
      axios
      .post(`${API_URL}/citizen/loginNik`, form)
      console.log(form)
      .then((resp)=> {
        console.log("isi resp", resp)
        if (resp.data.meta.status !== 200) {
          setError(resp.data.meta.messages)
        } else {
          var user = jwt(resp.data.data.token)
          dispatch(loginByNIK(({
            nik:form.nik, 
            login:true, 
            token:resp.data.data.token, 
            id:user.id})))
          navigate("/")
        }
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.status === 400) {
            ToastError("Username atau password salah!")
          }
        } else if (e.request) {
          console.log("isi err req", e.request)
        }
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
            name="email"
            value={isNaN ? form.email : form.nik}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="username"
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
          Login
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
