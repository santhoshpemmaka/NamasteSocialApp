import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {
	getallusersRequest,
	unFollowUserToServer,
	followUserToServer,
} from "../../utils/server-request";
import {updateUser} from "../Auth/Auth";

const initialState = {
	allUsers: [],
	userStatus: "",
};

export const getallusers = createAsyncThunk(
	"user/getallusers",
	async (_, thunkAPI) => {
		try {
			const response = await getallusersRequest();
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const followUnFollowUser = createAsyncThunk(
	"user/followUnFollowUser",
	async (userData, thunkAPI) => {
		try {
			const userInfo = JSON.parse(localStorage.getItem("social-userSession"));
			const response = userData.isFollow
				? await unFollowUserToServer(userInfo.token, userData.userId)
				: await followUserToServer(userInfo.token, userData.userId);
			thunkAPI.dispatch(updateUser(response.data.user));
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: {
		[getallusers.pending]: (state) => {
			state.userStatus = "Pending";
		},
		[getallusers.fulfilled]: (state, action) => {
			state.userStatus = "fulfilled";
			state.allUsers = action.payload.users;
		},
		[getallusers.rejected]: (state) => {
			state.userStatus = "Error";
		},
		[followUnFollowUser.pending]: (state) => {
			state.userStatus = "Pending";
		},
		[followUnFollowUser.fulfilled]: (state, action) => {
			state.userStatus = "fulfilled";
			state.allUsers = [...state.allUsers].map((current_user) => {
				if (action.payload?.followUser?.username === current_user.username) {
					return action.payload.followUser;
				}
				return current_user;
			});
		},
		[followUnFollowUser.rejected]: (state) => {
			state.userStatus = "Pending";
		},
	},
});

export default userSlice.reducer;
