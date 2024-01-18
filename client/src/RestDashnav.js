import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const RestDashnav = () => {
    const navigate=useNavigate()
    const clicked=(e)=>{
        e.preventDefault();
        localStorage.removeItem('resttoken')
        navigate('/restlogin')
    }
  return (
    <div>
          <div className='Adminnav'>
          <div className='log'>
           <Link onClick={clicked}>Logout</Link>
          </div>
          <div>
             <ul>
                   <li>
                    <Link to='/showmenu'>Menu</Link>
                   </li>
                   <li>
                    <Link to='/reviews'>Reviews</Link>
                   </li>
             </ul>
          </div>
       </div>
    </div>
  )
}

export default RestDashnav
