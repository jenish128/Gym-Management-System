import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ref, update, get } from "firebase/database";
import { database } from "../firebase";

import PersonalDetail from '../components/PersonalDetail';
import ContactDetail from '../components/ContactDetail';
import VerificationDetail from "../components/VerificationDetail";
import ImgPopUp from '../components/ImgPopUp';

import '../styles/detail.css';

import profile from '../media/image/profile.png';

const Detail = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [isImg, setIsImg] = useState(false);
    const [detailLevel, setDetailLevel] =useState('1');
    
    const location = useLocation();
    const username = location.state?.username;
    const type = location.state?.type;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userRef = ref(database, `${type}/${username}`);
                const snapshot = await get(userRef);

                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    if (userData.profileimage) {
                        setProfileImage(userData.profileimage);
                        setIsImg(true);
                    }
                } else {
                    console.log("No data available");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [username]);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleImageUpload = async (image) => {        
        try {
            const userRef = ref(database, `${type}/${username}`);
            await update(userRef, {
                profileimage: image
            });
            setProfileImage(image);
        } catch (error) {}
        setIsImg(true);
    };

    const handleImageRemove = async () => {        
        try {
            const userRef = ref(database, `users/${username}`);
            await update(userRef, {
                profileimage: ''
            });
            setProfileImage(null);
        } catch (error) {}
        setIsImg(false);
    };

    const handleLevel = (level) => {
        setDetailLevel(level);
    }

    return (
        <div className="detail-container column">
            <ImgPopUp 
                isOpen={isPopupOpen} 
                onClose={handleClosePopup} 
                onUpload={handleImageUpload}
            />
            <div className="circle-line">
                <div className="top-div column">
                    <h2 className="circle-color">1</h2>
                    <h6 className="circle-text">Personal Details</h6>
                </div>
                {(detailLevel == '2' || detailLevel == '3') ? <hr className="hor-line-color" /> : <hr className="hor-line" />}
                <div className="top-div column">
                    <h2 className={(detailLevel == '2' || detailLevel == '3') ? "circle-color" : "circle"}>2</h2>
                    <h6 className="circle-text">Contact Details</h6>
                </div>
                {detailLevel == '3' ? <hr className="hor-line-color" /> : <hr className="hor-line" />}
                <div className="top-div column">
                    <h2 className={detailLevel == '3' ? "circle-color" : "circle"}>3</h2>
                    <h6 className="circle-text">Verification</h6>
                </div>
            </div>
            <div className="detail row">
                <div className="img-part column">
                    {profileImage ? (
                        <img src={profileImage} alt="Profile" className="profile-pic" />
                    ) : (
                        <img src={profile} alt="Default Profile" className="profile-pic" />
                    )}
                    {isImg ? <button className="profile-btn btn" onClick={handleOpenPopup}>Update</button> : <button className="profile-btn btn" onClick={handleOpenPopup}>Add</button>}
                    {isImg ? <button className="profile-btn btn" onClick={handleImageRemove}>Remove</button> : ''}
                </div>
                <hr className="part" />
                <div className="detailpart">
                    {detailLevel == '1' ? <PersonalDetail username={username} level={handleLevel} type={type}/> : ''}
                    {detailLevel == '2' ? <ContactDetail username={username} level={handleLevel} type={type}/> : ''}
                    {detailLevel == '3' ? <VerificationDetail username={username} level={handleLevel} type={type}/> : ''}
                </div>
            </div>
        </div>
    );
}

export default Detail;
