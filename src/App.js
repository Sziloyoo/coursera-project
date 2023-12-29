import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage.js'
import HomePage from './components/HomePage.js';
import ConfirmedBooking from './components/ConfirmedBooking.js';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirm" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
