import React, { useState } from 'react'
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
            <li onClick={() => {setMenu("home")}}>Home {menu === "home"? <hr />:<></>} </li>
            <li onClick={() => {setMenu("mens")}}>Men {menu === "mens"? <hr />:<></>}</li>
            <li onClick={() => {setMenu("womans")}}>Women {menu === "womans"? <hr />:<></>}</li>
            <li onClick={() => {setMenu("kids")}}>Kids {menu === "kids"? <hr />:<></>}</li>
        </ul>
        <div className="nav-loging-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar