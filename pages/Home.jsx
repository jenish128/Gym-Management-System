import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ref, update, get } from "firebase/database";
import { database } from "../firebase";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import HomeCom from "../components/HomeCom";
import TrainingCom from "../components/TrainingCom";
import ClassCom from "../components/ClassCom";
import ContactCom from "../components/ContactCom";
import Footer from "../components/Footer";

const Home = () => {

    const location = useLocation();
    const username = location.state?.username;
    const type = location.state?.type;

    const [program, setProgram] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userRef = ref(database, `${type}/${username}`);
                const snapshot = await get(userRef);

                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    if (userData.program) {
                        setProgram(userData.program);
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

    return(
        <div>
            <Navbar username={username} type={type}/>
            <HomeCom id="home" username={username} type={type}/>
            <TrainingCom id="about" username={username} type={type}/>           {/* about */}
            <ClassCom id="class" username={username} type={type}/>
            <ContactCom id="contact" username={username} type={type}/>
            <Footer/>
        </div>
    );
}

export default Home;