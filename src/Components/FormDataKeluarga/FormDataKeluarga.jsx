import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import '../Button.css'
import '../DataDiriDanKeluarga.css'
import { MdDateRange } from "react-icons/md"
// import { Button } from 'react-bootstrap'

function FormDataKeluarga({
    formdataAnggota,
    setformdataAnggota,
    id,
    handleInputDataAnggota
}) {
    return (
        <div className='container'>
            <div className='form overflow-auto'>
                <div className="mb-2 ctr-input " >
                    <label className="form-label">No. KK *</label>
                    <input placeholder="Masukkan no. KK" name="nokk" type="number" value={formdataAnggota.nokk} onChange={(e) => { handleInputDataAnggota(id, e) }} className="form-control" />
                    <p hidden className="form-text text-danger">No. KK tidak boleh kosong!</p>
                </div>
                <div className="mb-2 ctr-input" >
                    <label className="form-label">NIK *</label>
                    <input placeholder="Masukkan NIK" name="nik" value={formdataAnggota.nik} onChange={(e) => { handleInputDataAnggota(id, e) }} type="number" className="form-control" />
                    <p hidden className="form-text text-danger">NIK tidak boleh kosong!</p>
                </div>
                <div className="mb-2 ctr-input" >
                    <label className="form-label">Nama Lengkap *</label>
                    <input placeholder="Masukkan nama lengkap" type="text" value={formdataAnggota.namalengkap} onChange={(e) => { handleInputDataAnggota(id, e) }} name="namalengkap" className="form-control" />
                    <p hidden className="form-text text-danger">Nama lengkap tidak boleh kosong!</p>
                </div>
                <div className="mb-2 ctr-input" >
                    <label className="col-form-label">Jenis Kelamin *</label>
                    <div className='d-flex'>
                        <div className="form-check form-check-inline me-5">
                            <input className="form-check-input" type="radio" name="jeniskelamin" value="Pria" checked={formdataAnggota.jeniskelamin === "Pria"} onChange={(e) => { handleInputDataAnggota(id, e) }} />
                            <label className="form-check-label">Pria</label>
                        </div>
                        <div className="form-check form-check-inline ms-5">
                            <input className="form-check-input" type="radio" name="jeniskelamin" value="Wanita" checked={formdataAnggota.jeniskelamin === "Wanita"} onChange={(e) => { handleInputDataAnggota(id, e) }} />
                            <label className="form-check-label">Wanita</label>
                        </div>
                    </div>
                    <p hidden className='form-text text-danger mb-0'>Pilih salah satu!</p>
                </div>
                <div className="mb-2 ctr-input date-input">
                    <label className="form-label">Tanggal Lahir *</label>
                    {/* <MdDateRange/> */}
                    <DatePicker name="tglLahir" selected={formdataAnggota.tglLahir} onChange={
                        (date) => {
                            setformdataAnggota({ ...formdataAnggota, 'tglLahir': date })
                            console.log(date)
                        }
                    }
                    // onBlur={handleValidation} 
                    />
                    <MdDateRange className="icon-date" />
                    <p hidden className="form-text text-danger">Tanggal Lahir tidak boleh kosong!</p>
                </div>
                <div className="mb-2 ctr-input" >
                    <label className="form-label">Status Hubungan dalam Kartu Keluarga *</label>
                    <select className="form-select" style={{ width: '375px', height: '45px' }} value={formdataAnggota.statusHubungan} name="statusHubungan" onChange={(e) => { handleInputDataAnggota(id, e) }}>
                        <option selected disabled>Hubungan keluarga</option>
                        <option value="anak">Anak</option>
                        <option value="suami">Suami</option>
                        <option value="istri">Istri</option>
                        <option value="mertua">Mertua</option>
                    </select>
                    <p hidden className="form-text text-danger">Pilih salah satu!</p>
                </div>
                <div className="mb-4 ctr-input" >
                    <label className="form-label">Status Perkawinan *</label>
                    <select className="form-select" style={{ width: '375px', height: '45px' }} value={formdataAnggota.statusPerkawinan} name="statusPerkawinan" onChange={(e) => { handleInputDataAnggota(id, e) }}>
                        <option selected disabled>Status perkawinan</option>
                        <option value="belumKawin">Belum Kawin</option>
                        <option value="kawin">Kawin</option>
                        <option value="cerai">Cerai</option>
                        <option value="ceraiMati">Cerai Mati</option>
                    </select>
                    <p hidden className="form-text text-danger">Pilih salah satu!</p>
                </div>
            </div>


        </div>
    )
}

export default FormDataKeluarga
