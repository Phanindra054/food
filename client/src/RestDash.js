import axios from 'axios'
import React,{useEffect,useState} from 'react'
import RestDashnav from './RestDashnav'
const RestDash = () => {
    const [dat,setdat]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4001/myrestaurant',{
            headers:{
                'x-token':localStorage.getItem('resttoken')
            }
        }).then((res)=>setdat(res.data))
    },[])
  return (
    <div>
      <RestDashnav/>
      <div className='restaurant-details'>
  <img className='restaurant-image' src='rest.jpg' alt='Restaurant' />
  <h2 className='restaurant-name'>Restaurant Name: {dat.Restaurant_Name}</h2>
  <h3 className='owner-name'>Owner Name: {dat.Owner_Name}</h3>
  <h3 className='location'>Location: {dat.Location}</h3>
  <h3 className='contact'>Contact: {dat.Contact}</h3>
  <h3 className='email'>Email: {dat.Email}</h3>
</div>

    </div>
  )
}

export default RestDash
