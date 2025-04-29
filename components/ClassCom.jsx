import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Schedule from '../media/image/schedule.png';
import Plan from '../media/image/plan.png';
import Attendance from '../media/image/attendance.png';
import Progress from '../media/image/progress.png';

const ClassCom = ({id, username, type}) => {
    const navigate = useNavigate();
    const handleSchedule = () => {
        // if (!username)
        //     navigate('/login');
        // else 
            navigate('/class', { state: { username, type: 'users', classes: "1" } });
    }
    const handlePlan = () => {
        // if (!username)
        //     navigate('/login');
        // else 
        navigate('/class', { state: { username, type: 'users', classes: "2" } });
    }
    const handleAttendance = () => {
        // if (!username)
        //     navigate('/login');
        // else 
        navigate('/class', { state: { username, type: 'users', classes: "3" } });
    }
    const handleProgress = () => {
        // if (!username)
        //     navigate('/login');
        // else 
        navigate('/class', { state: { username, type: 'users', classes: "4" } });
    }

    return(
        <div id={id} className="class-background-image">
            <div className="overlay"></div>
            <div className="class-con">
                <button className="class-btn" onClick={handleSchedule}>
                    <div className="class-box">
                        <img src={Schedule} alt="" className="class-img"/>
                        <h3 className="class-heading">Schedule</h3>
                    </div>
                </button>
                <button className="class-btn" onClick={handlePlan}>
                    <div className="class-box">
                        <img src={Plan} alt="" className="class-img"/>
                        <h3 className="class-heading">Diet Plan</h3>
                    </div>
                </button>
                <button className="class-btn" onClick={handleAttendance}>
                    <div className="class-box">
                        <img src={Attendance} alt="" className="class-img"/>
                        <h3 className="class-heading">Attendance</h3>
                    </div>
                </button>
                <button className="class-btn" onClick={handleProgress}>
                    <div className="class-box">
                        <img src={Progress} alt="" className="class-img"/>
                        <h3 className="class-heading">Progress</h3>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default ClassCom;