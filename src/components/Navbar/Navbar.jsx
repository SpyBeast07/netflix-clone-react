import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.svg'
import search_icon from '../../assets/images/search_icon.svg'
import bell_icon from '../../assets/images/bell_icon.svg'
import profile_img from '../../assets/images/profile_img.svg'
import caret_icon from '../../assets/images/caret_icon.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="Netflix" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="Search" className='icons' />
                <p>Children</p>
                <img src={bell_icon} alt="Notifications" className='icons' />
                <div className="navbar-profile">
                    <img src={profile_img} alt="Profile" className='profile' />
                    <img src={caret_icon} alt="Drop Down" />
                    <div className="dropdown">
                        <p onClick={() => navigate('/')}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
