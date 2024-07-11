// client/src/pages/PaidCourses.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import spanishFlag from '../assets/spanish-flag.png';
import frenchFlag from '../assets/french-flag.jpg';
import koreanFlag from '../assets/korean-flag.jpg';
import japaneseFlag from '../assets/japanese-flag.jpg';

const PaidCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const addToCart = async (courseId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/cart/add`, { courseId });
      alert('Course added to cart successfully!');
      // Handle success scenario (redirect to cart or update UI)
    } catch (error) {
      console.error('Error adding course to cart:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Choose Your Courses</h1>
      <div className="row">
        {/* Spanish Course */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src={spanishFlag} className="card-img-top" alt="Spanish Flag" />
            <div className="card-body">
              <h5 className="card-title">Spanish</h5>
              <p className="card-text">Come Learn Spanish Easily!</p>
              <p className="card-text">Price: $30</p>
              <Link to="/cart" className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>

        {/* French Course */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src={frenchFlag} className="card-img-top" alt="French Flag" />
            <div className="card-body">
              <h5 className="card-title">French</h5>
              <p className="card-text">Come Learn French Easily!</p>
              <p className="card-text">Price: $30</p>
              <Link to="/cart" className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>

        {/* Korean Course */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src={koreanFlag} className="card-img-top" alt="Korean Flag" />
            <div className="card-body">
              <h5 className="card-title">Korean</h5>
              <p className="card-text">Come Learn Korean Easily!</p>
              <p className="card-text">Price: $30</p>
              <Link to="/cart" className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>

        {/* Japanese Course */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src={japaneseFlag} className="card-img-top" alt="Japanese Flag" />
            <div className="card-body">
              <h5 className="card-title">Japanese</h5>
              <p className="card-text">Come Learn Japanese Easily!</p>
              <p className="card-text">Price: $30</p>
              <Link to="/cart" className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidCourses;
