import { useState } from "react";

 
export function Guest (props) {
	const [visible, setVisible] = useState(false);

	const { name } = props.data;

	const guestStyleEdit = {display: visible ? 'none' : 'flex'};
	const guestStyleDisplayDelete = {display: visible ? 'flex' : 'none'};

	const changeVisibility = () => {
		setVisible(!visible);
	}

	return (
		<div className="edit-event--guest">
			<p className="edit-event--guest-name">{name}</p>
			<div className="edit-event--button-edit-wrapper" style={guestStyleEdit} >
				<button className="edit-event--button-edit" onClick={changeVisibility}>Edit</button>
			</div>
			<div className="edit-event--remove-guest" style={guestStyleDisplayDelete}>
				<button className="edit-event--button-remove">Remove</button>
				<button className="edit-event--button-cancel-remove" onClick={changeVisibility} >Cancel</button>
			</div>
		</div>
	);
}
