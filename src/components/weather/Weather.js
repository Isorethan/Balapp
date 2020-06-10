import React, { Component, Fragment } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Weather.css';

export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state= {
            location:null,
            data: null
         
        }
    }

    
    WeatherApi(query= 'fetch:ip', time='current' ) {
    let t = this;
    let Url = `http://api.weatherstack.com/${time}?access_key=2f611ef3163a6efb098c07a2587762b4&query=${query} `;
    fetch(Url).then(res =>res.json()).then(res => t.setState({
        data:res
    }))
    ;
}

    componentDidMount(){
        this.WeatherApi('Paris')
    }

    render() {
      
        return (
             <Fragment>
                    {this.state.data !== null?
                        <aside className='weather-widget'>
                            <h1 className='weather__city-name'>{this.state.data.location.name} le {this.state.data.location.localtime}</h1>
                            <div className='weather__infos-container'>

                                <div className='weather__infos left-data'>
                                    <p>Température: {this.state.data.current.temperature}°C</p>
                                    <p>Temp ressentie: {this.state.data.current.feelslike}°C</p>
                                    <p>Index UV: {this.state.data.current.uv_index}</p>
                                    <p>vitesse du vent: {this.state.data.current.wind_speed} m/h</p>
                                </div>

                                <div className='weather__infos right-data'>
                                    <p>{this.state.data.current.weather_descriptions[0]}</p>
                                    <img className='weather-icon' src={this.state.data.current.weather_icons[0]} alt='weather icon'/>
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
