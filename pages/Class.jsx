import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ref, update, get } from "firebase/database";
import { database } from "../firebase";
import { useLocation } from "react-router-dom";
import Schedule from "../components/Schedule";
import DietPlan from "../components/DietPlan";
import Attendance from "../components/Attendance";
import Progress from "../components/Progress";

const Class = () => {
    const location = useLocation();
    const username = location.state?.username;
    const type = location.state?.type;
    const classes = location.state?.classes;

    if (classes == 1){
        return(
            <Schedule />
        )
    }
    else if (classes == 2){
        return(
            <DietPlan />
        )
    }
    else if (classes == 3){
        return(
            <Attendance />
        )
    }
    else if (classes == 4){
        return(
            <Progress />
        )
    }
    else{}
}

export default Class;