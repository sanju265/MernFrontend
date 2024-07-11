// client/src/pages/Courses.jsx

import React, { useState } from 'react';

const Courses = () => {
  const [cartItems, setCartItems] = useState([]);
  const courses = [
    { id: 1, title: 'Spanish', quantity: 1 },
    { id: 2, title: 'French', quantity: 1 },
    { id: 3, title: 'Korean', quantity: 1 },
    { id: 4, title: 'Japanese', quantity: 1 },
  ];

  const handleAddToCart = (course) => {
    // Add course to cart items
    const updatedCart = [...cartItems];
    updatedCart.push(course);
    setCartItems(updatedCart);
  };

  const handleEditCourse = (courseId) => {
    // Find the course in cartItems and update it
    const updatedCart = cartItems.map(item => {
      if (item.id === courseId) {
        switch (item.title) {
          case 'Spanish':
            return { ...item, title: 'French' };
          case 'French':
            return { ...item, title: 'Korean' };
          case 'Korean':
            return { ...item, title: 'Japanese' };
          case 'Japanese':
            return { ...item, title: 'Spanish' };
          default:
            return item;
        }
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDeleteCourse = (courseId) => {
    // Remove the course from cartItems
    const updatedCart = cartItems.filter(item => item.id !== courseId);
    setCartItems(updatedCart);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">All Courses</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.quantity}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => handleAddToCart(course)}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-center mt-4">Your Shopping Cart</h3>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Sno.</th>
              <th scope="col">Item Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th> {/* Actions column for Edit and Delete */}
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => handleEditCourse(item.id)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDeleteCourse(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
