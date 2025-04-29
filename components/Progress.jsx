import React, { useState } from "react";
import '../styles/class.css';

const Progress = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Monthly progress data
    const progressDataByMonth = {
        "January": {
            height: "5'10\"",
            weight: "70 kg",
            fat: "15%",
            muscleMass: "30%",
            bmi: "24.2"
        },
        "February": {
            height: "5'10\"",
            weight: "71 kg",
            fat: "14%",
            muscleMass: "31%",
            bmi: "24.4"
        },
        "March": {
            height: "5'10\"",
            weight: "72 kg",
            fat: "16%",
            muscleMass: "32%",
            bmi: "24.6"
        },
        // Add data for other months...
    };

    // Month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get current month name
    const currentMonth = monthNames[currentDate.getMonth()];

    // Get the progress for the selected month
    const currentMonthProgress = progressDataByMonth[currentMonth] || {};

    // Handle previous and next month navigation
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <div className="progress-container">
            <h1 className="classes-heading">Progress</h1>
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>&lt; Prev</button>
                <h2> {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()} </h2>
                <button onClick={handleNextMonth}>Next &gt;</button>
            </div>
            <div className="progress-details">
                {currentMonthProgress ? (
                    <>
                        <p className="progress-p"><strong>Height:</strong> {currentMonthProgress.height}</p>
                        <p className="progress-p"><strong>Weight:</strong> {currentMonthProgress.weight}</p>
                        <p className="progress-p"><strong>Fat:</strong> {currentMonthProgress.fat}</p>
                        <p className="progress-p"><strong>Muscle Mass:</strong> {currentMonthProgress.muscleMass}</p>
                        <p className="progress-p"><strong>BMI:</strong> {currentMonthProgress.bmi}</p>
                    </>
                ) : (
                    <p>No data available for this month.</p>
                )}
            </div>
        </div>
    );
};

export default Progress;
