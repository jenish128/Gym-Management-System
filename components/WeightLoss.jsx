import React from "react";
import '../styles/program.css';
import '../styles/common.css';

const WeightLoss = () => {
    return(
        <div className="program-con">
            <h1 className="program-heading">Weight Loss Program</h1>
            <hr />
            <p className="program-p">The Weight Loss Program is designed to help individuals shed excess body fat while building healthy habits to maintain a sustainable lifestyle. It incorporates a combination of proper nutrition, regular exercise, and behavioral changes to achieve and maintain a healthy weight. This program focuses on calorie balance (calorie intake vs. calorie expenditure), cardiovascular fitness, strength training, and diet optimization.</p>
            <hr />
            <div>
                <h2 className="program-div-heading">Objective</h2>
                <h4 className="program-div-heading4">1. Fat Loss</h4>
                <ul className="program-list">
                    <li>Reduce overall body fat percentage by creating a calorie deficit (burning more calories than consumed).</li>
                </ul>
                <h4 className="program-div-heading4">2. Muscle Preservation </h4>
                <ul className="program-list">
                    <li>Maintain lean muscle mass through resistance training while losing fat.</li>
                </ul>
                <h4 className="program-div-heading4">3. Boost Metabolism</h4>
                <ul className="program-list">
                    <li>Enhance metabolic rate with strength training and balanced meals.</li>
                </ul>
                <h4 className="program-div-heading4">4. Improve Overall Health</h4>
                <ul className="program-list">
                    <li>Reduce the risk of obesity-related conditions such as diabetes, heart disease, and high blood pressure.</li>
                </ul>
                <h4 className="program-div-heading4">5. Build Sustainable Habits</h4>
                <ul className="program-list">
                    <li>Develop healthy eating patterns, regular exercise routines, and improved mental well-being.</li>
                </ul>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Components</h2>
                <p className="program-div-p">1. Exercise</p>
                <p className="program-div-p">2. Nutrition</p>
                <p className="program-div-p">3. Lifestyle Changes</p>
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
                        <td>Cardio: 45-minute brisk walk or jog + 10 minutes of stretching.</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>Strength Training: Full-body workout (squats, lunges, push-ups, planks).</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>Cardio: 30-minute cycling or swimming + yoga for flexibility.</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>Strength Training: Upper body focus (pull-ups, push-ups, shoulder presses).</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>Cardio: HIIT session (20–30 minutes).</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>Light activity: Yoga, Pilates, or a recreational sport.</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Rest or active recovery: Light stretching or walking.</td>
                    </tr>
                </table>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Benefit</h2>
                <p className="program-div-p">1. Physical Health Benefits</p>
                <p className="program-div-p">2. Mental Health Benefits</p>
                <p className="program-div-p">3. Lifestyle Benefits</p>
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

export default WeightLoss;