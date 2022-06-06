import React from "react";
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
	const location = useLocation();
	const {token} = useSelector((store) => store.auth);
	return token ? (
		children
	) : (
		<Navigate state={{from: location}} to='/login' replace />
	);
};

export default PrivateRoute;
