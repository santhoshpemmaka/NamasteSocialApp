import React from "react";
import "./ErrorPage.scss";
import image from "../../Assests/Error-404.gif";
import {useNavigate} from "react-router";

const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<div className='ErrorPage-container'>
			<div className='ErrorPage-response'>
				<img src={image} alt='404 Error' onClick={() => navigate("/")} />
			</div>
		</div>
	);
};

export default ErrorPage;
