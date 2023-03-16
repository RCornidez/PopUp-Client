import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";



import "./AppContainer.css";

import Landing from "../pages/Landing.jsx";
import Host from "../pages/Host.jsx";
import EditEvent from "../pages/EditEvent.jsx";
import CreateEvent from "../pages/CreateEvent.jsx";
import Guest from "../pages/Guest.jsx";
import AddEvent from "../pages/AddEvent.jsx";



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
				<Route exact path="/host" element={<Host />} />
				<Route exact path="/edit_event" element={<EditEvent />} />
				<Route exact path="/create_event" element={<CreateEvent />} />	
				<Route exact path="/guest" element={<Guest />} />
				<Route exact path="/add_event" element={<AddEvent />} />	
			</Routes>
		</div>
	</Router>

	)
}


