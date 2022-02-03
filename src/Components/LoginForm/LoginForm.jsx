import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { login } from "../../Config/Redux/LoginSlice";
import { setUser } from "../../Config/Redux/UserSlice";
import { Toaster } from "react-hot-toast";
import { ToastError } from "../Toast/Toast";
import axios from "axios";
import jwt from "jwt-decode";
import CustomToast from "Components/CustomToast/CustomToast";

const formKosong = {
  email_or_nik: "",
  password: "",
};
const formError = {
  username: "",
  password: "",
};

export default function LoginForm() {
  //init state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toast, setToast] = useState({
    show: false,
    body: <></>,
    delay: 0,
    headIcon: <></>,
  });
  const [form, setForm] = useState(formKosong);
  const [errMsg, setErrMsg] = useState(formError);
  const [isLoaded, setIsLoaded] = useState(false);

  //regex for validation
  const isEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isNIK =
    /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;

  //validation function
  const validateFormValue = (name, value) => {
    //validate email or nik
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
          const err = `${
            key.charAt(0).toUpperCase() + key.slice(1)
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

  const loginToAPI = async () => {
    await axios
      .post(`${process.env.REACT_APP_RESERVAKSIN_API_URL}/citizen/login`, form)
      .then((resp) => {
        var user = jwt(resp?.data?.data?.token);
        dispatch(
          login({
            email_or_nik: form.email_or_nik,
            login: true,
            token: resp.data.data.token,
            id: user.id,
          })
        );
        dispatch(setUser(resp?.data?.data?.DataCitizen));
        navigate("/");
        setIsLoaded(false);
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.status === 401) {
            setToast({
              show: false,
              body: <></>,
              delay: 0,
              headIcon: <></>,
            });
            ToastError("email/nik atau password salah!");
          }
        } else if (e.request) {
          console.log("error:", e.request);
        }
        setIsLoaded(false);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validForm = Object.keys(form).filter((key) => form[key] !== "");
    if (validForm.length < 2) {
      validateOnSubmit();
    } else {
      setToast({
        show: true,
        body: (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p style={{ fontSize: "1rem", marginTop: "1rem" }}>Login ...</p>
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
      await loginToAPI();
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

          {isLoaded ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
      <div className="text-center btnact-container">
        <hr />
        <p className="text-unregis">Belum terdaftar?</p>
        <Link className="btn btn-outline-primary mb-3 w-100" to="/register">
          Daftar sekarang
        </Link>
      </div>
      <CustomToast toast={toast} setToast={setToast} />
    </div>
  );
}
