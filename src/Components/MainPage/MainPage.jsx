import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./MainPage.scss";
import SinglePost from "./SubComponents/SinglePost";
import {adduserPost} from "../../Features/Post/Post";

const MainPage = () => {
	const {allPosts} = useSelector((store) => store.post);
	const dispatch = useDispatch();
	const [inputText, setinputText] = useState("");

	const postHandler = () => {
		dispatch(adduserPost({content: inputText}));
		setinputText("");
	};
	return (
		<div className='mainpage-container'>
			<label className='mainpage-heading'>Namaste</label>
			<div className='user-input-component'>
				<div className='user-input-icon'>
					<i className='fas fa-user-circle'></i>
				</div>
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
			{allPosts &&
				allPosts.posts &&
				allPosts.posts.map((post) => <SinglePost key={post._id} post={post} />)}
		</div>
	);
};

export default MainPage;
