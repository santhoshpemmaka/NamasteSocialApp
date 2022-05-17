import "./App.scss";
import {Routes, Route} from "react-router-dom";
import {HomeLandingpage} from "./Components";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomeLandingpage />} />
			</Routes>
		</div>
	);
}

export default App;
