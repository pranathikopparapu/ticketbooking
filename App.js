import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
