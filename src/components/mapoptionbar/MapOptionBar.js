import React from 'react';
import './MapOptionBar.css';
import Sun from '../../assets/img/sun.svg'
import MapIcon from '../../assets/img/109-map-location.svg'

export default function MapOptionBar (props) {
 
    
        return (
            <nav className='map__nav'>
                <ul>
                    <li><img src={Sun} alt='météo' className='map__nav-icon' onClick={props.weatherOnClick} /><span>météo</span></li>
                    <li><img src={MapIcon} alt='itinéraire' className='map__nav-icon'/><span>itinéraire</span></li>
                </ul>
            </nav >
        )
    
}
