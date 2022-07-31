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

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/garage")
      .then((res) => res.json())
      .then((data) => setGarage(data));
  }, []);

  const [garage, setGarage] = useState({
    img: null,
    whips: [whips],
  });

  const [whips, setWhips] = useState([]);

  const [user, setUser] = useState();
  console.log(garage);

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

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="login" element={<LoginPage setUser={setUser} />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route
          path="Garage"
          element={
            <GaragePage
              garrage={garage}
              updateGarageState={updateGarageState}
              user={user}
            />
          }
        />
        <Route
          path="Garage/new-whip"
          element={<NewWhip addWhip={addToWhips} />}
        />
        <Route path="Garages" element={<GaragesPage />} />
        <Route path="*" element={<Navigate to="/Garage" replace />} />
      </Routes>
    </div>
  );
}

export default App;
