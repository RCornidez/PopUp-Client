import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";



import "./AppContainer.css";

import Landing from "../pages/Landing.jsx";
import CreateEvent from "../pages/CreateEvent.jsx";



/*
TODO:
	Create Action


*/


function checkStorage(name) {
	const isLocalStorageEmpty = localStorage.getItem(name);
	if (isLocalStorageEmpty.length >= 1) {
		return true
	} else {
		return false
	}
};

function handleMessage(message) {
	message !== null ? console.log(message) : console.log("no message")
}


export default function AppContainer () {
	

	useEffect(() => {
		const interval = setInterval(() => {
			const test = checkStorage("messages-pending") //service that will sort the WebRTC messages
			//logic to handle messages - ternary operator shorthand was giving me trouble with syntax
			console.log(test)
		}, 5000);
	}, [])	

	return (

	<Router>
		<div className="app-container">
			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route exact path="/create_event" element={<CreateEvent />} />	
			</Routes>
		</div>
	</Router>

	)
}


