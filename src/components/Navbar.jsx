import React from 'react'
import menu from '../images/menu.svg'

const Navbar = () => {
    return (
        <nav>
            <span className="logo">sam</span>
            <button className="menu">
                <img src={menu} alt="menu" />
            </button>
            <ul className="nav-ul">
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
            </ul>
        </nav>
    )
}

export default Navbar
