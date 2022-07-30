import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Garage from './pages/GaragePage'
import Garages from './pages/GaragesPage'
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='Garage' element={<Garage />} />
        <Route path='Garages' element={<Garages />} />
        <Route path='*' element={<Navigate to='/Garage' replace />} />
      </Routes>
    </div>
  );
}

export default App;
