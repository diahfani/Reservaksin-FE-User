import {useState} from 'react'
import { data } from '../Data'

function Validation() {
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
            if (data.nokk === 0 || data.nokk === "") {
                seterrMsgNoKK("No. KK tidak boleh kosong!")
            } else {
                seterrMsgNoKK("")
            }
        }

        if (name === "nik") {
            if (data.nik !== 0 || data.nik !== "") {
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
            if (data.namalengkap !== "") {
                seterrMsgNama("")
            } else {
                seterrMsgNama("Nama tidak boleh kosong!")
            }
        }

        if (name === "jeniskelamin") {
            if (data.jeniskelamin !== "") {
                seterrMsgJeniKelamin("")
            } else {
                seterrMsgJeniKelamin("Pilih salah satu!")
            }
        }

        if (name === "statusHubungan") {
            if (data.statusHubungan !== "") {
                seterrMsgStatusHubungan("")
            } else {
                seterrMsgStatusHubungan("Pilih salah satu!")
            }
        }

        if (name === "statusPerkawinan") {
            if (data.statusPerkawinan !== "") {
                seterrMsgStatusPerkawinan("")
            } else {
                seterrMsgStatusPerkawinan("Pilih salah satu!")
            }
        }

        if (name === "tglLahir") {
            if (data.tglLahir !== "") {
                seterrMsgTglLahir("")
            } else {
                seterrMsgTglLahir("Tanggal lahir harus diisi!")
            }
        }
    }
}

export default Validation
