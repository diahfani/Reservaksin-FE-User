import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import { Button } from "react-bootstrap";
import BrandLogo from "Components/BrandLogo/BrandLogo";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastError } from "../../Components/Toast/Toast";
import axios from "axios";

function Submit({ prevStep, formData, formdataAnggota }) {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoaded(true);
    await axios
      .post(`${process.env.REACT_APP_RESERVAKSIN_API_URL}/citizen/register`, {
        email: formData.email,
        nohp: formData.no_hp,
        password: formData.password,
        nokk: formData.no_kk,
        nik: formData.nik,
        fullname: formData.fullname,
        gender: formData.gender,
        dob: formData.dateof_birth,
        relationship: formData.family_relationship,
        status: formData.marriage_status,
        current_address: {
          alamat: formData.address,
          kelurahan: formData.desa,
          kecamatan: formData.kecamatan,
          kota: formData.kota,
          provinsi: formData.provinsi,
        },
        role: "user",
      })

      .then((response) => {
        if (response.data.meta.status !== 200) {
          setError(response.data.meta.messages);
        } else {
          setError(response.data.meta.messages);
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response) {
          if (e.response.status === 400) {
            ToastError("bad request");
          }
        } else if (e.request) {
          console.log("error", e.request);
          setIsLoaded(false);
        }
      });
    formdataAnggota.map(async (item) => {
      await axios
        .post(`${process.env.REACT_APP_RESERVAKSIN_API_URL}/citizen/register`, {
          nokk: formData.no_kk,
          nohp: formData.no_hp,
          nik: item.nik,
          fullname: item.fullname,
          gender: item.gender,
          dob: item.dateof_birth,
          relationship: item.family_relationship,
          status: item.marriage_status,
          current_address: {
            alamat: formData.address,
            kelurahan: formData.desa,
            kecamatan: formData.kecamatan,
            kota: formData.kota,
            provinsi: formData.provinsi,
          },
          role: "anggota",
        })
        .then((response) => {
          console.log(response);
          if (response.data.meta.status !== 200) {
            setError(response.data.meta.messages);
          } else {
            setError(response.data.meta.messages);
          }
        })
        .catch((e) => {
          console.log(e);
          if (e.response) {
            if (e.response.status === 400) {
              ToastError("bad request");
            }
          } else if (e.request) {
            console.log("error:", e.request);
            setIsLoaded(false);
          }
        });
    });
    setIsLoaded(false);
    navigate("/");
  };

  return (
    <div className="container mx-auto page-wrapper">
      <Toaster />
      <Stepper
        steps={[
          { label: "Data Pribadi", completed: true },
          { label: "Alamat", completed: true },
          { label: "Data Keluarga", completed: true },
        ]}
        activeStep={2}
        styleConfig={{ activeBgColor: '#0D5389', completedBgColor: '#031625' }}
        connectorStateColors={true}
      ></Stepper>
      <div className="text-center my-5">
        <BrandLogo></BrandLogo>
        <h4 className="my-5">Pastikan Data yang Anda Input Sudah Benar</h4>
      </div>
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="mt-5 mb-2 p-0">
            <Button type="submit" className="btn-style w-100">
              {isLoaded ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Submit"
              )}
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
