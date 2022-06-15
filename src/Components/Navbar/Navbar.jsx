import React from "react";
import "./Navbar.scss";
import {NavLink, Link} from "react-router-dom";
import {logoutUser} from "../../Features/Auth/Auth";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";

const Navbar = () => {
	const dispatch = useDispatch();
	const {token} = useSelector((store) => store.auth);
	const navigation = useNavigate();
	const logoutHandler = () => {
		dispatch(logoutUser());
		navigation("/");
	};
	const userInfo = JSON.parse(localStorage.getItem("social-userSession"));
	return (
		<div className='Navbar-container'>
			<Link to={userInfo?.token ? "/home" : "/"} className='Navbar-heading'>
				<label>Namaste</label>
			</Link>
			<div className='Navbar-items'>
				<NavLink
					to='/home'
					className={({isActive}) =>
						isActive ? "navbar-item active" : "navbar-item"
					}>
					<i className='fas fa-home'></i>
					<label>HOME</label>
				</NavLink>
				<NavLink
					to='/explore'
					className={({isActive}) =>
						isActive ? "navbar-item active" : "navbar-item"
					}>
					<i className='fas fa-compass'></i>
					<label>EXPLORE</label>
				</NavLink>
				<NavLink
					to='/bookmark'
					className={({isActive}) =>
						isActive ? "navbar-item active" : "navbar-item"
					}>
					<i className='fas fa-bookmark'></i>
					<label>BOOKMARK</label>
				</NavLink>
				<NavLink
					to='/profile'
					className={({isActive}) =>
						isActive ? "navbar-item active" : "navbar-item"
					}>
					<i className='fas fa-user-alt'></i>
					<label>PROFILE</label>
				</NavLink>
				<label onClick={() => logoutHandler()} className='navbar-item'>
					<i className='fas fa-sign-out-alt'></i>
					<label>LOGOUT</label>
				</label>
			</div>
		</div>
	);
};

export default Navbar;
