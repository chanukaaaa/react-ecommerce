import React, { useState } from 'react'
import { Link } from 'react-router-dom'; 
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    const[menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link> {menu === "home"? <hr />:<></>} </li>
            <li onClick={() => {setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link> {menu === "mens"? <hr />:<></>}</li>
            <li onClick={() => {setMenu("womans")}}><Link style={{ textDecoration: 'none'}} to='/womans'>Women</Link> {menu === "womans"? <hr />:<></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link> {menu === "kids"? <hr />:<></>}</li>
        </ul>
        <div className="nav-loging-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar