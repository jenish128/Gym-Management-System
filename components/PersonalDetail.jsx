import React, { useState, useEffect } from "react";
import { ref, update, get } from "firebase/database";
import { database } from "../firebase";

const PersonalDetail = ({ username, level, type }) => {
    const [detail, setDetail] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        dateofbirth: '',
        age: ''
    });
    const [error, setError] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        dateofbirth: '',
    });

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userRef = ref(database, `${type}/${username}`);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    setDetail(prevState => ({
                        ...prevState,
                        firstname: userData.firstname || '',
                        lastname: userData.lastname || '',
                        gender: userData.gender || '',
                        dateofbirth: userData.dateofbirth || ''
                    }));
                }
            } catch (error) {
                console.error("Error fetching user details: ", error);
            }
        };

        fetchUserDetails();
    }, [username]);

    const handleChange = (event, field) => {
        setDetail(prevState => ({
            ...prevState,
            [field]: event.target.value
        }));
    };

    const handleNext = async () => {
        setError({
            firstname: '',
            lastname: '',
            gender: '',
            dateofbirth: '',
        });
        let isError = false;
        if (detail.firstname === '') {
            setError(prevState => ({
                ...prevState,
                firstname: 'First name is required.'
            }));
            isError = true;
        }
        if (detail.lastname === '') {
            setError(prevState => ({
                ...prevState,
                lastname: 'Last name is required.'
            }));
            isError = true;
        }
        if (detail.gender === '') {
            setError(prevState => ({
                ...prevState,
                gender: 'Gender is required.'
            }));
            isError = true;
        }
        if (detail.dateofbirth === '') {
            setError(prevState => ({
                ...prevState,
                dateofbirth: 'Date of birth is required.'
            }));
            isError = true;
        }
    
        if (!isError) {
            const calculatedAge = calculateAge(detail.dateofbirth);
            try {
                const userRef = ref(database, `${type}/${username}`);
                await update(userRef, {
                    firstname: detail.firstname,
                    lastname: detail.lastname,
                    gender: detail.gender,
                    dateofbirth: detail.dateofbirth,
                    age: calculatedAge
                });
            } catch (error) {
                console.error("Error updating user details: ", error);
            }
            level('2');
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
    
    return (
        <div className="personal-con">
            <div className="detail-label-div">
                <label className="detail-label">First Name:</label>
                <input 
                    type="text" 
                    className={error.firstname ? "detail-error-input" : "detail-input"}
                    value={detail.firstname}
                    onChange={(e) => handleChange(e, 'firstname')}
                />
            </div>
            {error.firstname && <p className="detail-error-text detail-error1">{error.firstname}</p>}
            <div className="detail-label-div">
                <label className="detail-label">Last Name:</label>
                <input 
                    className={error.lastname ? "detail-error-input" : "detail-input"}
                    type="text" 
                    value={detail.lastname}
                    onChange={(e) => handleChange(e, 'lastname')}
                />
            </div>
            {error.lastname && <p className="detail-error-text detail-error2">{error.lastname}</p>}
            <div className="detail-label-div">
                <label className="detail-label">Gender:</label>
                <div className="gender-label">
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="male"
                            checked={detail.gender === "male"}
                            onChange={(e) => handleChange(e, 'gender')}
                        /> Male
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            value="female"
                            checked={detail.gender === "female"}
                            onChange={(e) => handleChange(e, 'gender')}
                        /> Female
                    </label>
                </div>
            </div>
            {error.gender && <p className="detail-error-text detail-error3">{error.gender}</p>}
            <div className="detail-label-div">
                <label className="detail-label">Date Of Birth:</label>
                <input
                    className={error.dateofbirth ? "detail-error-input" : "detail-input"}
                    type="date"
                    value={detail.dateofbirth}
                    onChange={(e) => handleChange(e, 'dateofbirth')}
                />
            </div>
            {error.dateofbirth && <p className="detail-error-text detail-error4">{error.dateofbirth}</p>}
            <div className="">
                <button className="next-btn btn" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default PersonalDetail;
