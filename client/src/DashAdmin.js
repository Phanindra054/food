import React from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav'
const DashAdmin = () => {
  return (
    <div>
      <AdminNav/>
      <div className='adminmain'>
            <center>
              <div className='dat'>
                <h1 className='hq'> Hey Admin!!!</h1>
                <p>Check The Reviews Here</p>
                <p>Check Restaurants And Customers Above</p>
              </div>
              <div>
                <Link to='/Reviews'><button className='sub'>Reviews</button></Link>
              </div>
            </center>
      </div>
    </div>
  )
}

export default DashAdmin
