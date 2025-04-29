import React, { useState } from "react";
import '../styles/class.css';

const Attendance = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const attendanceData = {
        "2024-12-01": "present",
        "2024-12-02": "absent",
        "2024-12-03": "present",
        "2024-12-04": "absent",
        "2024-12-05": "pending",
        "2024-12-06": "present",
        "2024-12-07": "absent",
        "2024-12-08": "present",
        "2024-12-09": "absent",
        "2024-12-10": "present",
        "2024-12-11": "present",
        "2024-12-12": "absent",
        "2024-12-13": "present",
        "2024-12-14": "absent",
        "2024-12-15": "absent",
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);

        const firstDay = new Date(year, month, 1).getDay();

        let calendar = [];
        let week = [];
        let dayCounter = 1;

        for (let i = 0; i < firstDay; i++) {
            week.push(null);
        }

        while (dayCounter <= daysInMonth) {
            if (week.length === 7) {
                calendar.push(week);
                week = [];
            }
            week.push(dayCounter);
            dayCounter++;
        }

        if (week.length > 0) {
            while (week.length < 7) {
                week.push(null);
            }
            calendar.push(week);
        }

        return calendar;
    };

    const handlePrevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const handleNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const calendar = generateCalendar();
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const getStatusForDate = (year, month, day) => {
        const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return attendanceData[dateKey] || "default";
    };

    return (
        <div className="calendar-container">
            <h1 className="classes-heading">Attendance</h1>
            <div className="attendance-per">
                <h2 className="attendance-heading">Current Month : 70%</h2>
                <h2 className="attendance-heading">Previous Month : 70%</h2>
                <h2 className="attendance-heading">Average : 70%</h2>
            </div>
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>&lt; Prev</button>
                <h2> {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()} </h2>
                <button onClick={handleNextMonth}>Next &gt;</button>
            </div>
            <table className="calendar-table">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {calendar.map((week, index) => (
                        <tr key={index}>
                            {week.map((day, i) => {
                                const status = day !== null ? getStatusForDate( currentDate.getFullYear(), currentDate.getMonth(), day ): null;
                
                                return (
                                    <td
                                        key={i}
                                        className={`day-cell ${
                                            status ? `status-${status}` : "empty-cell"
                                        }`}
                                    >
                                        {day || ""}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Attendance;