import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import Restnav from './Restnav';
const Restlogin = () => {
    const navigate=useNavigate()
  const [loginData, setLoginData] = useState({
    Owner_Name: '',
    Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/loginRestaurant',loginData).then((res)=>{
        localStorage.setItem('resttoken',res.data.token);
        if (localStorage.getItem('resttoken')) {
            navigate('/Dashrest');
          } else {
            navigate('/restlogin');
          }
          
    })
    .catch(error => {
        if (error.response && error.response.status === 400) {
            alert('User Not Found');
          }
          if (error.response && error.response.status === 401) {
            alert('Incorrect Password');
          }
    });
  };

  return (
   <>
       <Restnav/>
    <div className="login-container">
      <h1 className="login-title">Restaurant Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Owner Name:
          <input
            type="text"
            name="Owner_Name"
            value={loginData.Owner_Name}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="Password"
            value={loginData.Password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
   </>
  );
};

export default Restlogin;
