import React,{useState,useEffect} from 'react'
import AdminNav from './AdminNav'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Adminpur = () => {
    const {id}=useParams()
    const [dat,setdat]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4001/adminpurchase/${id}`,{
            headers:{
                'x-token':localStorage.getItem('adtoken')
            }
        }).then((res)=>{
            setdat(res.data)
        })
    },[])
  return (
    <div>
      <AdminNav/>
      <div>
         {
            dat.map(it=>(
                <div className="item-container">
                <div className="image-container">
                  <img src='rest.jpg' alt={`Restaurant: ${it.Restaurant}`} />
                </div>
                <div className="text-container">
                  <h2>Restaurant: {it.Restaurant}</h2>
                  <h2>Item: {it.Item}</h2>
                </div>
              </div>
            ))
         }
      </div>
    </div>
  )
}

export default Adminpur
