import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const AdminNav = () => {
   const navigate = useNavigate();

const clicked = (e) => {
  e.preventDefault();
  localStorage.removeItem('adtoken');
  navigate('/Admin');
  console.log('Clicked and navigated to /Admin');
};

  return (
    <div>
       <div className='Adminnav'>
          <div className='log'>
           <Link onClick={clicked}> Logout</Link>
          </div>
          <div>
             <ul>
                   <li>
                    <Link to='/Restaurants'>Restaurants</Link>
                   </li>
                   <li>
                    <Link to='/Customers'>Customers</Link>
                   </li>
             </ul>
          </div>
       </div>
    </div>
  )
}

export default AdminNav
