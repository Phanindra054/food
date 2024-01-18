import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustDashnav from './CustDashnav';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate=useNavigate()
  const [dat, setdat] = useState([]);
  const [counts, setCounts] = useState([]); // Use an array to store counts for each item

  const fetchData = () => {
    axios.get("http://localhost:4001/showcart", {
      headers: {
        'x-token': localStorage.getItem('custtoken'),
      },
    }).then((res) => {
      setdat(res.data);
      // Initialize counts array with a default value of 1 for each item
      const initialCounts = Array(res.data.length).fill(1);
      setCounts(initialCounts);
    });
  };
  
  
  const incr = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] || 1) + 1;
      return newCounts;
    });
  };

  const decr = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max((newCounts[index] || 1) - 1, 1); // Ensure count is not less than 1
      return newCounts;
    });
  };

  const click = (id) => {
    axios.delete(`http://localhost:4001/delitem/${id}`, {
      headers: {
        'x-token': localStorage.getItem('custtoken'),
      },
    })
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };
 const posted=(e)=>{
    axios.post("http://localhost:4001/custpurchase",dat,{
      headers:{
        'x-token':localStorage.getItem('custtoken')
      }
    }).then((res)=>{
      axios.delete("http://localhost:4001/delcart",{
        headers:{
          'x-token':localStorage.getItem('custtoken')
        }
      });
      console.log(res.data);
      navigate("/CustDash");
    })
    
 }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CustDashnav />
      <div>
        {dat.map((it, index) => (
          <div key={it._id} className="cart-item">
            <div className="image-container">
              <img src='profile.jpg' alt="Item Image" />
            </div>
            <div className="item-details">
              <h2>Item: {it.Item}</h2>
              <h3>Restaurant: {it.Cost}</h3>
            </div>
            <div className="quantity-controls">
              <button className="decrement-btn" onClick={() => decr(index)}>-</button>
              <span className="item-count">{counts[index]}</span>
              <button className="increment-btn" onClick={() => incr(index)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => click(it._id)}>Remove</button>
          </div>
          
        ))}
      </div>
      <div className="payment-container">
        <p>Cash On delivery</p>
      <button onClick={posted} className="payment-button">Payment</button>
    </div>
    </div>
  );
};

export default Cart;
