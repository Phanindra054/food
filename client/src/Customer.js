import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav'
const Customer = () => {
    const [dat,setdat]=useState([])
    const all=(e)=>{
        axios.get('http://localhost:4001/viewcustomers',{
            headers:{
                'x-token':localStorage.getItem('adtoken')
            }
        }).then((res)=>setdat(res.data))
    }
    useEffect(()=>{
        all();
        console.log(dat)
    },[])
  return (
    <div>
      <AdminNav/>
      <div>
      {dat.map((it) => (
            <div className='restdata' key={it._id}>
              <img src="profile.jpg" alt={`Restaurant ${it.Restaurant_Name}`} />
              <div className='datao'>
                <h3>Username: {it.Username}</h3>
                <h4>Location: {it.Location} </h4>
                <h4>Contact: {it.Mobile}</h4>
                <h4>Email: {it.Email}</h4>
              </div>
              <div>
                <Link to={`/adminpur/${it._id}`}><button>Check Orders</button></Link>
              </div>
            </div>
          ))}
         
      </div>
    </div>
  )
}

export default Customer
