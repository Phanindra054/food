import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const Admin = () => {
    const navigate= useNavigate()
  const [data, setData] = useState({
    Username: '',
    Password: '', // Fix the key here
  });

  const { Username, Password } = data;

  const changed = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitted = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4001/Adminlogin', data);
      localStorage.setItem('adtoken', res.data.token);
  
      if (localStorage.getItem('adtoken')) {
        navigate('/DashAdmin');
      } else {
        navigate('/Admin');
      }
    } catch (error) {
      console.error("Error during login:", error);
      
    }
  };
  
  
  return (
    <div className='adminmain'>
      <div >
        <center>
          <form className='admin' onSubmit={submitted}>
            <input className='user' type='text' placeholder='Admin Username' name='Username' value={Username} onChange={changed} /><br />
            <input className='password' type='password' placeholder='Password' name='Password' value={Password} onChange={changed} /><br />
            <input className='sub' type='submit' value='Log In' /> 
          </form>
        </center>
      </div>
    </div>
  );
};

export default Admin;
