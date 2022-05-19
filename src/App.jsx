import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {HomeLandingpage, Login, SignUp} from "./Components";
import {useSelector} from "react-redux";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<HomeLandingpage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
