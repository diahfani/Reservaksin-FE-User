import { v4 as uuidv4 } from "uuid";

export const data = {
    email: "",
    no_hp: 0,
    password: "",
    passAgain: "",
    nokk: 0,
    nik: 0,
    namalengkap: "",
    jeniskelamin: "",
    tglLahir: (new Date()),
    statusHubungan: "",
    statusPerkawinan: "",
    alamat: "",
    kelurahan: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
}

export const dataAnggota = ({
    id: uuidv4(),
    nokk: 0,
    nik: 0,
    namalengkap: "",
    jeniskelamin: "",
    tglLahir: "",
    // tglLahir: (new Date()),
    statusHubungan: "",
    statusPerkawinan: "",
})
