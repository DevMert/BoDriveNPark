import React from 'react'
import {
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom'
import Map from './Map'
import Dashboard from './Dashboard'

export default function NavBar() {
  return (
    <BrowserRouter>
      <div>       
        <ul className="Navbar">
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/map'>Map</Link></li>
        </ul>

        <hr />

        
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/map' component={Map} />


      </div> 
    </BrowserRouter>
  )
}

