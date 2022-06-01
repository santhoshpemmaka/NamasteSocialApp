import {Response} from "miragejs";
import {formatDate, requiresAuth} from "../utils/authUtils";
import {v4 as uuid} from "uuid";

/**
 * All the routes related to post comments are present here.
 * */

/**
 * This handler handles getting all comments for a particular post in the db.
 * send GET Request at /api/comments/:postId
 * */

export const getPostCommentsHandler = function (schema, request) {
	const postId = request.params.postId;
	try {
		const post = schema.posts.findBy({_id: postId}).attrs;
		return new Response(200, {}, {comments: post.comments});
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};

/**
 * This handler handles adding a comment to a particular post in the db.
 * send POST Request at /api/comments/add/:postId
 * */

export const addPostCommentHandler = function (schema, request) {
	const user = requiresAuth.call(this, request);
	try {
		if (!user) {
			return new Response(
				404,
				{},
				{
					errors: [
						"The username you entered is not Registered. Not Found error",
					],
				}
			);
		}
		const {postId} = request.params;
		const {commentData} = JSON.parse(request.requestBody);

		const comment = {
			_id: uuid(),
			text: commentData,
			username: user.username,
			votes: {upvotedBy: [], downvotedBy: []},
			createdAt: formatDate(),
			updatedAt: formatDate(),
		};
		const post = schema.posts.findBy({_id: postId}).attrs;
		post.comments.unshift(comment);
		this.db.posts.update({_id: postId}, post);
		return new Response(201, {}, {posts: this.db.posts});
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};
