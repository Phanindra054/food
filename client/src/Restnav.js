import React from 'react'
import { Link } from 'react-router-dom'
const Restnav = () => {
  return (
    <div>
       <div className='Adminnav'>
          <div className='log'>
           <Link to='/restaurant'><h2>Restaurant's</h2></Link>
          </div>
          <div>
             <ul>
                   <li>
                    <Link to='/restregister'>Register</Link>
                   </li>
                   <li>
                    <Link to='/restlogin'>Login</Link>
                   </li>
             </ul>
          </div>
       </div>
    </div>
  )
}

export default Restnav
