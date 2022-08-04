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
import NewWhipPage from "./pages/NewWhipPage";
import axios from "axios";

function App() {
  const [garage, setGarage] = useState({});

  const [garages, setGarages] = useState([]);

  const [user, setUser] = useState({});

  // const addToWhips = (whip) => {
  //   setWhips([...whips, whip]).then(() => {
  //     // setGarage();
  //   });
  // };

  // const updateGarageState = (id) => {
  //   setWhips(whips.filter((whip) => whip._id !== id)).then(() => {
  //     // setGarage();
  //   });
  // };

  const handleLogout = () => {
    setUser({});
    setGarage({});
  };

  if (!user)
    return (
      <div>
        <LoginPage />
      </div>
    );

  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} user={user} />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setUser={setUser} setGarage={setGarage} />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/garage"
          element={
            <GaragePage user={user} setGarage={setGarage} garage={garage} />
          }
        />
        <Route path="/garage/new-whip" element={<NewWhipPage />} />
        <Route
          path="/garages"
          element={<GaragesPage garages={garages} setGarages={setGarages} />}
        />
        <Route path="*" element={<Navigate to="/garage" replace />} />
      </Routes>
    </div>
  );
}

export default App;
