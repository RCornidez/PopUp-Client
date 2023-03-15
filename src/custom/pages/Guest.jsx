import { Link } from "react-router-dom";

import { DayPicker, Row} from 'react-day-picker';

import { differenceInCalendarDays } from 'date-fns';

import "./Guest.css";
import "./style.css";


function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}



export default function Guest () {


return (
	<div className="guest">
		<p className="guest--prompt">Let's Party</p>
		<div className="guest--calendar">
    		<DayPicker 
		      fromDate={new Date()}
    		  components={{ Row: OnlyFutureRow }}
		      hidden={isPastDate}
		      showOutsideDays
		    />
		</div>
			
		<div className="guest--party-list">
			<div className="guest--party">
				<p className="guest--party--title">Downtown</p>
				<p className="guest--party--timer">3D 12:21:03</p>
			</div>
			<div className="guest--party">
				<p className="guest--party--title">Oro Valley</p>
				<p className="guest--party--timer">3D 12:21:03</p>
			</div>
			<div className="guest--party">
				<p className="guest--party--title">Oro Valley</p>
				<p className="guest--party--timer">3D 12:21:03</p>
			</div>
			<div className="guest--party">
				<p className="guest--party--title">Oro Valley</p>
				<p className="guest--party--timer">3D 12:21:03</p>
			</div>
			<Link to="/add_event">
				<button className="guest--party-add">+</button>
			</Link>
		</div>
	</div>
)

}
