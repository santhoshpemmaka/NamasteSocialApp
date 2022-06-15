import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SinglePost from "../MainPage/SubComponents/SinglePost";
import "./ProfileComponent.scss";
import {updateUser} from "../../Features/Auth/Auth";

const ProfileComponent = () => {
	const {user} = useSelector((store) => store.auth);
	const {allPosts} = useSelector((store) => store.post);
	const dispatch = useDispatch();
	const [userPosts, setuserPosts] = useState([]);
	const [showEditoption, setshowEditoption] = useState(false);
	const [userFrom, setuserFrom] = useState({});

	useEffect(() => {
		setuserFrom(user);
	}, [user]);

	useEffect(() => {
		setuserPosts(
			allPosts?.posts?.filter((post) => post.username === user.username)
		);
	}, [allPosts]);

	const editHandler = () => {
		setshowEditoption((prev) => !prev);
	};

	const updateHandler = () => {
		dispatch(updateUser(userFrom));
		editHandler();
	};
	console.log(userFrom);
	return (
		<div className='profile-component'>
			<label className='profile-page-heading'>Namaste</label>
			<div className='user-profile-component'>
				<img
					className='user-profile-image'
					src={user.profilePic}
					alt='profile-image'
				/>
				<div className='user-profile-info'>
					<div className='user-profile-header'>
						<div className='user-profile-heading'>
							<h2>{user.firstName}</h2>
							<h4>@{user.lastName}</h4>
						</div>
						<button className='user-profile-btn' onClick={() => editHandler()}>
							Edit
						</button>
						{showEditoption && (
							<div className='profile-edit-open'>
								<div className='profile-edit-componet'>
									<i
										className='fas fa-angle-left left-arrow-icon'
										onClick={() => editHandler()}></i>
									<div className='profile-edit-image'>
										<h3>Avatar</h3>
										<img src={user.profilePic} />
									</div>
									<div className='profile-edit-lastname'>
										<h3>FirstName</h3>
										<input
											type='text'
											value={userFrom?.firstName}
											onChange={(e) =>
												setuserFrom({...userFrom, firstName: e.target.value})
											}
										/>
									</div>
									<div className='profile-edit-bio'>
										<h3>Bio</h3>
										<textarea
											type='text'
											value={userFrom?.bio}
											onChange={(e) =>
												setuserFrom({...userFrom, bio: e.target.value})
											}
										/>
									</div>
									<button
										className='profile-update-btn'
										onClick={() => updateHandler()}>
										Update
									</button>
								</div>
							</div>
						)}
					</div>
					<label className='user-profile-bio'>{user.bio}</label>
					<div className='user-profile-followers'>
						<label>{userPosts?.length} Posts</label>
						<label>{user?.followers?.length} Followers</label>
						<label>{user?.following?.length} Following</label>
					</div>
				</div>
			</div>
			<div>
				{userPosts && userPosts?.length > 0 ? (
					userPosts?.map((post) => <SinglePost key={post._id} post={post} />)
				) : (
					<div className='no-user-posts'>
						<p>No User Posts Yet!</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProfileComponent;
