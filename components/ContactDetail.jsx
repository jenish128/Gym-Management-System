import React, { useState, useEffect } from "react";
import { ref, update, get } from "firebase/database";
import { database } from "../firebase";

const ContactDetail = ({username, level, type}) => {
    const [detail, setDetail] = useState({
        mobilenumber: '',
        gmail: '',
        address: ''
    });
    const [error, setError] = useState({
        mobilenumber: '',
        gmail: '',
        address: ''
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
                        mobilenumber: userData.mobilenumber || '',
                        gmail: userData.gmail || '',
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

    const handlePrvious = () => {
        level('1')
    }

    const handleNext = async () => {
        setError({
            mobileNumber: '',
            gmail: '',
            address: '',
        });
        let isError = false;

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValidation = regex.test(detail.gmail);
        if (detail.gmail === '') {
            setError(prevState => ({
                ...prevState,
                ['gmail']: 'Email is required.'
            }));
            isError = true;
        } else if (emailValidation === false) {
            setError(prevState => ({
                ...prevState,
                ['gmail']: 'Enter a valid email address.' 
            }));
            isError = true;
        }

        const mobileRegex = /^[6-9]\d{9}$/;
        const mobileValidation = mobileRegex.test(detail.mobilenumber);

        if (detail.mobilenumber === '') {
            setError(prevState => ({
                ...prevState,
                ['mobilenumber']: 'Mobile number is required.'
            }));
            isError = true;
        } else if (!mobileValidation) {
            setError(prevState => ({
                ...prevState,
                ['mobilenumber']: 'Enter a valid mobile number.'
            }));
            isError = true;
        }

        if (detail.address === '') {
            setError(prevState => ({
                ...prevState,
                ['address']: 'Address is required.'
            }));
            isError = true;
        }
    
        if (!isError) {
            try {
                const userRef = ref(database, `${type}/${username}`);
                await update(userRef, {
                    gmail: detail.gmail,
                    mobilenumber: detail.mobilenumber,
                    address: detail.address
                });
            } catch (error) {
                console.error("Error updating user details: ", error);
            }
            level('3');
        }
    
    };
    
    return (
        <div className="contact-con ">
            <div className="detail-label-div">
                <label className="detail-label">email:</label>
                <input 
                    type="text" 
                    className={error.gmail ? "detail-error-inputs" : "detail-inputs"}
                    value={detail.gmail}
                    onChange={(e) => handleChange(e, 'gmail')}
                />
            </div>
            {error.gmail && <p className="detail-error-text detail-error1">{error.gmail}</p>}
            <div className="detail-label-div">
                <label className="detail-label">Mobile Number:</label>
                <input 
                    className={error.mobilenumber ? "detail-error-inputs" : "detail-inputs"}
                    type="text" 
                    value={detail.mobilenumber}
                    onChange={(e) => handleChange(e, 'mobilenumber')}
                />
            </div>
            {error.mobilenumber && <p className="detail-error-text detail-error2">{error.mobilenumber}</p>}
            <div className="detail-label-div">
                <label className="detail-label">Address:</label>
                <textarea 
                    className={error.mobilenumber ? "detail-error-textarea" : "detail-textarea"}
                    value={detail.address}
                    onChange={(e) => handleChange(e, 'address')}
                />
            </div>
            {error.address && <p className="detail-error-text detail-error5">{error.address}</p>}
            <div className="">
                <button className="pre-btn btn" onClick={handlePrvious}>Previous</button>
                <button className="next-btn btn" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default ContactDetail;