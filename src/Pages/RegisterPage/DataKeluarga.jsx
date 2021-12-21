import React from "react";
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
}) {
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
          return { ...item, tglLahir: date };
        }
        return item;
      })
    );
  };

  const handleDeleteAnggotaKeluarga = (id) => {
    const filt = listAnggota.filter((item) => item.id !== id);
    setListAnggota(filt);
  };

  console.log(listAnggota);
  return (
    <div className="container mx-auto page-wrapper">
      <Stepper
        steps={[
          { label: "Data Pribadi" },
          { label: "Alamat" },
          { label: "Data Keluarga" },
        ]}
        activeStep={3}
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
