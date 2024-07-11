// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Quiz from './pages/Quiz';
import Practice from './components/Practice';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './components/Auth/AuthContext';

// Import PaidCourses and Cart components
import PaidCourses from './pages/PaidCourses';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/paid-courses" element={<PaidCourses />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
