import React from "react";
import '../styles/program.css';
import '../styles/common.css';

const Flexibility = () => {
    return(
        <div className="program-con">
            <h1 className="program-heading">Flexibility Program</h1>
            <hr />
            <p className="program-p">The Flexibility Program is designed to improve the range of motion (ROM) of joints and muscles, enhance posture, reduce the risk of injuries, and promote overall physical well-being. This program focuses on stretching exercises and mobility techniques that improve muscle elasticity and joint mobility, making it suitable for individuals of all fitness levels.</p>
            <hr />
            <div>
                <h2 className="program-div-heading">Objective</h2>
                <h4 className="program-div-heading4">1. Improve Range of Motion (ROM)</h4>
                <ul className="program-list">
                    <li>Stretch muscles and tendons to allow better joint movement.</li>
                </ul>
                <h4 className="program-div-heading4">2. Reduce Muscle Tightness </h4>
                <ul className="program-list">
                    <li>Alleviate stiffness caused by prolonged sitting, intense workouts, or inactivity.</li>
                </ul>
                <h4 className="program-div-heading4">3. Enhance Athletic Performance</h4>
                <ul className="program-list">
                    <li>Increase agility, speed, and fluidity of movements.</li>
                </ul>
                <h4 className="program-div-heading4">4. Prevent Injuries</h4>
                <ul className="program-list">
                    <li>Prepare the body for physical activities by loosening tight muscles.</li>
                </ul>
                <h4 className="program-div-heading4">5. Promote Relaxation and Recovery</h4>
                <ul className="program-list">
                    <li>Relieve stress and tension while aiding muscle recovery after exercise.</li>
                </ul>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Components</h2>
                <p className="program-div-p">1. Warm-Up</p>
                <p className="program-div-p">2. Dynamic Stretching</p>
                <p className="program-div-p">3. Static Stretching</p>
                <p className="program-div-p">4. Mobility Drills</p>
                <p className="program-div-p">5. Relaxation Techniques</p>
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
                        <td>Cat-Cow Pose, Child’s Pose, Forward Fold, Butterfly Stretch</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>Hamstring Stretch, Lunges, Hip Flexor Stretch, Seated Straddle</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>Chest Opener, Shoulder Rolls, Neck Stretches, Tricep Stretch</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>Cobra Stretch, Seated Spinal Twist, Side Stretch, Back Extensions</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>Arm Swings, Leg Kicks, High Knees, Walking Lunges</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>Light yoga, foam rolling, or meditation</td>
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

export default Flexibility;