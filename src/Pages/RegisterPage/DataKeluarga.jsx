import React, {useState} from "react";
import { Stepper } from "react-form-stepper";
import "index.css";
import "./DataKeluarga.css";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import AccordionFormDataKeluarga from "Components/AccordionFormDataKeluarga/AccordionFormDataKeluarga";

function DataKeluarga({
  nextStep,
  prevStep,
  listAnggota,
  setListAnggota,
  dataAnggota,
  formDataNoKK
}) {
  // const [errMsgNoKK, seterrMsgNoKK] = useState("");
  // const [errMsgNIK, seterrMsgNIK] = useState("");
  // const [errMsgNama, seterrMsgNama] = useState("");
  // const [errMsgJeniKelamin, seterrMsgJeniKelamin] = useState("");
  // const [errMsgStatusHubungan, seterrMsgStatusHubungan] = useState("");
  // const [errMsgStatusPerkawinan, seterrMsgStatusPerkawinan] = useState("");
  // const [errMsgTglLahir, seterrMsgTglLahir] = useState("");
  const regexNIK =
    /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;

  // const handleValidation = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   if (name === "no_kk") {
  //     if (listAnggota.no_kk === 0 || listAnggota.no_kk === "") {
  //       seterrMsgNoKK("No. KK tidak boleh kosong!");
  //     } else {
  //       seterrMsgNoKK("");
  //     }
  //   }

  //   if (name === "nik") {
  //     if (listAnggota.nik !== 0 || listAnggota.nik !== "") {
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
  //     if (listAnggota.fullname !== "") {
  //       seterrMsgNama("");
  //     } else {
  //       seterrMsgNama("Nama tidak boleh kosong!");
  //     }
  //   }

  //   if (name === "gender") {
  //     if (listAnggota.gender !== "") {
  //       seterrMsgJeniKelamin("");
  //     } else {
  //       seterrMsgJeniKelamin("Pilih salah satu!");
  //     }
  //   }

  //   if (name === "family_relationship") {
  //     if (listAnggota.family_relationship !== "") {
  //       seterrMsgStatusHubungan("");
  //     } else {
  //       seterrMsgStatusHubungan("Pilih salah satu!");
  //     }
  //   }

  //   if (name === "marriage_status") {
  //     if (listAnggota.marriage_status !== "") {
  //       seterrMsgStatusPerkawinan("");
  //     } else {
  //       seterrMsgStatusPerkawinan("Pilih salah satu!");
  //     }
  //   }

  //   if (name === "dateof_birth") {
  //     if (listAnggota.dateof_birth !== "") {
  //       seterrMsgTglLahir("");
  //     } else {
  //       seterrMsgTglLahir("Tanggal lahir harus diisi!");
  //     }
  //   }
  // };


  const handleInputDataAnggota = (id, e) => {
    setListAnggota(
      listAnggota.map((item) => {
        if (item.id === id) {
          return { ...item, [e.target.name]: e.target.value };
        }
        return item;
      })
    );
  };

  const handleInputTglLahirAnggota = (id, date) => {
    setListAnggota(
      listAnggota.map((item) => {
        if (item.id === id) {
          return { ...item, dateof_birth: date };
        }
        return item;
      })
    );
  };

  const handleDeleteAnggotaKeluarga = (id) => {
    const filt = listAnggota.filter((item) => item.id !== id);
    setListAnggota(filt);
  };

  // console.log(listAnggota);
  return (
    <div className="container mx-auto page-wrapper">
      <Stepper
        steps={[
          { label: "Data Pribadi", completed: true },
          { label: "Alamat", completed: true },
          { label: "Data Keluarga", active: true },
        ]}
        activeStep={2}
        styleConfig={{ activeBgColor: '#0D5389', completedBgColor: '#031625' }}
        connectorStateColors={true}
        // activeColor='#0D5389'
        // completedColor = '#031625'
        // disabledColor = '#B0BBDB'
      ></Stepper>
      <div className="accordion" id="accordionExample">
        {listAnggota.map((item, idx) => (
          <AccordionFormDataKeluarga
            key={item.id}
            idx={idx}
            id={item.id}
            formdataAnggota={item}
            handleInputDataAnggota={handleInputDataAnggota}
            handleInputTglLahirAnggota={handleInputTglLahirAnggota}
            handleDeleteAnggotaKeluarga={handleDeleteAnggotaKeluarga}
            formDataNoKK={formDataNoKK}
            setFormData={setListAnggota}

          />
        ))}
        <Button
          className="btn btn btn-primary w-100"
          onClick={() => {
            setListAnggota([...listAnggota, { ...dataAnggota, id: uuidv4() }]);
          }}
        >
          Tambah Anggota
        </Button>
      </div>

      <div className="container mt-3 mb-2 p-0">
        <p className="lewati-button" onClick={nextStep}>
          Lewati
        </p>
      </div>
      <div className="container mt-3 mb-2 p-0">
        <Button onClick={nextStep} className="btn-style w-100">
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
    </div>
  );
}

export default DataKeluarga;
