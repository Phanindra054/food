
import axios from 'axios';
import React, { useState } from 'react';
import Customermainnav from './Customermainnav';
const Custregister = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Mobile: '',
    Email: '',
    Location: '',
    Password: '',
    ConfirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4001/registerCustomer',formData)
    .then(() => {
      alert("Registration Successful");
      setFormData({
        Username: '',
        Mobile: '',
        Email: '',
        Location: '',
        Password: '',
        ConfirmPassword: '',
      })
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
    <Customermainnav/>
    <div className="custom-register-container">
      <h2>Customer Registration</h2>
      <div className="custom-input-container">
        <input type="text" placeholder="Username" name="Username" value={formData.Username} onChange={handleChange} />
        <input type="text" placeholder="Mobile" name="Mobile" value={formData.Mobile} onChange={handleChange} />
        <input type="email" placeholder="Email" name="Email" value={formData.Email} onChange={handleChange} />
        <input type="text" placeholder="Location" name="Location" value={formData.Location} onChange={handleChange} />
        <input type="password" placeholder="Password" name="Password" value={formData.Password} onChange={handleChange} />
        <input
          type="password"
          placeholder="Confirm Password"
          name="ConfirmPassword"
          value={formData.ConfirmPassword}
          onChange={handleChange}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
    </>
  );
};

export default Custregister;
