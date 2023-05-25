import { useState, useContext } from 'react';
import context from '../components/context';

import AttendanceForm from '../components/attendForm';

export default function Attending () {
	const [showEventForm, setShowEventForm] = useState(false);
	const listStatus = useContext(context);
	
	const showForm = () => {
		setShowEventForm(true)
	}

	const hideForm = () => {
		setShowEventForm(false)
	}

	const eventList = false; //update this to recieve list of data

	return (
		<div className="attend">
		{ eventList ? (
			<div>
			<h2>Event List 🥳</h2>
			<ul>
				<li>Downtown Loft</li>
				<li>West Side</li>
				<li>Western</li>
			</ul>
			</div>
		) : (
			<div>
			<h2>Youre not attending anything 😟</h2>
			<h3>Lets add an event!🎉</h3>
			<button onClick={showForm}>Attend Event</button>
     	{showEventForm ? <AttendanceForm /> : <></>}
			</div>
		)}
		</div>
)}

