import React, { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";

import '../styles/common.css';
import '../styles/home.css';

const Navbar = ({ username, type }) => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleProfile = () => {
    navigate('/profile', { state: { username, type } });
  };

  // New function to navigate to the BMI Calculator page
  const handleBMI = () => {
    navigate('/bmi'); // Ensure a corresponding route exists in App.js
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = ref(database, `${type}/${username}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.val();
          if (userData.profileimage) {
            setProfileImage(userData.profileimage);
          }
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [username, type]);

  return (
    <div className="navcon row">
      <button className="nav-title" onClick={() => handleScroll('home')}>
        Dynamic <em className="nav-title-em"> Fitness </em>
      </button>

      <ul className="nav-links">
        <li>
          <button className="link-btn" onClick={() => handleScroll('home')}>
            Home
          </button>
        </li>
        <li>
          <button className="link-btn" onClick={() => handleScroll('about')}>
            About Us
          </button>
        </li>
        <li>
          <button className="link-btn" onClick={() => handleScroll('class')}>
            Class
          </button>
        </li>
        <li>
          <button className="link-btn" onClick={() => handleScroll('contact')}>
            Contact Us
          </button>
        </li>
        {/* <li>
          <button className="link-btn" onClick={() => window.location.href = 'http://localhost/Gym-System/'}>
            Gym-System Login
          </button>
        </li> */}
        <li>
          {/* BMI Calculator button */}
          <button className="link-btn" onClick={handleBMI}>
            BMI Calculator
          </button>
        </li>
        <li>
          {username ? (
            <button
              className={
                profileImage
                  ? "nav-profile-btn btn row"
                  : "nav-profile-btn-width btn row"
              }
              onClick={handleProfile}
            >
              {profileImage ? (
                <img src={profileImage} alt="" className="profile-img" />
              ) : (
                ""
              )}
              <h4 className="profile-text">Profile</h4>
            </button>
          ) : (
            <button className="link-btn" onClick={handleLogin}>
              Log in
            </button>
            
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
