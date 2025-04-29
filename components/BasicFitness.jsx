import React from "react";
import '../styles/program.css';
import '../styles/common.css';

const BasicFitness = () => {
    return(
        <div className="program-con">
            <h1 className="program-heading">Basic Fitness Program</h1>
            <hr />
            <p className="program-p">The Basic Fitness Program is designed for individuals who are either beginners or those seeking to improve their overall health and maintain a balanced fitness level. This program focuses on general fitness goals such as improving stamina, flexibility, strength, and cardiovascular health while promoting healthy lifestyle habits.</p>
            <hr />
            <div>
                <h2 className="program-div-heading">Objective</h2>
                <h4 className="program-div-heading4">1. Build a Strong Foundation</h4>
                <ul className="program-list">
                    <li>Introduces members to basic exercise techniques, focusing on proper form and movement.</li>
                    <li>Develops a routine that builds endurance, strength, and flexibility over time.</li>
                </ul>
                <h4 className="program-div-heading4">2. Improve Overall Health</h4>
                <ul className="program-list">
                    <li>Enhances heart health, boosts energy levels, and reduces stress.</li>
                    <li>Helps prevent chronic conditions such as obesity, diabetes, and heart disease.</li>
                </ul>
                <h4 className="program-div-heading4">3. Weight Management</h4>
                <ul className="program-list">
                    <li>Helps members maintain a healthy weight through balanced exercise and calorie burning.</li>
                </ul>
                <h4 className="program-div-heading4">4. Motivate a Consistent Lifestyle</h4>
                <ul className="program-list">
                    <li>Encourages members to build and maintain a habit of exercising regularly.</li>
                </ul>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Components</h2>
                <p className="program-div-p">1. Warm-Up</p>
                <p className="program-div-p">2. Cardio Training</p>
                <p className="program-div-p">3. Strength Training</p>
                <p className="program-div-p">4. Flexibility and Mobility</p>
                <p className="program-div-p">5. Core Workouts</p>
                <p className="program-div-p">6. Cool-Down</p>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Weekly Schedule</h2>
                <table className="program-table">
                    <tr>
                        <th>Day</th>
                        <th>Activity</th>
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td>Cardio (30 minutes) + Core Workout</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>Strength Training (Full Body)</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>Rest or Light Yoga</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>Cardio (20 minutes) + Flexibility</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>Strength Training (Upper Body Focus)</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>Cardio (15 minutes) + Core Workout</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Rest or Active Recovery (e.g., walking)</td>
                    </tr>
                </table>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Benefit</h2>
                <p className="program-div-p">1. Enhanced Physical Fitness</p>
                <p className="program-div-p">2. Mental Well-Being</p>
                <p className="program-div-p">3. Weight Control</p>
                <p className="program-div-p">4. Increased Energy</p>
                <p className="program-div-p">5. Injury Prevention</p>
            </div>
            <hr />
            {/* <div>
                <h2 className="program-div-heading">Payment</h2>
                <div className="buy">
                    <div className="buy-card">
                        <h2>3-Month Plan</h2>
                        <h2>price</h2>
                        <button className="btn buy-btn">Buy</button>
                    </div>
                    <div className="buy-card">
                        <h2>6-Month Plan</h2>
                        <h2>price</h2>
                        <button className="btn buy-btn">Buy</button>
                    </div>
                    <div className="buy-card">
                        <h2>1-Year Plan</h2>
                        <h2>price</h2>
                        <button className="btn buy-btn">Buy</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default BasicFitness;