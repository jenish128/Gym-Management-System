import React from "react";
import '../styles/program.css';
import '../styles/common.css';

const SportsSpecific = () => {
    return(
        <div className="program-con">
            <h1 className="program-heading">Sports Specific Training</h1>
            <hr />
            <p className="program-p">Sports-Specific Training (SST) is a tailored fitness program designed to improve performance in a particular sport by focusing on the physical and mental demands of that sport. It combines strength, endurance, agility, and skills training to enhance athletic performance, reduce the risk of injury, and optimize performance in competitions.</p>
            <hr />
            <div>
                <h2 className="program-div-heading">Components</h2>
                <p className="program-div-p">1. Goal Setting and Assessment</p>
                <p className="program-div-p">2. Sport-Specific Movements and Skills</p>
                <p className="program-div-p">3. Strength and Power Development</p>
                <p className="program-div-p">4. Endurance Training</p>
                <p className="program-div-p">5. Agility and Speed Training</p>
                <p className="program-div-p">6. Flexibility and Mobility</p>
                <p className="program-div-p">7. Balance and Coordination</p>
                <p className="program-div-p">8. Injury Prevention and Recovery</p>
                <p className="program-div-p">9. Mental Conditioning</p>
            </div>
            <hr />
            <div>
                <h2 className="program-div-heading">Benefit</h2>
                <p className="program-div-p">1. Improved Performance</p>
                <p className="program-div-p">2. Injury Prevention</p>
                <p className="program-div-p">3. Increased Confidence</p>
                <p className="program-div-p">4. Faster Recovery</p>
                <p className="program-div-p">5. Long-Term Success</p>
            </div>
            <hr />
            
            {/* <div>
                <h2 className="program-div-heading">Payment</h2>
                <div className="buy">
                    <div className="buy-card">
                        <h2>3-Month Plan</h2>
                        <h2>price</h2>
                        <button className="btn buy-btn">Buy</button>
                    </div>
                    <div className="buy-card">
                        <h2>6-Month Plan</h2>
                        <h2>price</h2>
                        <button className="btn buy-btn">Buy</button>
                    </div>
                    <div className="buy-card">
                        <h2>1-Year Plan</h2>
                        <h2>price</h2>
                        <button className="btn buy-btn">Buy</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default SportsSpecific;