
import axios from 'axios';
import React, { useState } from 'react';
import Customermainnav from './Customermainnav';
import { useNavigate } from 'react-router-dom';
const Custlogin = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
  });

  const handleLogin = () => {
    axios.post('http://localhost:4001/Customerlogin',formData).then((res)=>{
            localStorage.setItem('custtoken',res.data.token)
            if(localStorage.getItem('custtoken'))
            {
                navigate('/CustDash')
            }
            else
            {
                navigate('/custlogin')
            }
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
     <Customermainnav/>
      <div className="login-container">
      <h2>Login</h2>
      <div className="login-input-container">
        <input type="text" placeholder="Username" name="Username" value={formData.Username} onChange={handleChange} />
        <input type="password" placeholder="Password" name="Password" value={formData.Password} onChange={handleChange} />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
    </>
  );
};

export default Custlogin;
