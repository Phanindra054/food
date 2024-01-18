import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  const [dat, setdat] = useState([]);

  const all = () => {
    axios.get('http://localhost:4001/viewrestaurants', {
      headers: {
        'x-token': localStorage.getItem('adtoken')
      }
    }).then((res) => {
      setdat(res.data);
    });
  };

  const clicked = (id) => {
    axios.delete('http://localhost:4001/delrestaurant', {
      headers: {
        'x-token': localStorage.getItem('adtoken')
      },
      data: { id }
    }).then(() => {
      all();
    });
  };

  useEffect(() => {
    all();
  }, []);

  return (
    <div>
      <AdminNav />
      <div>
        <div>
          {dat.map((it) => (
            <div className='restdata' key={it._id}>
              <img src="rest.jpg" alt={`Restaurant ${it.Restaurant_Name}`} />
              <div className='datao'>
                <h3>Restaurant Name: {it.Restaurant_Name}</h3>
                <h4>Location: {it.Location} </h4>
                <h4>Contact: {it.Contact}</h4>
                <h4>Email: {it.Email}</h4>
              </div>
              <div className='btn'>
                <Link to={`/adminmenu/${it._id}`} ><button className='btn1'>Menu</button></Link>
                <button onClick={() => clicked(it._id)} className='btn2'>Remove</button>
                <Link to={`/viewadminreviews/${it._id}`} ><button className='btn1'>Reviews</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
