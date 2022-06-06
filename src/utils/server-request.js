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

// get all users request

export const getallusersRequest = () => {
	return axios.get("/api/users");
};

// get all posts request

export const getAllPostsFromServer = () => {
	return axios.get("/api/posts");
};

// add post to the server

export const addPostToServe = (postData, token) => {
	return axios.post(
		"/api/posts",
		{postData},
		{headers: {authorization: token}}
	);
};

// add like to the posts

export const addlikePostServer = (postId, token) => {
	return axios.post(
		`/api/posts/like/${postId}`,
		{},
		{headers: {authorization: token}}
	);
};

// add dislike to the posts

export const adddislikePostServer = (postId, token) => {
	return axios.post(
		`/api/posts/dislike/${postId}`,
		{},
		{headers: {authorization: token}}
	);
};

// add bookmark to the posts

export const addBookmarkPostServer = (postId, token) => {
	return axios.post(
		`/api/users/bookmark/${postId}`,
		{},
		{
			headers: {
				authorization: token,
			},
		}
	);
};

// remove bookmark to the posts

export const removeBookmarkPostServer = (postId, token) => {
	return axios.post(
		`/api/users/remove-bookmark/${postId}`,
		{},
		{
			headers: {
				authorization: token,
			},
		}
	);
};

// add comment to the post

export const addCommentToServer = (postId, commentText, token) => {
	return axios.post(
		`/api/comments/add/${postId}`,
		{
			commentData: commentText,
		},
		{
			headers: {
				authorization: token,
			},
		}
	);
};

// follow user

export const followUserToServer = (token, userId) => {
	return axios.post(
		`/api/users/follow/${userId}`,
		{},
		{
			headers: {
				authorization: token,
			},
		}
	);
};

// unfollow user

export const unFollowUserToServer = (postId, token) => {
	return axios.post(
		`/api/users/unfollow/${postId}`,
		{},
		{
			headers: {
				authorization: token,
			},
		}
	);
};

// update user

export const updateUserServer = (token, userData) => {
	return axios.post(
		"/api/users/edit",
		{
			userData,
		},
		{
			headers: {
				authorization: token,
			},
		}
	);
};

// delete post user

export const deletePostServer = (postId, token) => {
	return axios.delete(`/api/posts/${postId}`, {
		headers: {
			authorization: token,
		},
	});
};

// edit post user

export const editPostServer = (postData, token) => {
	return axios.post(
		`/api/posts/edit/${postData._id}`,
		{
			postData,
		},
		{
			headers: {
				authorization: token,
			},
		}
	);
};
