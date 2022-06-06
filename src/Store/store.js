import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "../Features/Auth/Auth";
import userReducer from "../Features/User/User";
import PostReducer from "../Features/Post/Post";

export const store = configureStore({
	reducer: {
		auth: AuthReducer,
		user: userReducer,
		post: PostReducer,
	},
});
