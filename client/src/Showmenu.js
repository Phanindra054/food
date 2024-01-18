import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestDashnav from './RestDashnav';

const Showmenu = () => {
  const [dat, setdat] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    Food: '',
    Ingredients: '',
  });

  const all = () => {
    axios.get('http://localhost:4001/showmenu', {
      headers: {
        'x-token': localStorage.getItem('resttoken'),
      }
    }).then((res) => {
      setdat(res.data);
    });
  };

  useEffect(() => {
    all();
  }, []);

  const clicked = (id) => {
    axios.delete(`http://localhost:4001/deletemenu/${id}`,{
        headers: {
            'x-token': localStorage.getItem('resttoken'),
          }
    })
      .then(() => {
        all();
      })
      .catch((error) => {
        console.error('Error deleting menu item:', error);
      });
  };
  

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddButtonClick = () => {
    setShowAddForm(true);
  };

  const handleAddItem = () => {
    axios.post('http://localhost:4001/addmenu',newItem,{
        headers:{
            'x-token':localStorage.getItem('resttoken')
        }
    }).then((res)=>{
        all();
        setNewItem('','')
    })

    setShowAddForm(false);
    all();
  };

  return (
    <>
      <RestDashnav />
      <div>
        <div>
          {dat.map((it) => (
            <div className="menu-item" key={it._id}>
              <div className="image-container">
                <img src="rest.jpg" alt="Food Item" />
              </div>
              <div className="details-container">
                <h2>Food: {it.Food}</h2>
                <h3>Ingredients: {it.Ingredients}</h3>
              </div>
              <div className="reviews-container">
                <button onClick={() => clicked(it._id)}>Remove</button>
                <button>Reviews</button>
              </div>
            </div>
          ))}
        </div>

        {showAddForm && (
          <div className="add-form">
            <input
              type="text"
              placeholder="Food"
              name="Food"
              value={newItem.Food}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Ingredients"
              name="Ingredients"
              value={newItem.Ingredients}
              onChange={handleInputChange}
            />
            <button onClick={handleAddItem}>Add</button>
          </div>
        )}

        <div className="add-button-container">
          <button className="add-button" onClick={handleAddButtonClick}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Showmenu;
