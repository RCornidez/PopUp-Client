import { useState, useEffect, createContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { customAlphabet } from "nanoid";


import './App.css'

//import custom components
import context from './custom/components/context.jsx'
import Attending from './custom/pages/attend.jsx'

//user id setup
const alphabet = '0123456789';
const nanoid = customAlphabet(alphabet, 10);

function App() {
	const [view, setView] = useState(false)
	const [pendingMessages, setPendingMessages] = useState([]);
	const [processedMessages, setProcessedMessages] = useState([]);
	const [events, setEvents] = useState([]);
	const [guestList, setGuestList] = useState([]); //this will be a nested array
	const [user, setUser] = useState();


	//check if empty pendingMessages, processedMessages, events, guestList, user
	useEffect(() => {
    const checkMessages = localStorage.getItem('pendingMessages');
    const checkMovedMessages = localStorage.getItem('processedMessages');
    const checkEvents = localStorage.getItem('events');
    const checkGuestList = localStorage.getItem('guestList');
    const checkUser = localStorage.getItem('user');

    if (checkMessages) {
      setPendingMessages(JSON.parse(checkMessages));
    }

    if (checkMovedMessages) {
      setProcessedMessages(JSON.parse(checkMovedMessages));
    }

    if (checkEvents) {
      setEvents(JSON.parse(checkEvents));
    }
    
		if (checkGuestList) {
      setGuestList(JSON.parse(checkGuestList));
    }

    if (checkUser) {
      setUser(JSON.parse(checkUser));
    } else {
			const userId = nanoid()
			setUser(userId)
			localStorage.setItem('user', userId)
		}



  }, []);


	const showHosting = () => {
		setView(false)
	}
	
	const showAttending = () => {
		setView(true)
	}

	const contextValue = {
		userId: user
	}
  
	return (
		<context.Provider value={contextValue}>
    <div className="app">
			<h1>PopUp</h1>
			{ view ? (
			<button onClick={showHosting}> 
					<Link to="/">Attending</Link>
			</button>
			) : (
			<button onClick={showAttending}> 
					<Link to="/host">Hosting</Link>
			</button>
			)}
			<Routes>
				<Route exact path="/" element={<Attending />} />
				<Route exact path="/host" element={<p>Hosting</p>} />
			</Routes>
    </div>
		</context.Provider>
  )
}

export default App
