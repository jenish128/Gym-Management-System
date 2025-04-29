import React, { useState, useEffect } from "react";
import { Link, useLocation, Navigate, useNavigate } from "react-router-dom";
import { ref, update, get } from "firebase/database";
import { database } from "../firebase";
import ImgPopUp from "../components/ImgPopUp";
import profile from "../media/image/profile.png";

import "../styles/profile.css";
import "../styles/common.css";

const Profile = () => {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [isImg, setIsImg] = useState(false);

    const [value, setValue] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        dateofbirth: "",
        age: "",
        email: "",
        mobileno: "",
        address: "",
    });

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
                    setValue((prevState) => ({
                        ...prevState,
                        firstname: userData.firstname || "",
                        lastname: userData.lastname || "",
                        gender: userData.gender || "",
                        dateofbirth: userData.dateofbirth || "",
                        age: userData.age || "",
                        email: userData.gmail || "",
                        mobileno: userData.mobilenumber || "",
                        address: userData.address || "",
                    }));
                } else {
                    console.log("No data available");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [username, type]);

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
                profileimage: image,
            });
            setProfileImage(image);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
        setIsImg(true);
    };

    const handleImageRemove = async () => {
        try {
            const userRef = ref(database, `${type}/${username}`);
            await update(userRef, {
                profileimage: "",
            });
            setProfileImage(null);
        } catch (error) {
            console.error("Error removing image:", error);
        }
        setIsImg(false);
    };

    const handleSave = async () => {
        try {
            const userRef = ref(database, `${type}/${username}`);
            await update(userRef, {
                firstname: value.firstname,
                lastname: value.lastname,
                gender: value.gender,
                dateofbirth: value.dateofbirth,
                age: calculateAge(value.dateofbirth),
                address: value.address,
            });
            alert("data Saved !!")
        } catch (error) {
            console.error("Error updating user details:", error);
        }
    };

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleLogout = () => {
        navigate('/home');
    }

    return (
        <div className="profile-con row">
            <div profile-btn-div>
                <button className="logout-btn btn" onClick={handleLogout}>Logout</button>
            </div>
            <ImgPopUp
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                onUpload={handleImageUpload}
            />
            <div className="profile-img-part column">
                {profileImage ? (
                    <img src={profileImage} alt="Profile" className="profile-image" />
                ) : (
                    <img src={profile} alt="Default Profile" className="profile-image" />
                )}
                {isImg ? (
                    <button className="profile-btn btn" onClick={handleOpenPopup}>
                        Update
                    </button>
                ) : (
                    <button className="profile-btn btn" onClick={handleOpenPopup}>
                        Add
                    </button>
                )}
                {isImg && (
                    <button className="profile-btn btn" onClick={handleImageRemove}>
                        Remove
                    </button>
                )}
            </div>
            <hr className="profile-part" />
            <div className="profile-detail-part column">
                <h1 className="profile-heading">Profile</h1>
                <div className="profile-input-div">
                    <div>
                        <label className="profile-label">First Name:</label>
                        <input
                            type="text"
                            className="profile-input-first"
                            value={value.firstname}
                            onChange={(e) =>
                                setValue({ ...value, firstname: e.target.value })
                            }
                        />
                        <label className="profile-label">Last Name:</label>
                        <input
                            type="text"
                            className="profile-input-first"
                            value={value.lastname}
                            onChange={(e) =>
                                setValue({ ...value, lastname: e.target.value })
                            }
                        />
                    </div>
                    <div className="row">
                        <label className="profile-label">Gender:</label>
                        <div className="profile-gender-label">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={value.gender === "male"}
                                    onChange={(e) =>
                                        setValue({ ...value, gender: e.target.value })
                                    }
                                />{" "}
                                Male
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={value.gender === "female"}
                                    onChange={(e) =>
                                        setValue({ ...value, gender: e.target.value })
                                    }
                                />{" "}
                                Female
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="profile-label">Date Of Birth:</label>
                        <input
                            className="profile-input-second"
                            type="date"
                            value={value.dateofbirth}
                            onChange={(e) =>
                                setValue({ ...value, dateofbirth: e.target.value })
                            }
                        />
                        <label className="profile-label">Age:</label>
                        <input
                            readOnly
                            type="text"
                            className="profile-input-third"
                            value={value.age}
                        />
                    </div>
                    <div>
                        <label className="profile-label">Email:</label>
                        <input
                            readOnly
                            type="text"
                            className="profile-input-forth"
                            value={value.email}
                        />
                    </div>
                    <div>
                        <label className="profile-label">Mobile No:</label>
                        <input
                            readOnly
                            className="profile-input-fifth"
                            type="text"
                            value={"+91 " + value.mobileno}
                        />
                    </div>
                    <div>
                        <label className="profile-textarea-label">Address:</label>
                        <textarea
                            className="profile-textarea"
                            value={value.address}
                            onChange={(e) =>
                                setValue({ ...value, address: e.target.value })
                            }
                        />
                    </div>
                    <div className="profile-btn-div">
                        <button onClick={handleSave} className="save-btn btn">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
