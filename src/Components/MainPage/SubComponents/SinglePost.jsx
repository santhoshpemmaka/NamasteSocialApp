import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./SinglePost.scss";
import CommentPost from "./CommentPost";
import {
	likeAnddislikePost,
	addAndremovebookmarkPost,
	addCommentToPost,
	deleteUserPost,
	edituserPost,
} from "../../../Features/Post/Post";

const SinglePost = ({post}) => {
	const {allUsers} = useSelector((store) => store.user);
	const {user} = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	const [userInfo, setuserInfo] = useState([]);
	const [commentUserInfo, setcommentUserInfo] = useState([]);
	const [commentText, setcommentText] = useState("");
	const [showeditOption, setshoweditOption] = useState(false);
	const [showModal, setshowModal] = useState(false);
	const [editContext, seteditContext] = useState(post.content);
	const [showAllcomments, setshowAllcomments] = useState(false);

	useEffect(() => {
		setuserInfo(allUsers.find((user) => user.username === post.username));
	}, [post, allUsers]);

	useEffect(() => {
		setcommentUserInfo(
			allUsers.find((commentUser) => commentUser.username === user.username)
		);
	}, [user]);

	const isLiked = post?.likes?.likedBy?.some(
		(like) => like.username === user.username
	);

	const isBookmarked = post?.bookmark?.some(
		(mark) => mark.username === user.username
	);

	const likePostHandler = () => {
		dispatch(
			likeAnddislikePost({postId: post._id, isLiked: isLiked ? false : true})
		);
	};

	const bookmarkPostHandler = () => {
		dispatch(
			addAndremovebookmarkPost({
				postId: post._id,
				isBookmarked: isBookmarked ? false : true,
			})
		);
	};

	const ellipsisHandler = () => {
		setshoweditOption((prev) => !prev);
	};

	const commentHandler = () => {
		dispatch(
			addCommentToPost({
				postId: post._id,
				text: commentText,
			})
		);
		setcommentText("");
	};

	const editHandler = () => {
		setshowModal((prev) => !prev);
		ellipsisHandler();
	};

	const deleteHandler = () => {
		dispatch(deleteUserPost(post._id));
		ellipsisHandler();
	};

	const saveHandler = () => {
		editHandler();
		ellipsisHandler();
		dispatch(
			edituserPost({
				...post,
				content: editContext,
			})
		);
	};

	return (
		<div className='single-post-container'>
			<div className='single-post-header'>
				<div className='single-post-left'>
					<img
						src={userInfo.profilePic}
						alt='user-image'
						className='user-image-response'
					/>
					<div className='user-names-display'>
						<h2 className='user-first-name'>{userInfo.firstName}</h2>
						<h2 className='user-last-name'>@{userInfo.userHandler}</h2>
					</div>
				</div>
				{userInfo.username === commentUserInfo.username && (
					<i
						className='fas fa-ellipsis-v singlepost-ellipsis-icon'
						onClick={() => ellipsisHandler()}></i>
				)}
				{showeditOption && (
					<div className='edit-option-container'>
						<div
							className='edit-option-component'
							onClick={() => editHandler()}>
							<i className='far fa-edit'></i>
							<label>Edit</label>
						</div>
						<div
							className='edit-option-component'
							onClick={() => deleteHandler()}>
							<i className='far fa-trash-alt'></i>
							<label>Delete</label>
						</div>
					</div>
				)}
				{showModal && (
					<div className='modal-open'>
						<div className='modal-compoment'>
							<div className='modal-icons'>
								<i
									className='fas fa-angle-left'
									onClick={() => {
										editHandler();
										ellipsisHandler();
									}}></i>
								<i className='fas fa-user-circle modal-icon-user'></i>
							</div>
							<textarea
								type='text'
								value={editContext}
								className='modal-textarea'
								onChange={(e) => seteditContext(e.target.value)}
							/>
							<button className='modal-button' onClick={() => saveHandler()}>
								Save{" "}
							</button>
						</div>
					</div>
				)}
			</div>
			<div className='post-content-component'>
				<h2 className='post-content-display'>{post.content}</h2>
			</div>
			<div className='single-post-actions-icons'>
				<div className='single-post-icon' onClick={() => likePostHandler()}>
					{isLiked ? (
						<>
							<i className='fas fa-heart heart-active'></i>
							<span>
								{`${post?.likes?.likeCount}`}{" "}
								{post?.likes?.likeCount === 1 ? "Like" : "Likes"}
							</span>
						</>
					) : (
						<>
							<i className='far fa-heart'></i>
							<span>Like</span>
						</>
					)}
				</div>
				<div className='single-post-icon' onClick={() => bookmarkPostHandler()}>
					{isBookmarked ? (
						<>
							<i className='fas fa-bookmark'></i>
							<span>Bookmark</span>
						</>
					) : (
						<>
							<i className='far fa-bookmark'></i>
							<span>Bookmark</span>
						</>
					)}
				</div>
			</div>
			<div className='user-comment-container'>
				<img
					src={commentUserInfo.profilePic}
					alt='user-image'
					className='user-comment-image-response'
				/>
				<div className='user-comment-component'>
					<input
						type='text'
						placeholder='Write your comment'
						value={commentText}
						onChange={(e) => setcommentText(e.target.value)}
					/>
					<button
						disabled={commentText.trim().length < 1 ? true : false}
						style={{
							display: `${commentText.trim().length < 1 ? "none" : ""}`,
						}}
						onClick={() => commentHandler()}>
						POST
					</button>
				</div>
			</div>
			{showAllcomments === true && (
				<label
					className='show-comments'
					onClick={() => setshowAllcomments((prev) => !prev)}>
					Hide all comments
				</label>
			)}
			{post && post.comments && showAllcomments
				? post?.comments.map((comment) => (
						<CommentPost key={comment._id} comment={comment} />
				  ))
				: post?.comments
						.slice(0, 2)
						.map((comment) => (
							<CommentPost key={comment._id} comment={comment} />
						))}
			{showAllcomments === false && post.comments.length > 2 && (
				<label
					className='show-comments'
					onClick={() => setshowAllcomments((prev) => !prev)}>
					Show all comments
				</label>
			)}
		</div>
	);
};

export default SinglePost;
