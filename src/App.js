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
    fetch("http://localhost:4000/garages")
      .then((res) => res.json())
      .then((data) => setGarages(data));
  }, []);
  
  const [garages, setGarages] = useState({
    img: null,
    whips: [],
  });


  const [whips, setWhips] = useState([]);

  const [user, setUser] = useState();
console.log(user)
  const addToWhips = (whip) => {
    setWhips([...whips, whip]).then(() => {
      setGarages();
    });
  };

  const updateGarageState = (id) => {
    setWhips(whips.filter((whip) => whip._id !== id)).then(() => {
      setGarages();
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
              garage={garages}
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
