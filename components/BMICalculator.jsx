import React, { useState } from "react";



const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      setBMI(bmiValue);

      // Determine BMI Category
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory("Normal Weight");
      else if (bmiValue >= 25 && bmiValue < 29.9) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <div className="bmi-input">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>
      <div className="bmi-input">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="bmi-result">
          <h3>Your BMI: {bmi}</h3>
          <h4>Category: {category}</h4>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;


