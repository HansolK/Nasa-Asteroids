import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="/neofeed">NeoFeed</Link>
    </nav>
  )
}

export default Header