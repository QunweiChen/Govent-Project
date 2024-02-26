import React, { useState } from 'react';

export default function Calendar() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const disabledDates = ["2024-02-20", "2024-02-29"];

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const selectDate = (date) => {
        setSelectedDate(date);
        setShowCalendar(false);
    };

    const renderCalendar = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

        const totalWeeks = Math.ceil((firstDayOfMonth + daysInMonth) / 7);

        const calendar = [];

        for (let i = 0; i < totalWeeks; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                const dayIndex = i * 7 + j - firstDayOfMonth + 1;
                const date = new Date(currentYear, currentMonth, dayIndex);
                const formattedDate = date.toISOString().split('T')[0];

                week.push(
                    <div
                        key={dayIndex}
                        className={`date ${disabledDates.includes(formattedDate) ? 'disabled' : ''} ${selectedDate === formattedDate ? 'currentDate' : ''}`}
                        onClick={() => selectDate(formattedDate)}
                    >
                        {dayIndex > 0 && dayIndex <= daysInMonth ? dayIndex : ''}
                    </div>
                );
            }
            calendar.push(<div key={i} className="unit1">{week}</div>);
        }

        return calendar;
    };

    return (
        <div style={{ width: '200px', height: '300px' }}>
            <div className="datepicker" onClick={toggleCalendar}>
                <input type="text" value={selectedDate} readOnly />
            </div>
            {showCalendar && (
                <div className="calendarContainer active">
                    <div className="calendar">
                        <div className="nav">
                            <button className="leftBtn"><i className="fa-solid fa-left-long"></i></button>
                            <div className="month">2024-02</div>
                            <button className="rightBtn"><i className="fa-solid fa-right-long"></i></button>
                        </div>
                        <div className="week unit1">
                            <div className="weekday">S</div>
                            <div className="weekday">M</div>
                            <div className="weekday">T</div>
                            <div className="weekday">W</div>
                            <div className="weekday">T</div>
                            <div className="weekday">F</div>
                            <div className="weekday">S</div>
                        </div>
                        <div className="dates unit1">
                            {renderCalendar()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
