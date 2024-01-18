import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RestDashnav from './RestDashnav';

const Restrev = () => {
  const [dat, setDat] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/restreview", {
      headers: {
        'x-token': localStorage.getItem('resttoken')
      }
    }).then((res) => {
      setDat(res.data);
    });
  }, []);

  return (
    <div>
      <RestDashnav />
      <div>
        {dat.map((it, index) => (
          <div key={index} className="review-item">
          <div className="image-container">
            <img src='rest.jpg' alt={`Review ${index + 1}`} />
          </div>
          <div className="text-container">
            <h2>Dish: {it.Dish}</h2>
            <h2>Rating: {it.Rating}</h2>
            <h2>Comments: {it.Comments}</h2>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Restrev;
