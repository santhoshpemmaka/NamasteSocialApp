import React from "react";
import Navbar from "../Navbar/Navbar";
import Follows from "../Follows/Follows";
import "./ProfileContainer.scss";
import ProfileComponent from "./ProfileComponent";
import {Link} from "react-router-dom";
import {logoutUser} from "../../Features/Auth/Auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

const ProfileContainer = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const logoutHandler = () => {
		dispatch(logoutUser());
		navigation("/");
	};
	return (
		<div className='profile-container'>
			<Navbar />
			<ProfileComponent />
			<Follows />
			<div className='shown-only-mobile'>
				<Link to='/home' className='mobile-page-icon'>
					<i className='fas fa-home'></i>
				</Link>
				<Link to='/explore' className='mobile-page-icon'>
					<i class='fas fa-compass'></i>
				</Link>
				<Link to='/bookmark' className='mobile-page-icon'>
					<i class='fas fa-bookmark'></i>
				</Link>
				<Link to='/profile' className='mobile-page-icon'>
					<i class='fas fa-user-circle'></i>
				</Link>
				<label className='mobile-page-icon' onClick={() => logoutHandler()}>
					<i class='fas fa-sign-out-alt'></i>
				</label>
			</div>
		</div>
	);
};

export default ProfileContainer;
