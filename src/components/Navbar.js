import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gradient__text">
                    <h2>AlgoMind</h2>
                </div>
                <div className="gpt3__navbar-links_container">

                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/about">About us</Link></p>

                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            {/* <p><a href="#">Home</a></p>
                            <p><a href="#">About us</a></p> */}

                            <p><Link to="/">Home</Link></p>
                            <p><Link to="/about">About us</Link></p>

                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
