import React, { useState } from "react";
import RegisterPage from "./RegisterPage";
import DataPribadi from "./DataPribadi";
import DataKeluarga from "./DataKeluarga";
import DataAlamat from "./DataAlamat";
import Submit from "./Submit";
import { v4 as uuidv4 } from "uuid";

function Register() {
  const [step, setstep] = useState(1);

  const [formdata, setFormData] = useState({
    email: "",
    notelp: "",
    password: "",
    passAgain: "",
    nokk: "",
    nik: "",
    namalengkap: "",
    jeniskelamin: "",
    tglLahir: new Date(),
    statusHubungan: "",
    statusPerkawinan: "",
    alamat: "",
    kelurahan: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
  });

  const dataAnggota = {
    id: uuidv4(),
    nokk: "",
    nik: "",
    namalengkap: "",
    jeniskelamin: "Pria",
    tglLahir: new Date(),
    statusHubungan: "",
    statusPerkawinan: "",
  };

  const [listAnggota, setListAnggota] = useState([dataAnggota]);

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  switch (step) {
    case 1:
      return (
        <RegisterPage
          nextStep={nextStep}
          handleInputData={handleInputData}
          formData={formdata}
        />
      );
    case 2:
      return (
        <DataPribadi
          nextStep={nextStep}
          prevStep={prevStep}
          handleInputData={handleInputData}
          formData={formdata}
          setFormData={setFormData}
        />
      );
    case 3:
      return (
        <DataAlamat
          nextStep={nextStep}
          prevStep={prevStep}
          handleInputData={handleInputData}
          formData={formdata}
        />
      );
    case 4:
      return (
        <DataKeluarga
          nextStep={nextStep}
          prevStep={prevStep}
          listAnggota={listAnggota}
          setListAnggota={setListAnggota}
          dataAnggota={dataAnggota}
        />
      );
    case 5:
      return (
        <Submit nextStep={nextStep} prevStep={prevStep} formData={formdata} />
      );
    default:
      <div className="container mx-auto p-0 page-wrapper"></div>;
  }
}

export default Register;