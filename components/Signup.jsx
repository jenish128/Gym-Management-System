import React, { useState } from "react";
import '../styles/account.css';
import { Navigate, useNavigate } from "react-router-dom";

import { SiGoogle } from 'react-icons/si';
import { FaFacebook, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';

import { ref, set, get } from "firebase/database";
import { database } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
    const navigate = useNavigate();

    const [isLabelVisible, setIsLabelVisible] = useState({
        email: false,
        password: false,
        confirmPassword: false
    });
    const [value, setValue] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isHidePassword, setIsHidePassword] = useState(true);
    const [isHideConPass, setIsHideConPass] = useState(true);
    const [isError, setIsError] = useState(true);
    const [error, setError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [user, setUser] = useState(null);
    const [isFound,setIsFound] = useState(false);

    const handlefocus = (field) => {
        setIsLabelVisible(prevState => ({
            ...prevState,
            [field]: true
        }));
    };

    const handleblur = (field) => {
        if (value[field] === '') {
            setIsLabelVisible(prevState => ({
                ...prevState,
                [field]: false
            }));
        }
    };

    const handleChange = (event, field) => {
        setValue(prevState => ({
            ...prevState,
            [field]: event.target.value
        }));
    };

    const handleHidePass = () => {
        setIsHidePassword(!isHidePassword);
    };

    const handleHideConPass = () => {
        setIsHideConPass(!isHideConPass);
    };

    const handleSignup = async (e) => {
        setError(prevState => ({
            ...prevState,
            ['email']: '',
            ['password']: '',
            ['confirmPassword']: '' 
        }));
        let isError = false;

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValidation = regex.test(value.email);
        if(value.email == ''){
            setError(prevState => ({
                ...prevState,
                ['email']: 'Email is require.' 
            }));
            isError = true;
        }
        else if(emailValidation == false){
            setError(prevState => ({
                ...prevState,
                ['email']: 'Enter valid email address.' 
            }));
            isError = true;
        }
        else{}

        if(value.password == ''){
            setError(prevState => ({
                ...prevState,
                ['password']: 'Password is require.' 
            }));
            isError = true;
        }
        else if(value.password.length < 6){
            setError(prevState => ({
                ...prevState,
                ['password']: 'Password must be 6 letters.' 
            }));
            isError = true;
        }
        else {}

        if(value.confirmPassword == ''){
            setError(prevState => ({
                ...prevState,
                ['confirmPassword']: 'Password Confirmation is require.' 
            }));
            isError = true;
        }
        else if(value.confirmPassword != value.password){
            setError(prevState => ({
                ...prevState,
                ['confirmPassword']: 'Password does not match.' 
            }));
            isError = true;
        }
        else {}
        
        if (!isError){
            if (isFound == false){
                const usersRef = ref(database, "admin");
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const users = snapshot.val();
                    for (let user in users) {
                        if (users[user].email === value.email) {
                            setIsFound(true);
                            alert("admin")
                            return;
                        }
                    }
                }
            }
            if (isFound == false){
                const usersRef = ref(database, "trainer");
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const users = snapshot.val();
                    for (let user in users) {
                        if (users[user].email === value.email) {
                            setIsFound(true);
                            alert("trainer")
                            return;
                        }
                    }
                }
            }
            
            if (isFound == false){
                const usersRef = ref(database, "google");
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const users = snapshot.val();
                    for (let user in users) {
                        if (users[user].email === value.email) {
                            setIsFound(true);
                            alert("google")
                            return;
                        }
                    }
                }
            }
            if (isFound == false){
                const usersRef = ref(database, "users");
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const users = snapshot.val();
                    for (let user in users) {
                        if (users[user].email === value.email) {
                            setIsFound(true);
                            alert("user")
                            return;
                        }
                    }
                }
            }
            const username = value.email.split('@')[0];
            await set(ref(database, 'users/' + username), {
                email: value.email,
                password: value.password, 
                profileimage: '',
                firstname: '',
                lastname: '',
                gender: '',
                dateofbirth: '',
                age: '',
                mobilenumber: '',
                gmail: '',
                program: '',
            });
            alert("Sign up successfully!");
            navigate('/detail', { state: { username, type: 'users' } });
        }
        
    };

    const handleGoogleLogin = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        
        try{
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        
            let exist = false;
            const usersRef = ref(database, "google");
            const snapshot = await get(usersRef);
            if (snapshot.exists()) {
                const users = snapshot.val();
                for (let user in users) {
                    if (users[user].email === result.user.email) {
                        exist = true;
                        break;
                    }
                }
            }
        
            if(!exist){
                const username = result.user.email.split('@')[0];
                await set(ref(database, 'google/' + username), {
                    email: result.user.email,
                    profileimage: '',
                    firstname: '',
                    lastname: '',
                    gender: '',
                    dateofbirth: '',
                    age: '',
                    mobilenumber: '',
                    program: '',
                    gmail: result.user.email,
                });
                alert("Login successfully!");
                navigate('/detail', { state: { username, type: 'google' } });
            }
            else {
                const username = result.user.email.split('@')[0];
                alert("login successfully");
                navigate('/home', { state: { username, type: 'google' } });
            }
        
        }
        catch(error){}
    }

    return (
        <div className="signup-container">
            <h2 className="heading-com">Sign Up</h2>
            {isLabelVisible.email ? <label className={error.email? "error-label email-label" : "label email-label"}>Email</label> : <label></label>}
            <input 
                className={error.email? "error-inputs" : "inputs"}
                type="text" 
                placeholder="Email"
                value={value.email}
                onChange={(e) => handleChange(e, 'email')} 
                onFocus={() => handlefocus('email')} 
                onBlur={() => handleblur('email')}
            />
            {error.email == '' ? null : <p className="error-text signup-error1">{error.email}</p>}
            {isLabelVisible.password ? <label className={error.password? "error-label pass-label" : "label pass-label"}>Password</label> : <label></label>}
            <input 
                className={error.password? "error-inputs" : "inputs"}
                type={isHidePassword ? "password" : "text"}
                placeholder="Password"
                value={value.password}
                onChange={(e) => handleChange(e, 'password')}
                onFocus={() => handlefocus('password')} 
                onBlur={() => handleblur('password')}
            />
            {error.password == '' ? null : <p className="error-text signup-error2">{error.password}</p>}
            {isLabelVisible.confirmPassword ? <label className={error.confirmPassword? "error-label con-pass-label" : "label con-pass-label"}>Confirm Password</label> : <label></label>}
            <input 
                className={error.confirmPassword? "error-inputs" : "inputs"}
                type={isHideConPass ? "password" : "text"}
                placeholder="Confirm Password" 
                value={value.confirmPassword}
                onChange={(e) => handleChange(e, 'confirmPassword')}
                onFocus={() => handlefocus('confirmPassword')} 
                onBlur={() => handleblur('confirmPassword')}
            />
            {error.confirmPassword == '' ? null : <p className="error-text signup-error3">{error.confirmPassword}</p>}
            <button className="signup-btn btn" onClick={handleSignup}>Sign Up</button>
            <div className="or">
                <hr className="line" />
                <h3>OR</h3>
                <hr className="line" />
            </div>
            <div className="icon">
                <button className="icon-btn" onClick={handleGoogleLogin}>
                    <SiGoogle size={24} color="#363333" />
                    <h4>Google Login</h4>
                </button>
            </div>
            <button className="signup-hide-unhide1" onClick={handleHidePass}>
                {isHidePassword ? <FaEyeSlash size={24} color="#363333" /> : <FaEye size={24} color="#363333" />}
            </button>
            <button className="signup-hide-unhide2" onClick={handleHideConPass}>
                {isHideConPass ? <FaEyeSlash size={24} color="#363333" /> : <FaEye size={24} color="#363333" />}
            </button>
        </div>
    );
}

export default Signup;
