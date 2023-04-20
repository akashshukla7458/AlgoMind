import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';


import './Navbar.css'
import Login from '../auth/Login';
import Userpage from '../auth/Userpage';
import AuthModal from '../auth/AuthModal';
import { AlgoState } from '../Context';


const Navbar = () => {


    const [toggleMenu, setToggleMenu] = useState(false);
    const history = useHistory();
    const { user } = AlgoState();
    const userhandle = () => {
        history.push('/Userpage')
      }

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gradient__text">
                    <h2 className='gpt3__navbar_logo'><Link to = '/'> AlgoMind</Link></h2>
                </div>
                <div className="gpt3__navbar-links_container">

                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/about">About us</Link></p>

                </div>
            </div>

            {user ? <Avatar
                className="picture"
                src={user.photoURL}
                alt={user.displayName || user.email}
                onClick={userhandle}
            /> : <AuthModal />}
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
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
