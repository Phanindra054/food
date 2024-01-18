import axios from 'axios'
import React,{useState,useEffect} from 'react'
import CustDashnav from './CustDashnav'
import { Link } from 'react-router-dom'
const CustDash = () => {
  const [dat,setdat]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4001/allrest',{
      headers:{
        'x-token':localStorage.getItem('custtoken')
      }
    }).then((res)=>{
        setdat(res.data)
    })
  },[])
  
  return (
    <div>
       <CustDashnav/>
       <div>
          <div>
            {
              dat.map((it)=>(
                <Link key={it._id} to={`/allrestmenu/${it._id}`}>
              <div className="restaurant-card">
                <div className="restaurant-image-container">
                  <img src="rest.jpg" alt="Restaurant Image" className="restaurant-image" />
                </div>
                <div className="restaurant-details-container">
                  <h2 className="restaurant-name">{it.Restaurant_Name}</h2>
                  <h3 className="location">{it.Location}</h3>
                  <h3 className="contact">{it.Contact}</h3>
                  <h2 className="email">{it.Email}</h2>
                </div>
              </div>
            </Link>

              ))
            }
          </div>
       </div>
    </div>
  )
}

export default CustDash
