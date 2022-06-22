import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useLocation} from "react-router-dom";
import "./SignUp.scss";
import {signUpUser} from "../../Features/Auth/Auth";
import validator from "validator";

const SignUp = () => {
	const userDetail = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	const navigation = useNavigate();
	const location = useLocation();
	const [signupMessage, setsignupMessage] = useState(false);
	const [signupDetails, setsignupDetails] = useState({
		firstName: "",
		lastName: "",
		emailName: "",
		passWord: "",
		shownPassword: false,
	});
	if (userDetail.token) {
		setTimeout(() => {
			navigation(location?.state?.from?.pathname || "/home", {replace: true});
		}, 2000);
	}

	const signupHandler = () => {
		const {emailName, passWord, firstName, lastName} = signupDetails;
		if (
			emailName !== "" &&
			passWord !== "" &&
			firstName !== "" &&
			lastName !== ""
		) {
			dispatch(signUpUser(signupDetails));
		}
		setsignupMessage((prev) => !prev);
	};

	const iconHandler = () => {
		setsignupDetails({
			...signupDetails,
			shownPassword: !signupDetails.shownPassword,
		});
	};
	return (
		<div className='signup-container'>
			<div className='spacer-3rem'></div>
			<div className='signup-component'>
				<label className='signup-header'>SIGN UP</label>
				<div className='form-signup'>
					<div className='componet-signup'>
						<label className='label-signup-name'>First Name </label>
						<input
							type='text'
							value={signupDetails.firstName}
							className='signup-input'
							placeholder='Enter your first name'
							onChange={(e) =>
								setsignupDetails({...signupDetails, firstName: e.target.value})
							}
							required
						/>
					</div>
					{signupMessage && signupDetails.firstName.length === 0 && (
						<label className='validate-message'>
							* First Name input filed is required{" "}
						</label>
					)}
					<div className='componet-signup'>
						<label className='label-signup-name'>Last Name </label>
						<input
							type='text'
							value={signupDetails.lastName}
							className='signup-input'
							placeholder='Enter your last name'
							onChange={(e) =>
								setsignupDetails({...signupDetails, lastName: e.target.value})
							}
							required
						/>
					</div>
					{signupMessage && signupDetails.lastName.length === 0 && (
						<label className='validate-message'>
							* Last Name input filed is required{" "}
						</label>
					)}
					<div className='componet-signup'>
						<label className='label-signup-name'>Email </label>
						<input
							type='email'
							value={signupDetails.emailName}
							className='signup-input'
							placeholder='sample@gmail.com'
							onChange={(e) =>
								setsignupDetails({...signupDetails, emailName: e.target.value})
							}
							required
						/>
					</div>
					{signupMessage && signupDetails.emailName.length === 0 && (
						<label className='validate-message'>
							* Email input filed is required{" "}
						</label>
					)}
					{signupDetails.emailName.length > 1 &&
					validator.isEmail(signupDetails.emailName) === false ? (
						<label className='validate-message'>Please enter valid email</label>
					) : (
						""
					)}
					<div className='componet-signup'>
						<label className='label-signup-name'>Password </label>
						<div className='show-password'>
							<input
								type={signupDetails.shownPassword ? "text" : "password"}
								value={signupDetails.passWord}
								className='signup-input'
								placeholder='Enter new password'
								onChange={(e) =>
									setsignupDetails({...signupDetails, passWord: e.target.value})
								}
								required
							/>
							{signupDetails.shownPassword ? (
								<i
									onClick={iconHandler}
									className='fas fa-eye password-icon'></i>
							) : (
								<i
									onClick={iconHandler}
									className='fas fa-eye-slash password-icon'></i>
							)}
						</div>
					</div>
					{signupMessage && signupDetails.passWord.length === 0 && (
						<label className='validate-message'>
							* Password input filed is required{" "}
						</label>
					)}
					<button className='register-btn' onClick={() => signupHandler()}>
						REGISTER
					</button>
					<label className='sigup-register'>
						Already registered? <Link to='/login'>Login here</Link>
					</label>
				</div>
			</div>
			<div className='spacer-3rem'></div>
		</div>
	);
};

export default SignUp;
