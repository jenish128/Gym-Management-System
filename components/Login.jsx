import React, { useState, useEffect } from "react";
import '../styles/account.css';
import { useNavigate } from "react-router-dom";
import { SiGoogle } from 'react-icons/si';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ref, get, set } from "firebase/database";
import { database } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    
    const [isLabelVisible, setIsLabelVisible] = useState({ email: false, password: false });
    const [value, setValue] = useState({ email: '', password: '' });
    const [isHide, setIsHide] = useState(true);
    const [error, setError] = useState({ email: '', password: '' });
    const [isFound, setIsFound] = useState(false);

    const handleFocus = (field) => {
        setIsLabelVisible(prevState => ({ ...prevState, [field]: true }));
    };

    const handleBlur = (field) => {
        if (value[field] === '') {
            setIsLabelVisible(prevState => ({ ...prevState, [field]: false }));
        }
    };

    const handleChange = (event, field) => {
        setValue(prevState => ({ ...prevState, [field]: event.target.value }));
    };

    const handleHide = () => {
        setIsHide(!isHide);
    };
    
    const handleLogin = async () => {
        setError({ email: '', password: '' });
        let isError = false;

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.email) {
            setError(prevState => ({ ...prevState, email: 'Email is required.' }));
            isError = true;
        } else if (!regex.test(value.email)) {
            setError(prevState => ({ ...prevState, email: 'Enter a valid email address.' }));
            isError = true;
        }

        if (!value.password) {
            setError(prevState => ({ ...prevState, password: 'Password is required.' }));
            isError = true;
        } else if (value.password.length < 6) {
            setError(prevState => ({ ...prevState, password: 'Password must be at least 6 characters.' }));
            isError = true;
        }

        if (isError) return;

        // Check for admin
        const adminRef = ref(database, "admin");
        const adminSnapshot = await get(adminRef);
        if (adminSnapshot.exists()) {
            const admins = adminSnapshot.val();
            for (let user in admins) {
                if (admins[user].email === value.email && admins[user].password === value.password) {
                    setIsFound(true);
                    alert("Admin login successful");
                    navigate('/adminpanel', { replace: true, state: { username: value.email.split('@')[0], type: 'admin' } });
                    return;
                }
            }
        }

        // Check for Trainer
        const trainerRef = ref(database, "trainer");
        const trainerSnapshot = await get(trainerRef);
        if (trainerSnapshot.exists()) {
            const trainers = trainerSnapshot.val();
            for (let user in trainers) {
                if (trainers[user].email === value.email && trainers[user].password === value.password) {
                    setIsFound(true);
                    alert("Trainer login successful");
                    navigate('/trainerpanel', { replace: true, state: { username: value.email.split('@')[0], type: 'trainer' } });
                    return;
                }
            }
        }

        // Check for users
        const usersRef = ref(database, "users");
        const usersSnapshot = await get(usersRef);
        if (usersSnapshot.exists()) {
            const users = usersSnapshot.val();
            for (let user in users) {
                if (users[user].email === value.email && users[user].password === value.password) {
                    setIsFound(true);
                    alert("User login successful");
                    navigate('/home', { state: { username: value.email.split('@')[0], type: 'users' } });
                    return;
                }
            }
        }

        if (!isFound) {
            alert("Username or password is incorrect");
        }
    };

    const handleGoogleLogin = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
            const result = await signInWithPopup(auth, provider);
            const email = result.user.email;
            const username = email.split('@')[0];
            const usersRef = ref(database, "google");
            const snapshot = await get(usersRef);

            if (snapshot.exists() && Object.values(snapshot.val()).some(user => user.email === email)) {
                alert("Login successful");
                navigate('/home', { state: { username, type: 'google' } });
            } else {
                await set(ref(database, 'google/' + username), { email });
                alert("Login successfully!");
                navigate('/detail', { state: { username, type: 'google' } });
            }
        } catch (error) {
            console.error("Google login error:", error);
        }
    };

    return (
        <div className="login-container">
            <h2 className="heading-com">Login</h2>
            {isLabelVisible.email && <label className={error.email ? "error-label email-label1" : "label email-label1"}>Email</label>}
            <input 
                className={error.email ? "error-inputs" : "inputs"}
                type="text" 
                placeholder="Email"
                value={value.email}
                onChange={(e) => handleChange(e, 'email')} 
                onFocus={() => handleFocus('email')} 
                onBlur={() => handleBlur('email')}
            />
            {error.email && <p className="error-text login-error1">{error.email}</p>}

            {isLabelVisible.password && <label className={error.password ? "error-label pass-label1" : "label pass-label1"}>Password</label>}
            <input 
                className={error.password ? "error-inputs" : "inputs"}
                type={isHide ? "password" : "text"}
                placeholder="Password" 
                value={value.password}
                onChange={(e) => handleChange(e, 'password')}
                onFocus={() => handleFocus('password')} 
                onBlur={() => handleBlur('password')}
            />
            {error.password && <p className="error-text login-error2">{error.password}</p>}

            <button className="login-hide-unhide" onClick={handleHide}>
                {isHide ? <FaEyeSlash size={24} color="#363333" /> : <FaEye size={24} color="#363333" />}
            </button>

            <div className="other">
                <a href="#" className="forget">Forgot Password?</a>
            </div>

            <button className="login-btn btn" onClick={handleLogin}>Login</button>
            
            <div className="or">
                <hr className="line"/>
                <h3>OR</h3>
                <hr className="line"/>
            </div>
            
            <div className="icon">
                <button className="icon-btn" onClick={handleGoogleLogin}>
                    <SiGoogle size={24} color="#363333"/>
                    <h4>Google Login</h4>
                </button>
            </div>
        </div>
    );
}

export default Login;