import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const CustDashnav = () => {
  const navigate=useNavigate()
  const clic=(e)=>{
    e.preventDefault();
    localStorage.removeItem('custtoken')
    navigate('/custlogin')
  }
  return (
    <div>
       <div className="navigation-container">
      <div className="logout-section">
        <Link><h4 onClick={clic}>Logout</h4></Link>
      </div>
      <div className="menu-section">
        <ul>
          <Link to='/custdetails'><li className="profile">Profile</li></Link>
          <Link to='/cart'><li className="cart">Cart</li></Link>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default CustDashnav
