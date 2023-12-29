import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css'

export default function BookingForm({ availableTimes, removeTime }){

    const [form, setForm] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    })

    const navigate = useNavigate();

    const goConfirm = () => {
        navigate('/confirm');
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            date: e.target.elements['res-date'].value,
            time: e.target.elements['res-time'].value,
            guests: e.target.elements['guests'].value,
            occasion: e.target.elements['occasion'].value
        };

        removeTime(formData.time)

        setForm(formData)
        console.log(formData)

        goConfirm()
    }

    const dateOnChange = (e) => {
        console.log(e.target.value)
    }

    return(
        <div>
            <h2 className="booking-title">Book a table!</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={dateOnChange}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time">
                   { availableTimes.times.map((t) => {
                    return (<option>{t}</option>)
                   })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                   <option>Birthday</option>
                   <option>Anniversary</option>
                </select>
                <input className="book-button" type="submit" value="Make Your reservation"/>
            </form>
        </div>
    )
}