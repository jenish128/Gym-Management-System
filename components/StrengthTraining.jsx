import React from "react";
import '../styles/program.css';
import '../styles/common.css';

const StrengthTraining = () => {
    return(
        <div className="program-con">
            <h1 className="program-heading">Strength Training Program</h1>
            <hr />
            <p className="program-p">A Strength Training Program is designed to help individuals build muscle strength, increase endurance, and improve overall physical performance. This program focuses on resistance-based exercises that target various muscle groups using weights, machines, or bodyweight exercises. It is suitable for beginners, intermediates, and advanced fitness enthusiasts, with tailored routines for different fitness levels.</p>
            <hr />
            <div>
                <h2 className="program-div-heading">Objective</h2>
                <h4 className="program-div-heading4">1. Build Muscular Strength</h4>
                <ul className="program-list">
                    <li>Enhance the ability of muscles to lift heavier weights and perform high-intensity tasks.</li>
                </ul>
                <h4 className="program-div-heading4">2. Increase Muscle Mass </h4>
                <ul className="program-list">
                    <li>Stimulate muscle growth through resistance training.</li>
                </ul>
                <h4 className="program-div-heading4">3. Improve Endurance</h4>
                <ul className="program-list">
                    <li>Enhance the capacity to sustain physical activity for extended periods.</li>
                </ul>
                <h4 className="program-div-heading4">4. Motivate a Consistent Lifestyle</h4>
                <ul className="program-list">
                    <li>Increase calorie burn even at rest by developing lean muscle mass.</li>
                </ul>
                <h4 className="program-div-heading4">5. Enhance Bone Health</h4>
                <ul className="program-list">
                    <li>Improve bone density, reducing the risk of osteoporosis and fractures.</li>
                </ul>
                <h4 className="program-div-heading4">6. Injury Prevention</h4>
                <ul className="program-list">
                    <li>Strengthen muscles, tendons, and ligaments to minimize the likelihood of injuries.</li>
                </ul>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Components</h2>
                <p className="program-div-p">1. Warm-Up</p>
                <p className="program-div-p">2. Core Strength Exercises</p>
                <p className="program-div-p">3. Accessory Exercises</p>
                <p className="program-div-p">4. Progressive Overload</p>
                <p className="program-div-p">5. Cool-Down and Stretching</p>
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
                        <td>Bench Press, Push-Ups, Pull-Ups, Dumbbell Rows, Bicep Curls, Tricep Dips</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>Squats, Deadlifts, Lunges, Calf Raises, Leg Press</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>Light cardio, Yoga, or Mobility Training</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>Plank, Russian Twists, Cable Woodchops, Kettlebell Swings, Dumbbell Deadlifts</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>Circuit of Squats, Push-Ups, Pull-Ups, Burpees, and Dumbbell Rows</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>Rest or active recovery</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Light jogging and full-body stretching</td>
                    </tr>
                </table>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Benefit</h2>
                <p className="program-div-p">1. Improved Physical Performance</p>
                <p className="program-div-p">2. Weight Management</p>
                <p className="program-div-p">3. Better Posture and Balance</p>
                <p className="program-div-p">4. Stress Reduction</p>
                <p className="program-div-p">5. Increased Longevity</p>
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

export default StrengthTraining;