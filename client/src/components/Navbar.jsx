import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import Navbar2 from './Navbar2'
const Navbar = () => {
  return (
    <div id='navbar'>
      <h1>Streaming</h1>
      <Link to='/'><p id='navbarP'>Return</p> </Link>
      <Navbar2 />
    </div>
  )
}

export default Navbar
