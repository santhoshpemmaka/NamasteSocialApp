import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./MainPage.scss";
import SinglePost from "./SubComponents/SinglePost";
import {adduserPost} from "../../Features/Post/Post";

const MainPage = () => {
	const {
		allPosts: {posts},
	} = useSelector((store) => store.post);
	const dispatch = useDispatch();
	const [inputText, setinputText] = useState("");
	const [allPosts, setallPosts] = useState([]);
	const {
		user: {profilePic},
	} = JSON.parse(localStorage?.getItem("social-userSession"));
	const postHandler = () => {
		dispatch(adduserPost({content: inputText}));
		setinputText("");
	};
	useEffect(() => {
		if (posts) {
			setallPosts(
				[...posts]?.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
				)
			);
		}
	}, [posts]);
	return (
		<div className='mainpage-container'>
			<label className='mainpage-heading'>Namaste</label>
			<div className='user-input-component'>
				<img
					src={profilePic}
					alt='user-image'
					className='user-image-response user-input-icon'
				/>
				<div className='user-input'>
					<textarea
						type='text'
						placeholder="What's happening?"
						className='user-input-text'
						value={inputText}
						onChange={(e) => setinputText(e.target.value)}
					/>
					<button className='user-input-btn' onClick={() => postHandler()}>
						Post
					</button>
				</div>
			</div>
			{allPosts?.map((post) => (
				<SinglePost key={post._id} post={post} />
			))}
		</div>
	);
};

export default MainPage;
