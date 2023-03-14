import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./CreateEvent.css";

/*
TODO:
	Setup localStorage functionality
	Correct Time and reveal to be time and not strings
	Add Link to reroute to landing after cancel or create event
*/


export default function CreateEvent () {
	const [name, setName] = useState("");
	const [time, setTime] = useState(""); //This will need to be adjusted to be a date and time picker
	const [reveal, setReveal] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
	}
	
	const handleCancel = () => {
    	setName("");
    	setTime("");
    	setReveal("");
  	  	setAddress("");
  	};

return (
	<div className="create-event">
		<p className="create-event--title">Create Event</p>
		<form className="create-event--form"onSubmit={handleSubmit}>
			<label className="create-event--field">
				When are we calling this thing?
			<input type="text" value={name} onChange={(event) => setName(event.target.value)} />
			</label>
			<label className="create-event--field">
				When should everyone arrive?
			<input type="text" value={time} onChange={(event) => setTime(event.target.value)} />
			</label>
			<label className="create-event--field">
				When should we reveal the address?
			<input type="text" value={reveal} onChange={(event) => setReveal(event.target.value)} />
			</label>
			<label className="create-event--field">
				What's the address?
			<input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
			</label>

			<div className="create-event--button-wrapper">
			
			<Link to="/">
				<button className="create-event--button--cancel"type="button" onClick={handleCancel}>Cancel</button>	
			</Link>
			<Link to="/">	
				<button className="create-event--button--create"type="submit">Create</button>
			</Link>
			</div>
		</form>

	</div>
	
)

};
