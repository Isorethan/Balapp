import React, { Component, Fragment } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Weather.css';
import {Context} from '../../store/Context'

export default class Weather extends Component {
    static contextType = Context ;

    
 
      

    componentDidMount(){
        

   
    }

    render() {
      const { weatherData} = this.context
        return (
             <Fragment>
                 {console.log(weatherData)}
                    {weatherData !== null?
                        <aside className='weather-widget'>
                            <h1 className='weather__city-name'>{weatherData.name} </h1>
                            <div className='weather__infos-container'>

                                <div className='weather__infos left-data'>
                                    <p>Température: {(weatherData.main.temp-270).toFixed(2)}°C</p>
                                    <p>Temp ressentie: {(weatherData.main.feels_like-270).toFixed(2)}°C</p>
                                  
                                    <p>vitesse du vent: {weatherData.wind.speed} km/h</p>
                                </div>

                                <div className='weather__infos right-data'>
                                    <p>{weatherData.weather[0].description}</p>
                                    <img className='weather-icon' src={"http://openweathermap.org/img/w/"+weatherData.weather[0].icon+".png"} alt='weather icon'/>
                                </div>
                            
                            </div>
                        </aside>
                        
                        :
                        <aside className='weather-widget weather-loading'>
                            <Loader className='weather__spinner' type="Bars" color="#FF9B42" height={80} width={80} />
                        </aside> 
                    }

            </Fragment>
        )
    }
}
