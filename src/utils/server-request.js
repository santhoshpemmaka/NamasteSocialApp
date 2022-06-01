import axios from "axios";

export const loginUserRequest = (email, password) => {
	return axios.post("api/auth/login", {
		username: email,
		password: password,
	});
};

export const signUpRequest = (email, password, firstName, lastName) => {
	return axios.post("api/auth/signup", {
		username: email,
		password: password,
		firstName: firstName,
		lastName: lastName,
	});
};
