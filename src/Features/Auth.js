import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";
import {loginUserRequest, signUpRequest} from "../utils/server-request";
const {
	userName: userNameDetails,
	token: tokenDetails,
	email,
} = JSON.parse(localStorage?.getItem("userSession")) || {
	userName: "",
	token: "",
	email: "",
};

const initialState = {
	token: tokenDetails,
	userName: userNameDetails,
	email: email,
	lastName: "",
	authStatus: "",
	error: "",
};

export const loginUser = createAsyncThunk(
	"social-app-auth/loginUser",
	async (login, thunkAPI) => {
		try {
			const response = await loginUserRequest(login.userName, login.password);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const signUpUser = createAsyncThunk(
	"social-app-auth/signUpUser",
	async (signup, thunkAPI) => {
		try {
			const response = await signUpRequest(
				signup.emailName,
				signup.password,
				signup.firstName,
				signup.lastName
			);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const authSlice = createSlice({
	name: "social-app-auth",
	initialState,
	reducers: {},
	extraReducers: {
		[loginUser.pending]: (state) => {
			state.authStatus = "pending";
		},
		[loginUser.fulfilled]: (state, action) => {
			state.authStatus = "fulfilled";
			state.token = action.payload.encodedToken;
			state.userName = action.payload.foundUser.firstName;
			state.email = action.payload.foundUser.email;
			localStorage.setItem(
				"userSession",
				JSON.stringify({
					userName: state.userName,
					token: state.token,
					email: state.email,
				})
			);
		},
		[loginUser.rejected]: (state, action) => {
			state.authStatus = "Error";
			state.error = action.payload;
		},
		[signUpUser.pending]: (state) => {
			state.authStatus = "Pending";
		},
		[signUpUser.fulfilled]: (state, action) => {
			state.authStatus = "fulfilled";
			state.token = action.payload.encodedToken;
			state.userName = action.payload.createdUser.firstName;
			state.email = action.payload.createdUser.userName;
			localStorage.setItem(
				"userSesssion",
				JSON.stringify({
					userName: state.userName,
					token: state.token,
					email: state.email,
				})
			);
		},
		[signUpUser.rejected]: (state, action) => {
			state.authStatus = "Error";
			state.error = action.payload;
		},
	},
});

export default authSlice.reducer;
