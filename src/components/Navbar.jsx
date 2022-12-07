import React from 'react'
import '../App.scss'
function Navbar() {
  return (
    <div className='container'>
        <h1 className='logo'><a href="#">Website</a></h1>
        <ul>
            <li><a href="#" className='current'>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar