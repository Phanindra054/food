import React from 'react'
import Customermainnav from './Customermainnav'
import { Link } from 'react-router-dom'
const Customermain = () => {
  return (
    <div>
      <Customermainnav/>
      <div className='or'>
         You Can Order
      </div>
      <div className='all'>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Biryani.jpg'/>
             <h2 className='rechead'>Biryani</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='ButterChicken.jpg'/>
             <h2 className='rechead'>ButterChicken</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Meals.jpg'/>
             <h2 className='rechead'>Meals</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Coffee.jpg'/>
             <h2 className='rechead'>Coffee</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Puff.jpg'/>
             <h2 className='rechead'>Puff</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Cake.webp'/>
             <h2 className='rechead'>Cake</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='chilliChicken.jpg'/>
             <h2 className='rechead'>chilliChicken</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='ChickenLollipop.jpg'/>
             <h2 className='rechead'>ChickenLollipop</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Coffee.jpg'/>
             <h2 className='rechead'>Coffee</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Fish.jpg'/>
             <h2 className='rechead'>Fish</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='FriedRice.jpg'/>
             <h2 className='rechead'>FriedRice</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Icecream.jpg'/>
             <h2 className='rechead'>Icecream</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Milkshake.jpg'/>
             <h2 className='rechead'>Milkshake</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Mutton.jpg'/>
             <h2 className='rechead'>Mutton</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Noodles.jpg'/>
             <h2 className='rechead'>Noodles</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Pizza.jpg'/>
             <h2 className='rechead'>Pizza</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Prawn.jpg'/>
             <h2 className='rechead'>Prawns</h2>
          </div>
          </Link>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='Burger.jpg'/>
             <h2 className='rechead'>Burger</h2>
          </div>
          </Link>
          <div className='recdiv'>
             <img className='recimg' src='softdrinks.jpg'/>
             <h2 className='rechead'>Softdrinks</h2>
          </div>
          <Link to='/custlogin'>
          <div className='recdiv'>
             <img className='recimg' src='tandoori.jpg'/>
             <h2 className='rechead'>Tandoori</h2>
          </div>
          </Link>
      </div>
    </div>
  )
}

export default Customermain
