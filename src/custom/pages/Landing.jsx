import { Link } from "react-router-dom";

import "./Landing.css";

export default function Landing () {


return (
	<div className="landing">
		<div className="landing--title-container">
		<p className="landing--title-large">P</p>
		<p className="landing--title-small">op</p>
		<p className="landing--title-large">U</p>
		<p className="landing--title-small">p</p>
		</div>
		<div className="landing--button-list">
			<Link to="/host">
				<button className="landing--button">Hosting</button>	
			</Link>		
			<Link to="/guest">
				<button className="landing--button">Attending</button>	
			</Link>		
		</div>
	</div>
)

}
