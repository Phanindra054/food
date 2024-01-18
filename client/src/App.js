import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Admin from './Admin'
import DashAdmin from './DashAdmin'
import Restaurants from './Restaurants'
import Menu from './Menu'
import Restaurantmain from './Restaurantmain'
import Customer from './Customer'
import Restregister from './Restregister'
import Restlogin from './Restlogin'
import RestDash from './RestDash'
import Showmenu from './Showmenu'
import MainPage from './MainPage'
import Customermain from './Customermain'
import Custregister from './Custregister'
import Custlogin from './Custlogin'
import CustDash from './CustDash'
import Custprofile from './Custprofile'
import Restmenu from './Restmenu'
import Foodmenupage from './Foodmenupage'
import Cart from './Cart'
import AdminMenu from './AdminMenu'
import AdminReviews from './AdminReviews'
import Adminpur from './Adminpur'
import Restrev from './Restrev'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={MainPage} />
        <Route path='/Admin' Component={Admin}/>
        <Route path='/DashAdmin' Component={DashAdmin}/>
        <Route path='/Restaurants' Component={Restaurants} />
        <Route path='/viewadminmenu/:id' Component={Menu} />
        <Route path='/customers' Component={Customer} />
        <Route path='/restaurant' Component={Restaurantmain} />
        <Route path='/restregister' Component={Restregister} />
        <Route path='/restlogin' Component={Restlogin} />
        <Route path='/Dashrest' Component={RestDash} />
        <Route path='/showmenu' Component={Showmenu} />
        <Route path='/customer' Component={Customermain} />
        <Route path='/custregister' Component={Custregister} />
        <Route path='/custlogin' Component={Custlogin} />
        <Route path='/CustDash' Component={CustDash} />
        <Route path='/custdetails' Component={Custprofile} />
        <Route path='/allrestmenu/:id' Component={Restmenu}/>
        <Route path='/foodmenu/:id' Component={Foodmenupage} />
        <Route path='/cart' Component={Cart}/>
        <Route path='/adminmenu/:id' Component={AdminMenu}/>
        <Route path='/viewadminreviews/:id' Component={AdminReviews} />
        <Route path='/adminpur/:id' Component={Adminpur} />
        <Route path='/reviews' Component={Restrev}/>
      </Routes>
    </div>
  )
}

export default App
