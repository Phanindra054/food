import React from 'react'
import { Link } from 'react-router-dom'
const Customermainnav = () => {
  return (
    <div>
       <div className='Mainpage'>
       <div className='Appname'>
         <Link to='/'><h2>EpicureExpress</h2></Link>
       </div>
       <div className='List'>
       <ul>
        <Link to='/custregister'><li>Register</li></Link>
        <Link to='/custlogin'><li>Login</li></Link>
       </ul>
       </div>
    </div>
    </div>
  )
}

export default Customermainnav
