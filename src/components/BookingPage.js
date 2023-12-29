import BookingForm from "./BookingForm"
import Nav from "./Nav"
import '../App.css'
import { useState } from "react"

export default function BookingPage(){

    const [availableTimes, setAvailableTimes] = useState({
        times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    })

    const removeTime = (timeToRemove) => {
        setAvailableTimes(prevState => ({
            ...prevState,
            times: prevState.times.filter(time => time !== timeToRemove)
        }))
    }

    return(
        <>
            <Nav />
            <BookingForm availableTimes={availableTimes} removeTime={removeTime}/>
        </>
    )
}