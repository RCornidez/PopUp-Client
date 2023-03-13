import React, { useEffect, useState } from "react";

import "./AppContainer.css";

import Landing from "../pages/Landing.jsx";

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
	<div className="app-container">
		<Landing />
	
	</div>

	)
}


