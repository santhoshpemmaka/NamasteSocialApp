import React from "react";
import Navbar from "../Navbar/Navbar";
import Follows from "../Follows/Follows";
import "./ExploreContainer.scss";
import ExploreComponent from "./ExploreComponent";
import {Link} from "react-router-dom";
import {logoutUser} from "../../Features/Auth/Auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

const ExploreContainer = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const logoutHandler = () => {
		dispatch(logoutUser());
		navigation("/");
	};
	return (
		<div className='explore-container'>
			<Navbar />
			<ExploreComponent />
			<Follows />
			<div className='shown-only-mobile'>
				<Link to='/home' className='mobile-page-icon'>
					<i className='fas fa-home'></i>
				</Link>
				<Link to='/explore' className='mobile-page-icon'>
					<i className='fas fa-compass'></i>
				</Link>
				<Link to='/bookmark' className='mobile-page-icon'>
					<i className='fas fa-bookmark'></i>
				</Link>
				<Link to='/profile' className='mobile-page-icon'>
					<i className='fas fa-user-circle'></i>
				</Link>
				<label className='mobile-page-icon' onClick={() => logoutHandler()}>
					<i className='fas fa-sign-out-alt'></i>
				</label>
			</div>
		</div>
	);
};

export default ExploreContainer;
