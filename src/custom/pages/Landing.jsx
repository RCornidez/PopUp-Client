import { Link } from "react-router-dom";

import "./Landing.css";

export default function Landing () {


return (
	<div className="landing">
		<p className="prompt">Let's Party</p>
			
		<div className="party-list">
			<div className="party">
				<p className="party--title">Downtown</p>
				<p className="party--timer">3D 12:21:03</p>
			</div>
			<div className="party">
				<p className="party--title">Oro Valley</p>
				<p className="party--timer">3D 12:21:03</p>

			</div>
			<Link to="/create_event">
				<button className="party-add"><p>+</p></button>
			</Link>
		</div>
	</div>
)

}
