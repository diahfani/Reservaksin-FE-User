import React from "react";
import FormRegisterAwal from "Components/FormRegister/FormRegisterAwal";
import "Components/Button.css";
import BackButton from "Components/BackButton/BackButton";

function Register({ nextStep, prevStep, handleInputData, formData }) {
  return (
    <div className="py-4 page-wrapper">
      <BackButton title="Register" />
      <div className="pt-5">
        <FormRegisterAwal
          nextStep={nextStep}
          prevStep={prevStep}
          handleInputData={handleInputData}
          formData={formData}
        />
      </div>
    </div>
  );
}

export default Register;
