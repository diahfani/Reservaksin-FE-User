import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import "index.css";
import { Button } from "react-bootstrap";
import Alamat from "Components/FormAlamat/Alamat";

function DataAlamat({ nextStep, prevStep, handleInputData, formData }) {
  const [errMsgAlamat, seterrMsgAlamat] = useState("");
  const [errMsgKelurahan, seterrMsgKelurahan] = useState("");
  const [errMsgKecamatan, seterrMsgKecamatan] = useState("");
  const [errMsgKabupaten, seterrMsgKabupaten] = useState("");
  const [errMsgProvinsi, seterrMsgProvinsi] = useState("");

  const handleValidation = (e) => {
    const name = e.target.name;

    if (name === "address") {
      if (formData.address === "") {
        seterrMsgAlamat("Alamat tidak boleh kosong!");
      } else {
        seterrMsgAlamat("");
      }
    }

    if (name === "desa") {
      if (formData.desa === "") {
        seterrMsgKelurahan("NIK tidak boleh kosong!");
      } else {
        seterrMsgKelurahan("");
      }
    }

    if (name === "kecamatan") {
      if (formData.kecamatan !== "") {
        seterrMsgKecamatan("");
      } else {
        seterrMsgKecamatan("Kecamatan tidak boleh kosong!");
      }
    }

    if (name === "kota") {
      if (formData.kota !== "") {
        seterrMsgKabupaten("");
      } else {
        seterrMsgKabupaten("Kabupaten tidak boleh kosong!");
      }
    }

    if (name === "provinsi") {
      if (formData.provinsi !== "") {
        seterrMsgProvinsi("");
      } else {
        seterrMsgProvinsi("Provinsi tidak boleh kosong!");
      }
    }
  };

  const handleSubmit = (e) => {
    if (
      errMsgAlamat !== "" ||
      errMsgKelurahan !== "" ||
      errMsgKecamatan !== "" ||
      errMsgKabupaten !== "" ||
      errMsgProvinsi !== ""
    ) {
      alert("terdapat data yang tidak sesuai");
    } else if (
      formData.address === "" ||
      formData.desa === "" ||
      formData.kecamatan === "" ||
      formData.kota === "" ||
      formData.provinsi === ""
    ) {
      alert("data ada yang masih kosong");
    } else {
      // console.log(formData);
      nextStep();
    }
    e.preventDefault();
  };

  return (
    <div className="container page-wrapper">
      <Stepper
        steps={[
          { label: "Data Pribadi", completed: true },
          { label: "Alamat", active: true },
          { label: "Data Keluarga", active: false },
        ]}
        activeStep={1}
        styleConfig={{ activeBgColor: '#0D5389', completedBgColor: '#031625' }}
        connectorStateColors={true}
        // activeColor='#0D5389'
        // completedColor = '#031625'
        // disabledColor = '#B0BBDB'
      ></Stepper>
      <form onSubmit={handleSubmit}>
        <Alamat
          formData={formData}
          errMsgAlamat={errMsgAlamat}
          errMsgKelurahan={errMsgKelurahan}
          errMsgKecamatan={errMsgKecamatan}
          errMsgKabupaten={errMsgKabupaten}
          errMsgProvinsi={errMsgProvinsi}
          handleValidation={handleValidation}
          handleInputData={handleInputData}
        />
        <div className="container mt-3 mb-2 p-0">
          <Button type="submit" className="btn-style w-100">
            Lanjut
          </Button>
        </div>
        <div className="container mt-2 mb-3 p-0">
          <Button
            className="btn-style-prev w-100"
            onClick={prevStep}
            variant="outline-primary"
          >
            Kembali
          </Button>
        </div>
      </form>
    </div>
  );
}

export default DataAlamat;
