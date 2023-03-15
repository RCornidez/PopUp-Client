import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./AddEvent.css";

/*
TODO:
*/


export default function AddEvent () {

return (
	<div className="add-event">
		<p className="add-event--title">Add an Event</p>
		<form className="add-event--form"onSubmit={console.log("test")}>
			<label className="add-event--field">
				What's the party ID?
			<input type="text" value="test" onChange={console.log("test")} />
			</label>
			<label className="add-event--field">
				Who invited you (ID)?
			<input type="text" value="test" onChange={console.log("test")} />
			</label>
			<div className="add-event--button-wrapper">
				<Link to="/guest">
					<button className="add-event--button--cancel" type="button">Cancel</button>	
				</Link>
				<Link to="/guest">	
					<button className="add-event--button--attend" type="submit">Attend</button>
				</Link>
			</div>
		</form>

	</div>
	
)

};
