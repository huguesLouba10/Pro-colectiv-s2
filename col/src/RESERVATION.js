import React, { useState } from 'react';
import "./reservation.css";

function ReservationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const[classroom,setclassroom] = useState('')
    const [date, setDate] = useState('');
    const [StartTime,setStartTime] = useState('');
    const [EndTime, setEndTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send reservation information to server
    }

    return (
        <div>
            <h2>Make a Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    classroom:
                    <input type="text" value={classroom} onChange={(e)=>setclassroom(e.target.value)}/>
                </label>
                <label>
                    Date of Reservation:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <br />
                <label>
                    Start Time:
                    <input type="time" value={StartTime} onChange={(e) => setStartTime(e.target.value)} />
                </label>
                <br/>
                <label>
                    End Time:
                    <input type="time" value={EndTime} onChange={(e)=> setEndTime(e.target.value)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ReservationPage;
