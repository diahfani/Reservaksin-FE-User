import React from "react";
import FormRegisterAwal from "Components/FormRegister/FormRegisterAwal";
import "Components/Button.css";

function Register({ nextStep, prevStep, handleInputData, formData }) {
  return (
    <div className="container py-5 page-wrapper">
      <FormRegisterAwal
        nextStep={nextStep}
        prevStep={prevStep}
        handleInputData={handleInputData}
        formData={formData}
      />
    </div>
  );
}

export default Register;
