import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import DataPribadiComponent from "../../Components/FormDataPribadi/DataPribadi";
import "index.css";
import { Button } from "react-bootstrap";

function DataPribadi({
  nextStep,
  prevStep,
  handleInputData,
  formData,
  setFormData,
}) {
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

    if (name === "no_kk") {
      if (formData.no_kk === 0 || formData.no_kk === "") {
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

    if (name === "fullname") {
      if (formData.fullname !== "") {
        seterrMsgNama("");
      } else {
        seterrMsgNama("Nama tidak boleh kosong!");
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
  };

  const handleSubmit = (e) => {
    if (
      errMsgNoKK !== "" ||
      errMsgNIK !== "" ||
      errMsgNama !== "" ||
      errMsgJeniKelamin !== "" ||
      errMsgStatusHubungan !== "" ||
      errMsgStatusPerkawinan !== "" ||
      errMsgTglLahir !== ""
    ) {
      alert("terdapat data yang tidak sesuai");
    } else if (
      formData.nik === 0 ||
      formData.nik === "" ||
      formData.no_kk === 0 ||
      formData.no_kk === "" ||
      formData.fullname === "" ||
      formData.gender === "" ||
      formData.dateof_birth === "" ||
      formData.family_relationship === "" ||
      formData.marriage_status === ""
    ) {
      alert("data ada yang masih kosong");
    } else {
      nextStep();
    }
    e.preventDefault();
  };

  return (
    <div className="mx-auto page-wrapper">
      <div className="page-data-pribadi">
        <Stepper
          steps={[
            { label: "Data Pribadi", active: true },
            { label: "Alamat", active: false },
            { label: "Data Keluarga", active: false },
          ]}
          styleConfig={{ activeBgColor: '#0D5389', completedBgColor: '#031625' }}
          activeStep={0}
          connectorStateColors={true}
        ></Stepper>
        <form onSubmit={handleSubmit}>
          <DataPribadiComponent
            handleInputData={handleInputData}
            formData={formData}
            errMsgNoKK={errMsgNoKK}
            errMsgNIK={errMsgNIK}
            errMsgNama={errMsgNama}
            errMsgJeniKelamin={errMsgJeniKelamin}
            errMsgStatusHubungan={errMsgStatusHubungan}
            errMsgTglLahir={errMsgTglLahir}
            errMsgStatusPerkawinan={errMsgStatusPerkawinan}
            handleValidation={handleValidation}
            setFormData={setFormData}
          />
          <div className="my-4">
            <Button className="btn-style w-100 mb-3" type="submit">
              Lanjut
            </Button>
            <Button
              className="btn-style-prev w-100 mb-3"
              variant="outline-primary"
              onClick={prevStep}
            >
              Kembali
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DataPribadi;
