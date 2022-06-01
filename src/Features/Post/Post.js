import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
	getAllPostsFromServer,
	addPostToServe,
	adddislikePostServer,
	addlikePostServer,
	addBookmarkPostServer,
	removeBookmarkPostServer,
	addCommentToServer,
	deletePostServer,
	editPostServer,
} from "../../utils/server-request";
const initialState = {
	allPosts: [],
	userPosts: [],
	postStatus: "",
};

export const getAllPosts = createAsyncThunk(
	"post/getAllPosts",
	async (_, thunkAPI) => {
		try {
			const response = await getAllPostsFromServer();
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const adduserPost = createAsyncThunk(
	"post/adduserPost",
	async (postData, thunkAPI) => {
		try {
			const userInfo = JSON.parse(localStorage.getItem("social-userSession"));
			const response = await addPostToServe(postData, userInfo.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const likeAnddislikePost = createAsyncThunk(
	"post/likeAnddislikePost",
	async (postLikeData, thunkAPI) => {
		try {
			const userInfo = JSON.parse(localStorage.getItem("social-userSession"));
			const response = postLikeData.isLiked
				? await addlikePostServer(postLikeData.postId, userInfo.token)
				: await adddislikePostServer(postLikeData.postId, userInfo.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const addAndremovebookmarkPost = createAsyncThunk(
	"post/addAndremovebookmarkPost",
	async (bookmarkData, thunkAPI) => {
		try {
			const userInfo = JSON.parse(localStorage.getItem("social-userSession"));
			const response = bookmarkData.isBookmarked
				? await addBookmarkPostServer(bookmarkData.postId, userInfo.token)
				: await removeBookmarkPostServer(bookmarkData.postId, userInfo.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const deleteUserPost = createAsyncThunk(
	"post/deleteuserPost",
	async (postId, thunkAPI) => {
		try {
			const userInfo = JSON.parse(localStorage.getItem("social-userSession"));
			const response = await deletePostServer(postId, userInfo.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const edituserPost = createAsyncThunk(
	"/post/edituserPost",
	async (editPost, thunkAPI) => {
		try {
			const userInfo = JSON.parse(localStorage.getItem("social-userSession"));
			const response = await editPostServer(editPost, userInfo.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const addCommentToPost = createAsyncThunk(
	"/post/addCommentToPost",
	async (commnetData, thunkAPI) => {
		try {
			const userInfo = JSON.parse(localStorage.getItem("social-userSession"));
			const response = await addCommentToServer(
				commnetData.postId,
				commnetData.text,
				userInfo.token
			);
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

const PostSlice = createSlice({
	name: "post",
	initialState,
	reducers: {},
	extraReducers: {
		[getAllPosts.pending]: (state) => {
			state.postStatus = "Pending";
		},
		[getAllPosts.fulfilled]: (state, action) => {
			state.postStatus = "fulfilled";
			state.allPosts = action.payload;
		},
		[getAllPosts.rejected]: (state) => {
			state.postStatus = "Error";
		},
		[adduserPost.pending]: (state) => {
			state.postStatus = "Pending";
		},
		[adduserPost.fulfilled]: (state, action) => {
			state.postStatus = "fulfilled";
			state.allPosts = action.payload;
		},
		[adduserPost.rejected]: (state) => {
			state.postStatus = "Error";
		},
		[likeAnddislikePost.pending]: (state) => {
			state.postStatus = "Pending";
		},
		[likeAnddislikePost.fulfilled]: (state, action) => {
			state.postStatus = "fulfilled";
			state.allPosts = action.payload;
		},
		[likeAnddislikePost.rejected]: (state) => {
			state.postStatus = "Error";
		},
		[addAndremovebookmarkPost.pending]: (state) => {
			state.postStatus = "Pending";
		},
		[addAndremovebookmarkPost.fulfilled]: (state, action) => {
			state.postStatus = "fulfilled";
			state.allPosts = action.payload;
		},
		[addAndremovebookmarkPost.rejected]: (state) => {
			state.postStatus = "Error";
		},
		[addCommentToPost.pending]: (state) => {
			state.postStatus = "Pending";
		},
		[addCommentToPost.fulfilled]: (state, action) => {
			state.postStatus = "fulfilled";
			state.allPosts = action.payload;
		},
		[addCommentToPost.rejected]: (state) => {
			state.postStatus = "Error";
		},
		[deleteUserPost.pending]: (state) => {
			state.postStatus = "Pending";
		},
		[deleteUserPost.fulfilled]: (state, action) => {
			state.postStatus = "fulfilled";
			state.allPosts = action.payload;
		},
		[deleteUserPost.rejected]: (state) => {
			state.postStatus = "Error";
		},
		[edituserPost.pending]: (state) => {
			state.postStatus = "Pending";
		},
		[edituserPost.fulfilled]: (state, action) => {
			state.postStatus = "fulfilled";
			state.allPosts = action.payload;
		},
		[edituserPost.rejected]: (state) => {
			state.postStatus = "Error";
		},
	},
});

export default PostSlice.reducer;
