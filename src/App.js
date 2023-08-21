import React, { useState } from 'react';
import Calendar from './components/Calender/Calendar'; 
import './App.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="app">
      <h2>Reusable React Calendar component</h2>
      <div className="input-container">
        <input
          type="text"
          value={selectedDate}
          onChange={handleDateChange}
          placeholder="Enter date (dd-mm-yyyy)"
        />
      </div>
      <Calendar selectedDate={selectedDate} />
    </div>
  );
};

export default App;
