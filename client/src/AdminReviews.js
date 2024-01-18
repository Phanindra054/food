import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminNav from './AdminNav';

const AdminReviews = () => {
  const [dat, setDat] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4001/adminreview/${id}`, {
      headers: {
        "x-token": localStorage.getItem('adtoken'),
      },
    })
    .then((res) => {
      setDat(res.data);
    })
    .catch((error) => {
      console.error("Error fetching reviews:", error);
    });
  }, [id]);

  return (
    <div>
      <AdminNav />
      <div>
        <center>
        <div className="reviews-heading">
          <h2>Reviews</h2>
        </div>
        </center>
        <div>
        {dat.map((it, index) => (
            <div key={index} className="review-item">
              <div className="profile-image">
                <img src='profile.jpg' alt={`REview ${index + 1}`} />
              </div>
              <div className="review-details">
                <h2>Restaurant: {it.Restaurant}</h2>
                <h2>Food: {it.Dish}</h2>
                <h3>Rating: {it.Rating}  <span role="img" aria-label="star">&#9733;</span></h3>
                <h3>Comments: {it.Comments}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminReviews;
