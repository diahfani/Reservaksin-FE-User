import React from "react";
import { Stepper } from "react-form-stepper";
import { Button } from "react-bootstrap";
import BrandLogo from "Components/BrandLogo/BrandLogo";
import { useNavigate } from "react-router-dom";

function Submit({ nextStep, prevStep, formData, formdataAnggota }) {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    console.log(formData);
    console.log(formdataAnggota);
    navigate("/")
    e.preventDefault();
  };
  return (
    <div className="container mx-auto page-wrapper">
      <Stepper
        steps={[
          { label: "Data Pribadi" },
          { label: "Alamat" },
          { label: "Data Keluarga" },
        ]}
        connectorStateColors={true}
        activeStep={3}
      ></Stepper>
      <div className="text-center my-5">
        <BrandLogo></BrandLogo>
        <h4 className="my-5">Pastikan Data yang Anda Input Sudah Benar</h4>
      </div>
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="mt-5 mb-2 p-0">
            <Button type="submit" className="btn-style w-100">
              Submit
            </Button>
          </div>
          <div className="mt-2 mb-3 p-0">
            <Button
              onClick={prevStep}
              className="btn-style-prev w-100"
              variant="outline-primary"
            >
              Kembali
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Submit;
