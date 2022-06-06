import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {followUnFollowUser} from "../../Features/User/User";

import "./Follows.scss";

const Follows = () => {
	const {allUsers} = useSelector((store) => store.user);
	const {user} = useSelector((store) => store.auth);
	const dispacth = useDispatch();
	const [usersInfo, setuserInfo] = useState();
	const [searchName, setsearchName] = useState("");
	const [searchData, setsearchData] = useState([]);
	useEffect(() => {
		setuserInfo(
			allUsers
				?.filter((curr_user) => curr_user.firstName !== user.firstName)
				.filter(
					(element) =>
						!user.following?.find((element2) => element2._id === element._id)
				)
				.slice(0, 4)
		);
	}, [allUsers, user]);

	useEffect(() => {
		if (searchName.trim().length > 0) {
			setsearchData((prev) =>
				allUsers?.filter((user) =>
					user.firstName.toLowerCase().includes(searchName.toLocaleLowerCase())
				)
			);
		} else {
			setsearchData([]);
		}
	}, [searchName]);

	const searchNameHandler = (e) => {
		setsearchName((prev) => e.target.value);
	};
	return (
		<div className='follow-container'>
			<div className='follow-serach'>
				<i className='fas fa-search search-icon'></i>
				<input
					type='text'
					className='search-text'
					placeholder='Serach'
					onChange={(e) => searchNameHandler(e)}
					value={searchName}></input>
				<div className='display-search-names'>
					{searchData &&
						searchData.length > 0 &&
						searchData.map((resultData) => (
							<li key={resultData._id} className='search-name'>
								<img src={resultData.profilePic} alt='profile-pic' />
								<label>{resultData.firstName}</label>
							</li>
						))}
				</div>
			</div>
			<div className='follow-component'>
				<h2 className='following-component-heading'>Who to follow</h2>
				{usersInfo &&
					usersInfo.map((user) => (
						<div key={user._id} className='following-component'>
							<div className='following-image-reponse'>
								<img src={user.profilePic} alt='user-image' />
							</div>
							<div className='following-detail'>
								<h2 className='following-first-name'>{user.firstName}</h2>
								<h2 className='following-second-name'>@{user.userHandler}</h2>
							</div>
							<button
								className='following-button'
								onClick={() =>
									dispacth(
										followUnFollowUser({
											userId: user._id,
											dispacth: dispacth,
											isFollow: false,
										})
									)
								}>
								+ Follow
							</button>
						</div>
					))}
			</div>
		</div>
	);
};

export default Follows;
