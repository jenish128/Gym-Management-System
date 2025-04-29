import React from "react";
import '../styles/class.css';

const Schedule = () => {
    return(
        <div className="classes-con">
            <h1 className="classes-heading">schedule</h1>
            <table className="classes-table">
    <tr>
        <th></th>
        <th className="day-width">Sunday</th>
        <th className="day-width">Monday</th>
        <th className="day-width">Tuesday</th>
        <th className="day-width">Wednesday</th>
        <th className="day-width">Thursday</th>
        <th className="day-width">Friday</th>
        <th className="day-width">Saturday</th>
    </tr>
    <tr>
        <th>6:00 AM - 7:00 AM</th>
        <td>Closed</td>
        <td>Cardio & Stretching</td>
        <td>Weight Training</td>
        <td>HIIT Workout</td>
        <td>Strength Training</td>
        <td>Cardio & Abs</td>
        <td>Yoga & Meditation</td>
    </tr>
    <tr>
        <th>7:15 AM - 8:15 AM</th>
        <td>Closed</td>
        <td>CrossFit</td>
        <td>Upper Body Strength</td>
        <td>Kickboxing</td>
        <td>Functional Training</td>
        <td>Leg Day</td>
        <td>Zumba</td>
    </tr>
    <tr>
        <th>8:30 AM - 9:30 AM</th>
        <td>Closed</td>
        <td>Yoga & Flexibility</td>
        <td>Strength & Endurance</td>
        <td>Pilates</td>
        <td>Boot Camp</td>
        <td>Full Body Workout</td>
        <td>Aerobics</td>
    </tr>
    <tr>
        <th>5:00 PM - 6:00 PM</th>
        <td>Closed</td>
        <td>Functional Training</td>
        <td>Weightlifting</td>
        <td>Boxing</td>
        <td>Cardio Blast</td>
        <td>Power Yoga</td>
        <td>Open Gym</td>
    </tr>
    <tr>
        <th>6:30 PM - 7:30 PM</th>
        <td>Closed</td>
        <td>Bodybuilding</td>
        <td>Strength & Conditioning</td>
        <td>Dance Fitness</td>
        <td>Full Body HIIT</td>
        <td>Core Strength</td>
        <td>Calisthenics</td>
    </tr>
    <tr>
        <th>7:45 PM - 8:45 PM</th>
        <td>Closed</td>
        <td>Spinning</td>
        <td>Pilates</td>
        <td>CrossFit</td>
        <td>Mobility & Stretching</td>
        <td>Martial Arts</td>
        <td>Open Gym</td>
    </tr>
</table>

        </div>
    );
}

export default Schedule;