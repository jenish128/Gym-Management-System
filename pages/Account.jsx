import React, {useState} from "react";

import '../styles/account.css';

import Signup from "../components/Signup";
import Login from "../components/Login";

const Account = () => {
    const [isLogin,setIsLogin] = useState(true);
    const slid = () => {
        setIsLogin(!isLogin);
    }
    return (
        <div className="container">
            <div className="signup">
                <h1 className="heading">Hello, Friend !</h1>
                <p className="text">Enter your Personal details and start journey with us</p>
                <button className="button" onClick={slid}>Sign up</button>
                {isLogin ? '' : <Signup />}
            </div>
            <div className="login">
                <h1 className="heading">Welcome Back !</h1>
                <p className="text">To keep connected with us please login with your personal info</p>
                <button className="button"  onClick={slid}>Login</button>
                {isLogin ? <Login /> : ''}
            </div>
        </div>
    );
}

export default Account;
