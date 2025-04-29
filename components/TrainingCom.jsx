import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ref, update, get } from "firebase/database";
import { database } from "../firebase";

import '../styles/common.css';
import '../styles/home.css';

import TrainingIcon from '../media/image/training.png';

const TrainingCom = ({id, username, type}) => {
    const navigate = useNavigate();

    const handleFirst = () => {
        // if (!username)
        //     navigate('/login');
        // else 
            navigate('/program', {state: {program: '1'}});
    }
    const handleSecond = () => {
        // if (!username)
        //     navigate('/login');
        // else 
            navigate('/program', {state: {program: '3'}});
    }
    const handleThird = () => {
        // if (!username)
        //     navigate('/login');
        // else 
            navigate('/program', {state: {program: '5'}});
    }
    const handleForth = () => {
        // if (!username)
        //     navigate('/login');
        // else 
            navigate('/program', {state: {program: '2'}});
    }
    const handleFifth = () => {
        // if (!username)
        //     navigate('/login');
        // else 
            navigate('/program', {state: {program: '4'}});
    }
    const handleSixth = () => {
        // if (!username)
        //     navigate('/login');
        // else 
            navigate('/program', {state: {program: '6'}});
    }
    
    return (
        <div id={id}>
            <h1 className="titleb">Program</h1>
            <div className="training-content row">
                <div className="training">
                    <div className="training-div row">
                        <div>
                            <img src={TrainingIcon} alt="" className="training-img"/>
                        </div>
                        <div className="training-subdiv">
                            <h1>Basic Fitness Program</h1>
                            <p>Designed for general health and wellness, with a focus on cardio, flexibility, and moderate strength training.</p>
                            <p>Suitable for beginners or those looking to maintain a balanced level of fitness.</p>
                            <button className="training-btn btn" onClick={handleFirst}>More</button>
                        </div>
                    </div>
                    <div className="training-div row">
                        <div>
                            <img src={TrainingIcon} alt="" className="training-img"/>
                        </div>
                        <div className="training-subdiv">
                            <h1>Muscle Gain Program</h1>
                            <p>Focuses on hypertrophy (muscle growth) through strength training exercises.</p>
                            <p>Includes weightlifting routines, progressive overload, and higher protein intake guidance.</p>
                            <button className="training-btn btn" onClick={handleSecond}>More</button>
                        </div>
                    </div>
                    <div className="training-div row">
                        <div>
                            <img src={TrainingIcon} alt="" className="training-img"/>
                        </div>
                        <div className="training-subdiv">
                            <h1>Weight Loss Program</h1>
                            <p>Aims to help members reduce body fat through a combination of cardio, strength, and HIIT (high-intensity interval training).</p>
                            <p>Often paired with nutrition guidance to achieve weight loss goals safely.</p>
                            <button className="training-btn btn" onClick={handleThird}>More</button>
                        </div>
                    </div>
                </div>
                <div className="training">
                    <div className="training-div row">
                        <div>
                            <img src={TrainingIcon} alt="" className="training-img"/>
                        </div>
                        <div className="training-subdiv">
                            <h1>Strength Training Program</h1>
                            <p>Emphasizes building raw strength with compound movements like squats, deadlifts, and bench presses.</p>
                            <p>Ideal for those looking to increase muscle strength and endurance.</p>
                            <button className="training-btn btn" onClick={handleForth}>More</button>
                        </div>
                    </div>
                    <div className="training-div row">
                        <div>
                            <img src={TrainingIcon} alt="" className="training-img"/>
                        </div>
                        <div className="training-subdiv">
                            <h1>Flexibility Program</h1>
                            <p>Aims to improve flexibility, joint health, overall mobility, and posture.</p>
                            <p>Includes stretching, yoga, and dynamic movement exercises to reduce the risk of injury.</p>
                            <button className="training-btn btn" onClick={handleFifth}>More</button>
                        </div>
                    </div>
                    <div className="training-div row">
                        <div>
                            <img src={TrainingIcon} alt="" className="training-img"/>
                        </div>
                        <div className="training-subdiv">
                            <h1>Sports-Specific Training</h1>
                            <p>Tailored for athletes in sports like soccer, basketball, or martial arts.
                            </p>
                            <p>Includes agility, speed, and strength exercises to enhance athletic performance.</p>
                            <button className="training-btn btn" onClick={handleSixth}>More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainingCom;