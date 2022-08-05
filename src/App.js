import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
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
import DetailsPage from "./pages/DetailsPage";

function App() {
  const [user, setUser] = useState({});

  const [garage, setGarage] = useState({});

  const [whips, setWhips] = useState([]);

  const [garages, setGarages] = useState([]);

  // const addWhip = (whip) => {
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

  const navigate = useNavigate();

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
            !user._id ? (
              <Navigate to="/login" replace />
            ) : (
              <GaragePage
                user={user}
                setGarage={setGarage}
                garage={garage}
                setWhips={setWhips}
                whips={whips}
              />
            )
          }
        />
        <Route path="/garage/:id" element={<DetailsPage />} />
        <Route
          path="/garage/new-whip"
          element={
            !user._id ? (
              <Navigate to="/login" replace />
            ) : (
              <NewWhipPage garage={garage} />
            )
          }
        />
        <Route
          path="/garages"
          element={
            !user._id ? (
              <Navigate to="/login" replace />
            ) : (
              <GaragesPage garages={garages} setGarages={setGarages} />
            )
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
