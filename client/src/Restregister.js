
import axios from 'axios';
import React, { useState } from 'react';
import Restnav from './Restnav';
const Restregister = () => {
  const [formData, setFormData] = useState({
    Restaurant_Name: '',
    Owner_Name: '',
    Location: '',
    Contact: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/registerRestaurant', formData)
    .then(() => {
        alert("Registration Successful");
    })
    .catch(error => {
        if (error.response && error.response.status === 400) {
            alert('This User Already Exists');
          }
          if (error.response && error.response.status === 401) {
            alert('Once Check Passwords');
          }
    });

  };

  return (
    <>
        <Restnav/>
    <div className="registration-container">
      <h1 className="registration-title">Restaurant Registration</h1>
      <form onSubmit={handleRegister} className="registration-form">
        <label>
          Restaurant Name:
          <input
            type="text"
            name="Restaurant_Name"
            value={formData.Restaurant_Name}
            onChange={handleChange}
          />
        </label>
        <label>
          Owner Name:
          <input
            type="text"
            name="Owner_Name"
            value={formData.Owner_Name}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="Location"
            value={formData.Location}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="Contact"
            value={formData.Contact}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="ConfirmPassword"
            value={formData.ConfirmPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
    </>
  );
};

export default Restregister;
