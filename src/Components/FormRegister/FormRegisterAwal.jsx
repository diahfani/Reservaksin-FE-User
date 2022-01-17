import React, { useState } from "react";
import "./FormRegisterAwal.css";
import { Button } from "react-bootstrap";
import BrandLogo from "Components/BrandLogo/BrandLogo";

function FormRegisterAwal({ nextStep, handleInputData, formData }) {
  const [errMsgEmail, seterrMsgEmail] = useState("");
  const [errMsgNotelp, seterrMsgNotelp] = useState("");
  const [errMsgPass, seterrMsgPass] = useState("");
  const [errMsgPassAgain, setErrMsgPassAgain] = useState("");
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexnotelp =
    /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;
  const regexpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleValidation = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      if (formData.email !== "") {
        if (regexEmail.test(value)) {
          seterrMsgEmail("");
        } else {
          seterrMsgEmail("Email tidak sesuai");
        }
      } else {
        seterrMsgEmail("Email kosong!");
      }
    }

    if (name === "no_hp") {
      if (formData.no_hp !== "") {
        if (regexnotelp.test(value)) {
          seterrMsgNotelp("");
        } else {
          seterrMsgNotelp("No. Telepon tidak sesuai");
        }
      } else {
        seterrMsgNotelp("No. Telepon kosong!");
      }
    }

    if (name === "password") {
      if (formData.password !== "") {
        if (regexpassword.test(value)) {
          seterrMsgPass("");
        } else {
          seterrMsgPass(
            "Kata sandi harus terdiri dari minimum 8 karakter, 1 huruf besar dan 1 angka"
          );
        }
      } else {
        seterrMsgPass("Kata sandi kosong!");
      }
    }

    if (name === "passAgain") {
      if (formData.password !== formData.passAgain) {
        setErrMsgPassAgain("Kata sandi tidak sama");
      } else {
        setErrMsgPassAgain("");
      }
    }
  };

  const submitFormData = (e) => {
    e.preventDefault();
    if (
      errMsgEmail !== "" ||
      errMsgNotelp !== "" ||
      errMsgPass !== "" ||
      errMsgPassAgain !== ""
    ) {
      alert("terdapat data yang tidak sesuai");
    } else if (
      formData.email === "" ||
      formData.no_hp === 0 ||
      formData.password === "" ||
      formData.passAgain === ""
    ) {
      alert("data ada yang masih kosong");
    } else {
      nextStep();
    }
  };

  return (
    <div className="form-register-awal">
      <BrandLogo />
      <form className="form mt-5" onSubmit={submitFormData}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            placeholder="Masukkan email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputData}
            onBlur={handleValidation}
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgEmail}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">No. Telepon</label>
          <input
            placeholder="Masukkan no. telepon"
            name="no_hp"
            value={formData.no_hp}
            onChange={handleInputData}
            onBlur={handleValidation}
            type="number"
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgNotelp}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Kata Sandi</label>
          <input
            placeholder="Masukkan kata sandi"
            type="password"
            value={formData.password}
            onChange={handleInputData}
            onBlur={handleValidation}
            name="password"
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgPass}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Ulangi Kata Sandi</label>
          <input
            placeholder="Ulangi kata sandi"
            type="password"
            name="passAgain"
            value={formData.passAgain}
            onChange={handleInputData}
            onBlur={handleValidation}
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgPassAgain}</p>
        </div>
        <div className="mt-5">
          <Button className="btn-style w-100" type="submit">
            Lanjut
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormRegisterAwal;
