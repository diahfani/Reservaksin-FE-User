import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
	name: "auth",
	initialState: {
		email_or_nik: "",
		token: "",
		login: false,
		id: "",
	},
	reducers: {
		login: (state, action) => {
			state.email_or_nik = action.payload.email_or_nik;
			state.login = action.payload.login;
			state.token = action.payload.token
			state.id = action.payload.id
		},
		logout: (state) => {
			state.email_or_nik = "";
			state.id = ""
			state.login = false;
			state.token = ""
		},
	},
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
