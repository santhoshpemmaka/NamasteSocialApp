import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Mock} from "./Mock";
import {makeServer} from "./server";
makeServer();
ReactDOM.render(
	<React.StrictMode>
		<Mock />
		{/* <App /> */}
	</React.StrictMode>,
	document.getElementById("root")
);
