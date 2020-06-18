import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './MainRouter.css'
import Map from '../components/map/Map.js';

export default function MainRouter() {
    return (
        <main className='content'>
            <Switch>
            <Route exact path='/'>
                <Map/>
            </Route>
       
            </Switch>
        </main>
    )
}
