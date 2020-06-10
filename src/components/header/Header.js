import React from 'react'
import NavBar from '../navbar/NavBar'
import './Header.css'
import Bike from '../../assets/img/bike.svg'
import login from '../../assets/img/login.svg'
export default function Header() {
    return (
        <header className='header'>
            <input type='checkbox' id='navbar-checkbox' className='navbar-checkbox' name='navbar-checkbox'/>
            <label htmlFor='navbar-checkbox' className='burger'>
                <div className="toggle-button__line" />
                <div className="toggle-button__line" />
                <div className="toggle-button__line" />
            </label>
            <img src={Bike}alt='bikeIcon' className='header-logo' />
            <img src={login}alt='bloginIcon' className='header-login'/>
            <NavBar/>
            
        </header>
    )
}
