import React, {useState} from 'react'
import { Stepper } from 'react-form-stepper'
import 'index.css'
import './DataPribadi.css'
import { Button } from 'react-bootstrap'
import Alamat from 'Components/FormAlamat/Alamat'

function DataAlamat({
    nextStep,
    prevStep,
    handleInputData,
    formData
}) {
    
    const [errMsgAlamat, seterrMsgAlamat] = useState("")
    const [errMsgKelurahan, seterrMsgKelurahan] = useState("")
    const [errMsgKecamatan, seterrMsgKecamatan] = useState("")
    const [errMsgKabupaten, seterrMsgKabupaten] = useState("")
    const [errMsgProvinsi, seterrMsgProvinsi] = useState("")

    const handleValidation = e => {
        const name = e.target.name

        if (name === "alamat") {
            if (formData.alamat === "") {
                seterrMsgAlamat("Alamat tidak boleh kosong!")
            } else {
                seterrMsgAlamat("")
            }
        }

        if (name === "kelurahan") {
            if (formData.kelurahan === "") {
                seterrMsgKelurahan("NIK tidak boleh kosong!")
            } else {
                seterrMsgKelurahan("")
            }
        }

        if (name === "kecamatan") {
            if (formData.kecamatan !== "") {
                seterrMsgKecamatan("")
            } else {
                seterrMsgKecamatan("Kecamatan tidak boleh kosong!")
            }
        }

        if (name === "kabupaten") {
            if (formData.kabupaten !== "") {
                seterrMsgKabupaten("")
            } else {
                seterrMsgKabupaten("Kabupaten tidak boleh kosong!")
            }
        }

        if (name === "provinsi") {
            if (formData.provinsi !== "") {
                seterrMsgProvinsi("")
            } else {
                seterrMsgProvinsi("Provinsi tidak boleh kosong!")
            }
        }
    }

    const handleSubmit = e => {
        if (errMsgAlamat !== "" || errMsgKelurahan !== "" || errMsgKecamatan !== "" || errMsgKabupaten !== "" || errMsgProvinsi !== "") {
            alert("terdapat data yang tidak sesuai")
        } else if (formData.alamat === "" || formData.kelurahan === "" || formData.kecamatan === "" || formData.kabupaten === "" ||
        formData.provinsi === ""){
            alert("data ada yang masih kosong")
        } else {
            console.log(formData)
            nextStep()
        }
        e.preventDefault()
    }

    return (
        <div className="container mx-auto page-wrapper p-0">
            <div className='container page-data-pribadi' >
                <div className='container'>
                    <Stepper steps={[{ label: 'Data Pribadi' }, { label: 'Alamat' }, { label: 'Data Keluarga' }]}
                        connectorStateColors={true}
                        activeStep={3}></Stepper>
                </div>
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <Alamat
                        formData={formData}
                        errMsgAlamat={errMsgAlamat} 
                        errMsgKelurahan={errMsgKelurahan} 
                        errMsgKecamatan={errMsgKecamatan} 
                        errMsgKabupaten={errMsgKabupaten} 
                        errMsgProvinsi={errMsgProvinsi}
                        handleValidation={handleValidation}
                        handleInputData={handleInputData}/>
                        <div className='container'>
                            <div className='container mt-3 mb-2 p-0'>
                                <Button type='submit' className='btn-style'>Lanjut</Button>
                            </div>
                            <div className='container mt-2 mb-3 p-0'>
                                <Button className="btn-style-prev" onClick={prevStep} variant="outline-primary">Kembali</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DataAlamat
