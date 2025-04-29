import React, { useState, useEffect } from "react";
import { ref, update, get } from "firebase/database";
import { database } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const VerificationDetail = ({username, level, type}) => {
    const navigate = useNavigate();
    const [detail, setDetail] = useState({
        mobilenumber: '',
        otp: '',
    });
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userRef = ref(database, `users/${username}`);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    setDetail(prevState => ({
                        ...prevState,
                        mobilenumber: userData.mobilenumber || '',
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

    const handleVerify = () => {
        if(!detail.otp){
            setError("Please Enter OTP.");
            setMsg(null);
        }
        else if(detail.otp != 123456){
            setError("Please Enter Valid OTP.");
            setMsg(null);
        }
        else{
            setMsg("Varified !");
            setError(null);
        }
    }

    const handleResend = () => {
        alert("OTP sent on your Mobile Number : +91 " + detail.mobilenumber);
    }

    const handlePrvious = () => {
        level('2')
    }

    const handleNext = () => {
        if (msg){
            navigate('/home', { state: { username, type } });
        }
    }
    
    return (
        <div className="contact-con">
            <div className="detail-label-div">
                <label className="detail-verify-label">OTP:</label>
                <input 
                    className={error ? "detail-error-verify-input" : "detail-verify-input"}
                    type="text" 
                    value={detail.otp}
                    onChange={(e) => handleChange(e, 'otp')}
                />
            </div>
            <div className="otp-btn-div">
                <button className="otp-btn" onClick={handleVerify}>Verify</button>
                <button className="otp-btn" onClick={handleResend}>Resend</button>
            </div>
            {error ? <p className="detail-verify-error-text detail-verify-error">{error}</p> : ''}
            {msg ? <p className="detail-verify-text detail-verify">{msg}</p> : ''}
            <div className="">
                <button className="pre-btn btn" onClick={handlePrvious}>Previous</button>
                <button className="next-btn btn" onClick={handleNext}>Finish</button>
            </div>
        </div>
    );
}

export default VerificationDetail;