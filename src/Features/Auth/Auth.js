import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {
	loginUserRequest,
	signUpRequest,
	updateUserServer,
} from "../../utils/server-request";
const {
	user: userNameDetails,
	token: tokenDetails,
	email,
} = JSON.parse(localStorage?.getItem("social-userSession")) || {
	user: "",
	token: "",
	email: "",
};

const initialState = {
	token: tokenDetails,
	user: userNameDetails,
	email: email,
	lastName: "",
	authStatus: "",
	error: "",
};

export const loginUser = createAsyncThunk(
	"social-app-auth/loginUser",
	async (login, thunkAPI) => {
		try {
			const response = await loginUserRequest(login.username, login.password);
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

export const updateUser = createAsyncThunk(
	"/social-app-auth/updateUser",
	async (userData, thunkAPI) => {
		try {
			const userInfo = JSON.parse(localStorage.getItem("social-userSession"));
			const response = await updateUserServer(userInfo.token, userData);
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

const authSlice = createSlice({
	name: "social-app-auth",
	initialState,
	reducers: {
		logoutUser: (state) => {
			localStorage?.removeItem("social-userSession");
			state.token = "";
			state.user = "";
		},
	},
	extraReducers: {
		[loginUser.pending]: (state) => {
			state.authStatus = "pending";
		},
		[loginUser.fulfilled]: (state, action) => {
			state.authStatus = "fulfilled";
			state.token = action.payload.encodedToken;
			state.user = action.payload.foundUser;
			state.email = action.payload.foundUser.email;
			localStorage.setItem(
				"social-userSession",
				JSON.stringify({
					user: state.user,
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
			state.user = action.payload.createdUser;
			state.email = action.payload.createdUser.userName;
			localStorage.setItem(
				"social-userSession",
				JSON.stringify({
					user: state.user,
					token: state.token,
					email: state.email,
				})
			);
		},
		[signUpUser.rejected]: (state, action) => {
			state.authStatus = "Error";
			state.error = action.payload;
		},
		[updateUser.pending]: (state) => {
			state.authStatus = "Pending";
		},
		[updateUser.fulfilled]: (state, action) => {
			state.authStatus = "fulfilled";
			state.user = action.payload.user;
		},
		[updateUser.rejected]: (state) => {
			state.authStatus = "Error";
		},
	},
});

export const {logoutUser} = authSlice.actions;

export default authSlice.reducer;
