import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';

const Menu = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const [dat, setdat] = useState([]);

  const all = () => {
    axios.get(`http://localhost:4001/viewadminmenu/${id}`, {
      headers: {
        'x-token': localStorage.getItem('adtoken')
      }
    }).then((res) => setdat(res.data));
  };

  useEffect(() => {
    all();
    console.log(dat)
  }, []); // Include 'id' in the dependency array to fetch data when 'id' changes

  return (
    <div>
      <AdminNav />
      
    </div>
  );
};

export default Menu;
