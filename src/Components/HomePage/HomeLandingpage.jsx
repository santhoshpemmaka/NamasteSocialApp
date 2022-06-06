import React from "react";
import "./HomeLandingPage.scss";
import {Link} from "react-router-dom";
import homeImage from "../../Assests/social-media2.jpg";
const HomeLandingpage = () => {
	return (
		<div className='home-container'>
			<div className='home-component grid-layout'>
				<div className='home-component-headings'>
					<h2 className='home-page-header'>
						Namaste<label>App</label>
					</h2>
					<div className='home-page-headings'>
						<h3 className='home-page-subheading1'>
							FOLLOW PEOPLE AROUND THE GLOBE
						</h3>
						<h3 className='home-page-subheading2'>SHARE WHAT YOU THINKING</h3>
						<h3 className='home-page-subheading3'>CONNECT WITH YOUR FRIENDS</h3>
					</div>
					<Link to='/signup' className='no-list-link'>
						<button className='home-page-btn'>Join Now</button>
					</Link>
					<label className='home-page-login'>
						Already registered? <Link to='/login'>Login here</Link>
					</label>
				</div>
				<div className='home-page-response'>
					<img src={homeImage} alt='Home Page Image' />
				</div>
			</div>
		</div>
	);
};

export default HomeLandingpage;
