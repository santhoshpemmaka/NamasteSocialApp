import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "./index.css";
import App from "./App";
import {Mock} from "./Mock";
import {makeServer} from "./server";

makeServer();
ReactDOM.render(
	<React.StrictMode>
		<Router>
			{/* <Mock /> */}
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
