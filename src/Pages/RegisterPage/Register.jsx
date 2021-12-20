import React, { useState } from 'react'
import RegisterPage from './RegisterPage'
import DataPribadi from './DataPribadi'
import DataKeluarga from './DataKeluarga'
import DataAlamat from './DataAlamat'
import Submit from './Submit'
import 'index.css'



function Register() {
    const [step, setstep] = useState(1)

    // const dataAnggota = ({
    //     id: uuidv4(),
    //     nokk: 0,
    //     nik: 0,
    //     namalengkap: "",
    //     jeniskelamin: "",
    //     // tglLahir: (new Date()),
    //     tglLahir: "",
    //     statusHubungan: "",
    //     statusPerkawinan: "",
    // })

    const [formdata, setFormData] = useState({
        email: "",
        notelp: 0,
        password: "",
        passAgain: "",
        nokk: 0,
        nik: 0,
        namalengkap: "",
        jeniskelamin: "",
        tglLahir: (new Date()),
        // tglLahir: "",
        statusHubungan: "",
        statusPerkawinan: "",
        alamat: "",
        kelurahan: "",
        kecamatan: "",
        kabupaten: "",
        provinsi: "",
    })

    const [listAnggota, setListAnggota] = useState([])

    console.log(listAnggota)

    const nextStep = () => {
        setstep(step + 1)
    }

    const prevStep = () => {
        setstep(step - 1)
    }

    const handleInputData = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    // const handleInputDataAnggota = (e) => {
    //     setformdataAnggota({
    //         ...formdataAnggota,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleInputDataAnggota = (id, e) => {
    //     setformdataAnggota(
    //         formdataAnggota.map((item, index) => {
    //             if (item.id === id) {
    //                 item[index] = { ...item, [e.target.name]: e.target.value };
    //                 return item[index];
    //             }
    //             return item;
    //         })
    //     );
    // };

    // const handleDeleteAnggotaKeluarga = (id) => {
    //     const filt = formdataAnggota.filter((item) => item.id !== id)
    //     setformdataAnggota(filt)
    // }

    // const handleInputDataTglLahir = (date) => {
    //     setFormData(
    //         ...formdata,
    //         formdata({tglLahir: date})
    //     )
    // }

    console.log(formdata)
    // console.log(formdataAnggota)

    switch (step) {
        case 1:
            return (
                <RegisterPage nextStep={nextStep}
                    handleInputData={handleInputData}
                    formData={formdata} />
            )
        case 2:
            return (
                <DataPribadi
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputData={handleInputData}
                    // handleInputDataTglLahir={handleInputDataTglLahir}
                    formData={formdata}
                    setFormData={setFormData} />
            )
        case 3:
            return (
                <DataAlamat
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleInputData={handleInputData}
                    formData={formdata} />
            )
        case 4:
            return (
                <DataKeluarga
                    nextStep={nextStep}
                    prevStep={prevStep}
                    // listAnggota={dataAnggota}
                    setListAnggota={setListAnggota}
                    // handleInputDataAnggota={handleInputDataAnggota}
                    // formdataAnggota={formdataAnggota}
                    // setFormData={setFormData} 
                    // handleDeleteAnggotaKeluarga={handleDeleteAnggotaKeluarga}
                    // setformdataAnggota={setformdataAnggota} 
                    />
            )
        case 5:
            return (
                <Submit
                    nextStep={nextStep}
                    prevStep={prevStep}
                    // handleInputData={handleInputData}
                    formData={formdata}
                    // formdataAnggota={formdataAnggota} 
                    />
            )
        default:
            <div className='container mx-auto p-0 page-wrapper'></div>

    }
    // return (
    //     <div className='container mx-auto p-0 page-wrapper'>

    //     </div>
    // )
}

export default Register
