import React from "react";
import '../styles/program.css';
import '../styles/common.css';

const MuscleGain = () => {
    return(
        <div className="program-con">
            <h1 className="program-heading">Muscle Gain Program</h1>
            <hr />
            <p className="program-p">The Muscle Gain Program is designed for individuals who aim to increase muscle size, strength, and endurance through hypertrophy training. This program emphasizes progressive overload, proper nutrition, and recovery to maximize muscle growth (hypertrophy). It is suitable for beginners, intermediates, and advanced fitness enthusiasts, with customizable routines tailored to individual goals.</p>
            <hr />
            <div>
                <h2 className="program-div-heading">Objective</h2>
                <h4 className="program-div-heading4">1. Maximize Muscle Hypertrophy</h4>
                <ul className="program-list">
                    <li>Stimulate muscle fibers to grow larger by performing controlled resistance training.</li>
                </ul>
                <h4 className="program-div-heading4">2. Increase Strength </h4>
                <ul className="program-list">
                    <li>Build the foundation for lifting heavier weights, which further promotes muscle growth.</li>
                </ul>
                <h4 className="program-div-heading4">3. Enhance Muscle Definition</h4>
                <ul className="program-list">
                    <li>Reduce fat while increasing lean muscle mass for a more defined appearance.</li>
                </ul>
                <h4 className="program-div-heading4">4. Boost Metabolism</h4>
                <ul className="program-list">
                    <li>Develop lean muscle, which increases calorie burn even at rest.</li>
                </ul>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Components</h2>
                <p className="program-div-p">1. Warm-Up</p>
                <p className="program-div-p">2. Strength and Hypertrophy Training</p>
                <p className="program-div-p">3. Split Training Routine</p>
                <p className="program-div-p">4. Progressive Overload</p>
                <p className="program-div-p">5. Proper Nutrition</p>
                <p className="program-div-p">6. Recovery</p>
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
                        <td>Bench Press, Incline Dumbbell Press, Chest Fly, Tricep Dips, Overhead Extensions</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>Pull-Ups, Bent-Over Rows, Deadlifts, Barbell Curls, Hammer Curls</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>Squats, Leg Press, Romanian Deadlifts, Walking Lunges, Calf Raises</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>Overhead Press, Lateral Raises, Arnold Press, Plank, Russian Twists</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>Squats, Bench Press, Deadlifts, Pull-Ups, Dumbbell Rows</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>Light cardio, yoga, or mobility training</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Complete rest</td>
                    </tr>
                </table>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Benefit</h2>
                <p className="program-div-p">1. Increased Muscle Mass</p>
                <p className="program-div-p">2. Improved Strength and Endurance</p>
                <p className="program-div-p">3. Better Posture and Balance</p>
                <p className="program-div-p">4. Enhanced Confidence</p>
                <p className="program-div-p">5. Metabolic Boost</p>
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

export default MuscleGain;