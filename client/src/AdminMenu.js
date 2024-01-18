import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AdminNav from './AdminNav'
const AdminMenu = () => {
  const {id}=useParams()
  const [dat,setdat]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:4001/adminmenu/${id}`,{
      headers:{
        "x-token": localStorage.getItem('adtoken'),
      },
    }).then((res)=>{
      setdat(res.data)
    })
  },[])
  return (
    <div>
      <AdminNav/>
      <div>
      <div>
        {dat.map((it, index) => (
            <div key={index} className="review-item">
              <div className="profile-image">
                <img src='profile.jpg' alt={`Item ${index + 1}`} />
              </div>
              <div className="review-details">
                <h2>Item: {it.Food}</h2>
                <h3>Ingredients: {it.Ingredients}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminMenu
