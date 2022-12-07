import React from 'react'
import '../App.scss'
function Navbar() {
  return (
    <div className='container'>
        <h1 className='logo'>My Website</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contac</a></li>
        </ul>
    </div>
  )
}

export default Navbar