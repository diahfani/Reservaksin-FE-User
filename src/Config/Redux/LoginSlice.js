import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
	name: "auth",
	initialState: {
		email: "",
		nik:"",
		token: "",
		login: false,
		id: ""
	},
	reducers: {
		loginByEmail: (state, action) => {
			state.email = action.payload.email;
			state.login = action.payload.login;
			state.token = action.payload.token
			state.id = action.payload.id
		},
		loginByNIK: (state, action) => {
			state.nik = action.payload.nik;
			state.login = action.payload.login;
			state.token = action.payload.token
			state.id = action.payload.id
		},
		logout: (state) => {
			state.email = "";
			state.nik ="";
			state.login = false;
		},
	},
});

export const { loginByEmail, loginByNIK, logout } = loginSlice.actions;
export default loginSlice.reducer;