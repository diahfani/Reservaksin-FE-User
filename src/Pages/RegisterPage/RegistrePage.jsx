import React, { useState } from "react";
import Register from "./Register";
import DataPribadi from "./DataPribadi";
import DataKeluarga from "./DataKeluarga";
import DataAlamat from "./DataAlamat";
import Submit from "./Submit";
import { v4 as uuidv4 } from "uuid";

function RegistrePage() {
  const [step, setstep] = useState(1);

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
    address: "",
    desa: "",
    kecamatan: "",
    kota: "",
    provinsi: "",
    role: "user"
  });

  const dataAnggota = {
    id: uuidv4(),
    no_kk: formData.no_kk,
    no_hp: formData.no_hp,
    nik: "",
    fullname: "",
    gender: "Pria",
    dateof_birth: "",
    family_relationship: "",
    marriage_status: "",
    role: "anggota"
  };

  const [listAnggota, setListAnggota] = useState([]);

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  switch (step) {
    case 1:
      return (
        <Register
          nextStep={nextStep}
          handleInputData={handleInputData}
          formData={formData}
        />
      );
    case 2:
      return (
        <DataPribadi
          nextStep={nextStep}
          prevStep={prevStep}
          handleInputData={handleInputData}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 3:
      return (
        <DataAlamat
          nextStep={nextStep}
          prevStep={prevStep}
          handleInputData={handleInputData}
          formData={formData}
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
          formDataNoKK={formData.no_kk}
        />
      );
    case 5:
      return (
        <Submit nextStep={nextStep} prevStep={prevStep} formData={formData} formdataAnggota={listAnggota}/>
      );
    default:
      <div className="container mx-auto p-0 page-wrapper"></div>;
  }
}

export default RegistrePage;
