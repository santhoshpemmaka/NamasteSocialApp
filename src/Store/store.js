import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "../Features/Auth";

export const store = configureStore({
	reducer: {
		auth: AuthReducer,
	},
});
