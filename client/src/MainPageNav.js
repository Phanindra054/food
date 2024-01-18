import React from 'react'
import { Link } from 'react-router-dom'
const MainPageNav = () => {
  return (
    <div className='Mainpage'>
       <div className='Appname'>
         <Link to='/'><h2>EpicureExpress</h2></Link>
       </div>
       <div className='List'>
       <ul>
        <Link to='/restaurant'><li>Restaurants</li></Link>
        <Link to='/customer'><li>Customers</li></Link>
       </ul>
       </div>
    </div>
  )
}

export default MainPageNav
