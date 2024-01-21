import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
const Header = () => {
  return (
    <div id='header'>
        <div className="container">
            <div className="header">
                <h1 className='header-h1'>EATWELL</h1>
                
<ul className='header-ul'>
    <NavLink className="navlink" to="/" >HOME</NavLink>
    <NavLink className="navlink" to="/about" >ABOUT</NavLink>

    <NavLink className="navlink" to="/offer" >OFFER</NavLink>

    <NavLink className="navlink" to="/menu" >MENU</NavLink>

    <NavLink className="navlink" to="/news" >NEWS</NavLink>
    <NavLink className="navlink" to="/contact" >CONTACT</NavLink>
    <NavLink className="navlink" to="/add" >ADD</NavLink>

</ul>

            </div>
        </div>
        
    </div>
  )
}

export default Header