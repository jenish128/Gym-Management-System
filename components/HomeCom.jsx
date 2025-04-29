import React from "react";
import { useNavigate } from "react-router-dom";

import '../styles/common.css';
import '../styles/home.css';
import videoBg from '../media/video/video.mp4';

const HomeCon = ({ id, username, type }) => {
    const navigate = useNavigate();

    const handleScroll = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    const handleStart = () => {
        if (!username) navigate('/login');
        else handleScroll('about');
    };

    const handleBMI = () => {
        navigate('/bmi'); // Navigate to BMI Calculator page
    };

    return (
        <div id={id} className="background-video">
            <video autoPlay loop muted playsInline>
                <source src={videoBg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="overlay"></div>
            <div className="content">
                <span className="home-title">
                    <em className="home-title-em">Get Fit,</em> Stay Healthy, 
                    <em className="home-title-em"> Live Happy!</em>
                </span>
                <p className="home-p">
                    Welcome to Dynamic Fitness!💪🔥Your ultimate fitness destination with 
                    state-of-the-art equipment, expert trainers, and personalized workout plans. 
                    Join us today and unleash your full potential! 🚀
                </p>
                {/* <button className="start-btn btn" onClick={handleStart}>Get Started !!!</button> */}
                <button className="bmi-btn btn" onClick={handleBMI}>Check BMI</button> {/* Added BMI Button */}
            </div>
        </div>
    );
}

export default HomeCon;
