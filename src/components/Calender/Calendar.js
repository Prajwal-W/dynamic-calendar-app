import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isSameMonth, addMonths, subMonths } from 'date-fns';
import './Calendar.css';

const Calendar = ({ selectedDate }) => {
  const [renderDate, setRenderDate] = useState(new Date());

  useEffect(() => {
    const [day, month, year] = selectedDate.split('-').map(Number);
    const isValid = day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1000 && year <= 9999;
    setRenderDate(isValid ? new Date(year, month - 1, day) : new Date());
  }, [selectedDate]);

  const getDaysInMonth = (date) => eachDayOfInterval({ start: startOfMonth(date), end: endOfMonth(date) });

  const today = new Date();
  const daysInMonth = getDaysInMonth(renderDate);
  const firstDayOfMonth = startOfMonth(renderDate).getDay();

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setRenderDate(subMonths(renderDate, 1))}>&lt;</button>
        <span>{format(renderDate, 'MMMM yyyy')}</span>
        <button onClick={() => setRenderDate(addMonths(renderDate, 1))}>&gt;</button>
      </div>
      <div className="calendar-weekdays">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="calendar-day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-dates">
        {[...Array(firstDayOfMonth)].map((_, index) => <div key={`empty-${index}`} className="calendar-date empty" />)}
        {daysInMonth.map((day) => (
          <div
            key={day.toISOString()}
            className={`calendar-date ${
              isSameMonth(day, renderDate) ? 'current-month' : 'other-month'
            } ${isSameDay(day, today) ? 'today' : ''} ${
              isSameDay(day, renderDate) ? 'selected' : ''
            }`}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
