import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav role='navigation' className='navbar'>
            <ul>
                <li><NavLink to="/" className='navbar-links'><label htmlFor='navbar-checkbox' className='link-label' name=''>test</label></NavLink></li>
                <li><NavLink to="/map/" className='navbar-links'>Map</NavLink></li>
                <li><NavLink to="/" className='navbar-links'>links 3</NavLink></li>
                <li><NavLink to="/" className='navbar-links'>links 4</NavLink></li>
            </ul>
     
        </nav >
    )
}
