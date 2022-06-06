import React from "react";
import Navbar from "../Navbar/Navbar";
import MainPage from "../MainPage/MainPage";
import Follows from "../Follows/Follows";
import "./MainContainer.scss";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../Features/Auth/Auth";

const MainContainer = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const logoutHandler = () => {
		dispatch(logoutUser());
		navigation("/");
	};
	return (
		<div className='main-container'>
			<Navbar />
			<MainPage />
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

export default MainContainer;
