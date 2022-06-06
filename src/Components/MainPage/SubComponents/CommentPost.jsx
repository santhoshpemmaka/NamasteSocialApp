import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import "./CommentPost.scss";
const CommentPost = ({comment}) => {
	const {allUsers} = useSelector((store) => store.user);
	const [usercommentInfo, setusercommnentInfo] = useState([]);
	useEffect(() => {
		setusercommnentInfo(
			allUsers.find((user) => user.username === comment.username)
		);
	}, [comment]);
	return (
		<div className='user-comment-container'>
			<img
				src={usercommentInfo.profilePic}
				alt='user-comment-image'
				className='user-comment-image'
			/>
			<div className='user-comment-info'>
				<label className='user-comment-name'>{usercommentInfo.firstName}</label>
				<label className='user-comment-text'>{comment.text}</label>
			</div>
		</div>
	);
};

export default CommentPost;
