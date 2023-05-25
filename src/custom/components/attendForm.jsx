import { useState, useEffect, useContext } from 'react';
import context from './context';

export default function AttendanceForm() {
  const [formData, setFormData] = useState({
    eventId: 0,
    userId: 0
  });

	useEffect(() => {
		setFormData({
      ...formData,
      userId: contextData.userId
    })
	}, [])

  const contextData = useContext(context);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value),
      userId: contextData.userId
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Event ID:
          <input type="number" name="eventId" value={formData.eventId} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

