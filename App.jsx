import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Account from "./pages/Account";
import Detail from "./pages/Detail";
import Program from "./pages/Program";
import Profile from "./pages/Profile";
import Class from "./pages/Class";
import BMICalculator from "./pages/BMICalculator"; // Import BMI Calculator
import AdminPanel from "./pages/AdminPanel";
import TrainerPanel from "./pages/TrainerPanel";

function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Account />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/class" element={<Class />} />
        <Route path="/bmi" element={<BMICalculator />} /> {/* BMI Route */}
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/trainerpanel" element={<TrainerPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
