import React, { useState } from 'react'
import { Stepper } from 'react-form-stepper'
import DataPribadiComponent from '../../Components/FormDataPribadi/DataPribadi'
import 'index.css'
import './DataPribadi.css'
import { Button } from 'react-bootstrap'

function DataPribadi({ 
    nextStep, 
    prevStep, 
    step, 
    handleInputData, 
    formData, 
    setFormData, 
    // handleInputDataTglLahir 
}) {
    // console.log(formData)
    console.log(step)
    // const [errMsg, setErrMsg] = useState({
    //     errMsgNoKK: "",
    //     errMsgNIK: "",
    //     errMsgNama: "",
    //     errMsgJeniKelamin: "",
    //     errMsgStatusHubungan: "",
    //     errMsgStatusPerkawinan: "",
    //     errMsgTglLahir: "",
    // })
    const [errMsgNoKK, seterrMsgNoKK] = useState("")
    const [errMsgNIK, seterrMsgNIK] = useState("")
    const [errMsgNama, seterrMsgNama] = useState("")
    const [errMsgJeniKelamin, seterrMsgJeniKelamin] = useState("")
    const [errMsgStatusHubungan, seterrMsgStatusHubungan] = useState("")
    const [errMsgStatusPerkawinan, seterrMsgStatusPerkawinan] = useState("")
    const [errMsgTglLahir, seterrMsgTglLahir] = useState("")
    const regexNIK = /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/

    const handleValidation = e => {
        const name = e.target.name
        const value = e.target.value

        if (name === "nokk") {
            if (formData.nokk === 0 || formData.nokk === "") {
                seterrMsgNoKK("No. KK tidak boleh kosong!")
            } else {
                seterrMsgNoKK("")
            }
        }

        if (name === "nik") {
            if (formData.nik !== 0 || formData.nik !== "") {
                if (regexNIK.test(value)) {
                    seterrMsgNIK("")
                } else {
                    seterrMsgNIK("NIK tidak sesuai!")
                }
            } else {
                seterrMsgNIK("NIK tidak boleh kosong!")
            }
        }

        if (name === "namalengkap") {
            if (formData.namalengkap !== "") {
                seterrMsgNama("")
            } else {
                seterrMsgNama("Nama tidak boleh kosong!")
            }
        }

        if (name === "jeniskelamin") {
            if (formData.jeniskelamin !== "") {
                seterrMsgJeniKelamin("")
            } else {
                seterrMsgJeniKelamin("Pilih salah satu!")
            }
        }

        if (name === "statusHubungan") {
            if (formData.statusHubungan !== "") {
                seterrMsgStatusHubungan("")
            } else {
                seterrMsgStatusHubungan("Pilih salah satu!")
            }
        }

        if (name === "statusPerkawinan") {
            if (formData.statusPerkawinan !== "") {
                seterrMsgStatusPerkawinan("")
            } else {
                seterrMsgStatusPerkawinan("Pilih salah satu!")
            }
        }

        if (name === "tglLahir") {
            if (formData.tglLahir !== "") {
                seterrMsgTglLahir("")
            } else {
                seterrMsgTglLahir("Tanggal lahir harus diisi!")
            }
        }
    }
    // var _ = require('lodash')
    // const checkErr = _.isEmpty(errMsg)
    // console.log(checkErr)

    const handleSubmit = e => {
        if (errMsgNIK !== "" || errMsgNIK !== "" || errMsgNama !== "" || errMsgJeniKelamin !== "" || errMsgStatusHubungan !== "" ||
        errMsgStatusPerkawinan !== "" || errMsgTglLahir !== "") {
            alert("terdapat data yang tidak sesuai")
        } else if (formData.nik === 0 || formData.nik === "" || formData.nokk === 0 || formData.nokk === "" || formData.namalengkap === "" || formData.jeniskelamin === "" ||
        formData.tglLahir === "" || formData.statusHubungan === "" || formData.statusPerkawinan === ""){
            alert("data ada yang masih kosong")
        } else {
            console.log(formData)
            nextStep()
        }
        e.preventDefault()
    }

    return (
        <div className="container mx-auto page-wrapper p-0">
            <div className='container  page-data-pribadi' >
                <div className='container'>
                    <Stepper steps={[{ label: 'Data Pribadi' }, { label: 'Alamat' }, { label: 'Data Keluarga' }]}
                        connectorStateColors={true}
                        activeStep={3}></Stepper>
                </div>
                <div className='container page-data-pribadi pe-0'>
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
                            // handleInputDataTglLahir={handleInputDataTglLahir}
                            setFormData={setFormData}/>
                        <div className='container'>
                            <div className='container mt-3 mb-2 p-0'>
                                <Button className='btn-style' type='submit'>Lanjut</Button>
                            </div>
                            <div className='container mt-2 mb-3 p-0'>
                                <Button className="btn-style-prev" variant="outline-primary" onClick={prevStep}>Kembali</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DataPribadi
