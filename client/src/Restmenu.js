import React, { useState, useEffect } from 'react';
import CustDashnav from './CustDashnav';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Restmenu = () => {
  const [dat, setDat] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4001/allrestmenu/${id}`, {
      headers: {
        'x-token': localStorage.getItem('custtoken'),
      },
    })
    .then(res => {
      setDat(res.data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }, [id]);

  const addToCart = (itemId) => {
    axios.post("http://localhost:4001/additem", { id: itemId }, {
      headers: {
        'x-token': localStorage.getItem('custtoken'),
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error("Error adding to cart:", err);
    });
  };

  return (
    <div>
      <CustDashnav />
      <div>
        {dat.map(item => (
          <div key={item._id} className="food-container">
            <div className="image-container">
              <img src="food.jpg" alt="Food Image" />
            </div>
            <div className="text-container">
              <h2>{item.Food}</h2>
              <h3>{item.Ingredients}</h3>
            </div>
            <div className="cart-button-container">
              <button onClick={() => addToCart(item._id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restmenu;
