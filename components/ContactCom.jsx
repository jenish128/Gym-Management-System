import React, {useState, useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ref, update, get, set } from "firebase/database";
import { database } from "../firebase";

import '../styles/common.css';
import '../styles/home.css';


const ContactCon = ({id, username, type}) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [subject, setSubject] = useState(null);
    const [msg, setMsg] = useState(null);

    const handleSubmit = async() => {
        if(!username)
            navigate('/login');
        else{
            await set(ref(database, 'msg/' + username), {
                email: email,
                subject: subject,
                msg: msg
            });
            alert("Message Send Successfully!");
        }
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userRef = ref(database, `${type}/${username}`);
                const snapshot = await get(userRef);

                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    if (userData.gmail) {
                        setEmail(userData.gmail);
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
    
    return (
        <div id={id} className="contact-con">
            <div className="contact-content row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.3416258043367!2d70.76521217533605!3d22.28236067969949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbbfcdeb3e33%3A0x11a782bf6775a71d!2sAtmiya%20University!5e1!3m2!1sen!2sin!4v1730874868370!5m2!1sen!2sin"  className="map"/>
                {/* <div className="contact-form">
                    <h1>form</h1>
                    <div className="sug-labeldiv">
                        <label className="sug-label">Email : </label>
                        {username ? <input
                            className="sug-input"
                            type="text"
                            value={email}
                            readOnly
                        /> : <input
                        className="sug-input"
                        type="text"
                        />}
                    </div>
                    <div className="sug-labeldiv">
                        <label className="sug-label">subject : </label>
                        <input
                            className="sug-input"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="sug-labeldiv">
                        <label className="sug-label">Description:</label>
                        <textarea 
                            className="sug-textarea"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        />
                    </div>
                    <button className="sug-btn btn" onClick={handleSubmit}>Submit</button>
                </div> */}
            </div>
        </div>
    );
}

export default ContactCon;