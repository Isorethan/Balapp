import React, { Component, Fragment } from 'react';
import { Map, TileLayer, LayersControl, Popup, Marker } from 'react-leaflet';
import Search from "react-leaflet-search";
import "leaflet/dist/leaflet.css";
import './Map.css'
import MapOptionBar from '../mapoptionbar/MapOptionBar';
import Weather from '../weather/Weather'
import L from 'leaflet';


const { BaseLayer, Overlay } = LayersControl ;


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



export default class SimpleExample extends Component {
 
      state = {
        lat: 48.0833,
        lng: -1.6833,
        zoom:13,
        weatherIsOpen:false
      }
  

  Popup=(SearchInfo) => {
    return(
      <Popup>
        <div>
          <p>latitude and longitude from search component:{SearchInfo.latLng.toString().replace(',',' , ')}</p>
          <p>Adresse: {SearchInfo.info}</p>
          {/* <p>{JSON.stringify(SearchInfo.raw)}</p> */}
        </div>
      </Popup>
    );
  }

 setWeather=(e) =>{
  e.preventDefault();
   this.setState({
     weatherIsOpen:!this.state.weatherIsOpen
   })
 }





  render() {
    
    const position = [this.state.lat, this.state.lng]
    return (
      <Fragment>
        
      <Map className='map' center={position} zoom={this.state.zoom} style={{ height: "calc(100vh - 100px)" }}>
        <LayersControl position="topright" >
                <BaseLayer checked name="OpenStreetMap.Mapnik">
                      <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                </BaseLayer>
                
                <Overlay name="Marker with popup">
                  <Marker position={[48.4438604,-1.1050784 ]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </Overlay>
         

                <Search className='search-bar' position="topright" openSearchOnLoad={false} popUp={this.myPopup} closeResultsOnClick={true} />

        </LayersControl>
   
      </Map>
     {this.state.weatherIsOpen?<Weather />: null }   
        <MapOptionBar weatherOnClick={this.setWeather}  />
      </Fragment>
    )
  }
}


