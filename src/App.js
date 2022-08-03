import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect, useSyncExternalStore } from "react";
import styled from "styled-components";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import GaragePage from "./pages/GaragePage";
import GaragesPage from "./pages/GaragesPage";
import NavBar from "./components/NavBar";
import NewWhip from "./components/NewWhip";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get(`http://localhost:4000/garage?owner=${user.id}`)
      // .then((res) => res.json())
      .then(({ data }) => setGarage(data));
  }, []);

  const [garage, setGarage] = useState({});

  const [whips, setWhips] = useState([]);

  const [user, setUser] = useState({ id: "62e563d14b2c4b9570ad9683" });
  // console.log(garages);
  console.log(user);

  const addToWhips = (whip) => {
    setWhips([...whips, whip]).then(() => {
      setGarage();
    });
  };

  const updateGarageState = (id) => {
    setWhips(whips.filter((whip) => whip._id !== id)).then(() => {
      setGarage();
    });
  };

  const handleLogout = () => {
    setUser({});
    setGarage({});
  };

  const handleLogin = () => {};

  if (!user)
    return (
      <div>
        <LoginPage />
      </div>
    );

  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} />
      <Routes>
        <Route path="login" element={<LoginPage setUser={setUser} />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="Garage" element={<GaragePage />} />
        <Route path="Garage/new-whip" element={<NewWhip />} />
        <Route path="Garages" element={<GaragesPage />} />
        <Route path="*" element={<Navigate to="/Garage" replace />} />
      </Routes>
    </div>
  );
}

export default App;
