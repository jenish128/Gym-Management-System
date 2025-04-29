import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

import BasicFitness from "../components/BasicFitness";
import StrengthTraining from "../components/StrengthTraining";
import MuscleGain from "../components/MuscleGain"
import Flexibility from "../components/Flexibility";
import WeightLoss from "../components/WeightLoss";
import SportsSpecific from "../components/SportsSpecific";

const Program = () => {
    const location = useLocation();
    const program = location.state?.program;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    if (program == '1'){
        return(
            <div>
                <BasicFitness />
            </div> 
        );
    }
    else if (program == '2'){
        return(
            <StrengthTraining />
        );
    }
    else if (program == '3'){
        return(
            <MuscleGain />
        )
    }
    else if (program == '4'){
        return(
            <Flexibility />
        );
    }
    else if (program == '5'){
        return(
            <WeightLoss />
        );
    }
    else if (program == '6'){
        return(
            <SportsSpecific />
        )
    }
    else {

    }
}

export default Program;