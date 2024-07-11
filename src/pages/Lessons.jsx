// client/src/pages/Lessons.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';

const Lessons = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Lessons</h1>
      
      <Cards />
      <Link to="/paid-courses" className="btn btn-primary mb-3">Check Paid Courses</Link>
    </div>
  );
};

export default Lessons;
