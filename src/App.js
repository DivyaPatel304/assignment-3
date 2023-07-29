import React from 'react';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import Profile from './pages/Profile';
import News from './pages/News';
import Meal from './pages/Meal';
import CountryData from './pages/CountryData';
import PasswordGenerator from './component/PasswordGenerator';
import UnitConverter from './pages/UnitConverter';

function App() {
  return (
    // Using the "Routes" component from "react-router-dom" to define the app's routes
    <Routes>
      {/* Route for the Auth page */}
      <Route path="/" element={<Auth />} />

      {/* Route for the Dashboard page */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Route for the UserList page */}
      <Route path="/users" element={<UserList />} />

      {/* Route for the Profile page */}
      <Route path="/profile" element={<Profile />} />

      {/* Route for the News page */}
      <Route path="/news" element={<News />} />

      {/* Route for the Meal page */}
      <Route path="/meal" element={<Meal />} />

      {/* Route for the CountryData page */}
      <Route path="/country" element={<CountryData />} />

      {/* Route for the PasswordGenerator component */}
      <Route path="/tool/password-generator" element={<PasswordGenerator />} />

      {/* Route for the UnitConverter page */}
      <Route path="/tool/unit-converter" element={<UnitConverter />} />
    </Routes>
  );
}

export default App;
