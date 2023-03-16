import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./EditEvent.css";

import { Guest } from "../components/Guest.jsx";


/*
TODO:

*/


function DisplayGuestList (props) {
	const guestList = props.list.map(guest => {
		return <Guest data={guest} />;
	})

	return <div className="edit-event--guest-list"> {guestList} </div>;

}
export default function EditEvent () {

	const guests = [
		{name: "Rodrigo"},
		{name: "Ramiro"},
		{name: "Alianna"},
		{name: "Rodrigo"},
		{name: "Ramiro"},
		{name: "Alianna"}
	];



return (
	<div className="edit-event">
		<p className="edit-event--title">Event 123456</p>
		<DisplayGuestList list={guests} />	
		<div className="edit-event--chart">


		</div>

		<div className="edit-event--button-wrapper">
			<Link to="/host">
				<button className="edit-event--button--cancel" type="button">Cancel</button>	
			</Link>
			<Link to="/host">	
				<button className="edit-event--button--attend" type="submit">Save</button>
			</Link>
		</div>

	</div>
	
)

};
