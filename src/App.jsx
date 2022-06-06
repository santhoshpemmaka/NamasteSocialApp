import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
	HomeLandingpage,
	Login,
	MainContainer,
	SignUp,
	BookContainer,
	ExploreContainer,
	ProfileContainer,
} from "./Components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getallusers} from "./Features/User/User";
import {getAllPosts} from "./Features/Post/Post";

function App() {
	const {token} = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getallusers());
		dispatch(getAllPosts());
	}, [token]);

	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<HomeLandingpage />} />
					<Route
						path='/home'
						element={
							<PrivateRoute>
								<MainContainer />
							</PrivateRoute>
						}
					/>
					<Route
						path='/bookmark'
						element={
							<PrivateRoute>
								<BookContainer />
							</PrivateRoute>
						}
					/>
					<Route
						path='/explore'
						element={
							<PrivateRoute>
								<ExploreContainer />
							</PrivateRoute>
						}
					/>
					<Route
						path='/profile'
						element={
							<PrivateRoute>
								<ProfileContainer />
							</PrivateRoute>
						}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
