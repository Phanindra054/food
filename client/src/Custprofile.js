import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustDashnav from './CustDashnav';

const Custprofile = () => {
  const [dat, setDat] = useState({});
  const [data, setData] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [rev, setRev] = useState({
    Restaurant: '',
    Dish: '',
    Rating: '',
    Comments: '',
  });

  useEffect(() => {
    axios.get('http://localhost:4001/custdetails', {
      headers: {
        'x-token': localStorage.getItem('custtoken'),
      },
    })
    .then((res) => {
      setDat(res.data);
    });

    axios.get("http://localhost:4001/getpurchase", {
      headers: {
        'x-token': localStorage.getItem('custtoken'),
      },
    })
    .then(res => {
      setData(res.data);
    });
  }, []);

  const chan = (e) => {
    setRev({ ...rev, [e.target.name]: e.target.value });
  }

  const addrev = (id, item) => {
    axios.post("http://localhost:4001/addreview", { 
      ...rev, 
      Restaurant: id,
      Dish: item
    }, {
      headers: {
        'x-token': localStorage.getItem('custtoken'),
      },
    }).then(res => {
      console.log(res.data);
      // Handle success or error as needed
    }).catch(error => {
      console.error("Error adding review:", error);
    });
  };

  return (
    <>
      <CustDashnav />
      <div className="profile-container">
        <div className="profile-image">
          <img src="profile.jpg" alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>Username: {dat.Username}</h2>
          <h3>Location: {dat.Location}</h3>
          <h3>Contact: {dat.Mobile}</h3>
          <h3>Email: {dat.Email}</h3>
        </div>
      </div>

      <div className="orders-container">
        Your Orders
      </div>

      <div className="previous-orders">
        {data.map((it, index) => (
          <div key={index} className="item-container">
            <div>
              <img src="profile.jpg" alt="Profile" />
            </div>
            <div className="item-details">
              <h2>Item: {it.Item}</h2>
              <h3>Cost: {it.Restaurant}</h3>
            </div>
            <div>
              <button className="add-review-button" onClick={() => setSelectedItemIndex(index)}>
                Add Review
              </button>
            </div>

            {selectedItemIndex === index && (
              <div className="review-form">
                <input className="rating-input" type='text' name='Rating' value={rev.Rating} placeholder='Rating Out Of 5' onChange={chan} />
                <input className="comment-input" type='text' name='Comments' value={rev.Comments} placeholder='Comment' onChange={chan} />
                <button className="submit-button" onClick={() => {
                  addrev(it.Restaurant, it.Item);
                  setSelectedItemIndex(null);
                }}>Submit</button>
              </div>
            )}

          </div>
        ))}
      </div>
    </>
  );
};

export default Custprofile;
