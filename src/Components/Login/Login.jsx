import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useLocation} from "react-router-dom";
import {ThreeDots} from "react-loader-spinner";
import "./Login.scss";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../Features/Auth/Auth";
import validator from "validator";

const Login = () => {
	const userDetails = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const location = useLocation();
	const [loginDetails, setloginDetails] = useState({
		username: "",
		password: "",
		shownPassword: false,
	});
	const [validationFlag, setvalidationFlag] = useState(false);
	const [loginMessage, setloginMessage] = useState(false);
	const [testFalg, settestFalg] = useState(false);
	const [showLoader, setshowLoader] = useState(false);
	if (userDetails.token) {
		setTimeout(() => {
			navigation(location?.state?.from?.pathname || "/home", {replace: true});
		}, 2000);
	}

	useEffect(() => {
		(() => {
			if (
				loginDetails.username != "" &&
				loginDetails.password != "" &&
				testFalg
			) {
				setshowLoader((prev) => !prev);
				dispatch(loginUser(loginDetails));
			}
		})();
	}, [loginDetails.username, loginDetails.password, testFalg]);

	const btnHandler = () => {
		setloginMessage((prev) => !prev);
	};
	const iconHandler = () => {
		setloginDetails({
			...loginDetails,
			shownPassword: !loginDetails.shownPassword,
		});
	};
	const testHandler = () => {
		setloginDetails({
			...loginDetails,
			username: "test@gmail.com",
			password: "12345",
		});
		settestFalg(true);
	};

	return (
		<>
			<div className='login-container'>
				<div className='login-component'>
					<label className='login-heading'>LOGIN</label>
					<div className='login-inputs'>
						<input
							className='login-input'
							value={loginDetails.username}
							type='email'
							placeholder='Enter your email here'
							onChange={(e) =>
								setloginDetails({...loginDetails, username: e.target.value})
							}
						/>
						{loginDetails.username.length > 1 &&
						validator.isEmail(loginDetails.username) === false ? (
							<label className='validate-data'>Please enter valid email</label>
						) : (
							""
						)}
						{loginDetails.username.length === 0 && loginMessage && (
							<label className='validate-data'>
								* Email input field is required
							</label>
						)}
						<div className='login-password'>
							<input
								className='login-input'
								value={loginDetails.password}
								type={loginDetails.shownPassword ? "text" : "password"}
								placeholder='Enter your password here'
								onChange={(e) =>
									setloginDetails({...loginDetails, password: e.target.value})
								}
							/>

							{loginDetails.shownPassword ? (
								<i
									onClick={iconHandler}
									className='fas fa-eye password-icon'></i>
							) : (
								<i
									onClick={iconHandler}
									className='fas fa-eye-slash password-icon'></i>
							)}
							{loginDetails.password.length === 0 && loginMessage && (
								<label className='validate-data'>
									* Password input field is required
								</label>
							)}
						</div>
						<button
							className='login-input test-credentails-btn'
							onClick={testHandler}>
							Login With Test Crendentails
						</button>

						{loginDetails.username !== "" &&
							loginDetails.password.length > 3 &&
							loginMessage && (
								<label className='login-message'>
									login failed. try with test crendentails
								</label>
							)}

						<button
							className='login-input login-btn'
							onClick={() => btnHandler()}>
							LOGIN
						</button>
						<label className='login-text'>
							Not a user yet ? ? <Link to='/signup'>Create your account</Link>
						</label>
					</div>
				</div>
				{showLoader && (
					<div className='loader-dots'>
						<ThreeDots
							color='#ff3f6c'
							height={100}
							width={100}
							timeout={5000}
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default Login;
