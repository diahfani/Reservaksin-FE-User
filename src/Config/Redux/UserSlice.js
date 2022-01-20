import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        nik: "",
        nohp: "",
        fullname: "",
        nokk: "",
        dob: "",
        relationship: "",
        gender: "",
        status: "",
        role: "",
        alamat: "",
        provinsi: "",
        kota: "",
        kecamatan: "",
        kelurahan: "",
        // current_Address: {
        // 	alamat: "",
        // 	provinsi: "",
        // 	kota: "",
        // 	kecamatan: "",
        // 	kelurahan: ""
        // }
    },
    reducers: {
        user: (state, action) => {
            state.email = action.payload.email;
            state.nik = action.payload.nik;
            state.nohp = action.payload.nohp;
            state.fullname = action.payload.fullname;
            state.nokk = action.payload.nokk;
            state.dob = action.payload.dob;
            state.relationship = action.payload.relationship;
            state.gender = action.payload.gender;
            state.status = action.payload.status;
            state.role = action.payload.role;
            // state.current_Address = action.payload.current_Address
            state.alamat = action.payload.alamat;
            state.provinsi = action.payload.provinsi;
            state.kota = action.payload.kota;
            state.kecamatan = action.payload.kecamatan;
            state.kelurahan = action.payload.kelurahan;
        },
        clearUser: (state) => {
            state.email = "";
            state.nik = "";
            state.nohp = "";
            state.fullname = "";
            state.nokk = "";
            state.dob = "";
            state.relationship = "";
            state.gender = "";
            state.status = "";
            state.role = "";
        },
    },
});

export const { user, clearUser } = userSlice.actions;
export default userSlice.reducer;
