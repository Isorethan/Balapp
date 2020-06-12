import React, { Component, Fragment } from 'react';
import { Map, TileLayer, LayersControl, Popup, Marker } from 'react-leaflet';
import Search from "react-leaflet-search";
import "leaflet/dist/leaflet.css";
import './Map.css'
import MapOptionBar from '../mapoptionbar/MapOptionBar';
import Weather from '../weather/Weather'
import L from 'leaflet';
import Routing from "./RoutingMachine";
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'



// const { BaseLayer, Overlay } = LayersControl ;


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



// export default class SimpleExample extends Component {
//       constructor(){
//         super();
//         this.state = {
//         lat: 48.0833,
//         lng: -1.6833,
//         zoom:13,
//         weatherIsOpen:false,
//         isMapInit: false
//       }
//       }
      
  


//   saveMap = map => {
//     this.map = map;
//     this.setState({
//       isMapInit: true
//     });
//   };









//   render() {
    
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <Fragment>
        
//       <Map  className='map' ref={this.saveMap} center={position} zoom={this.state.zoom} style={{ height: "calc(100vh - 100px)" }}>
//                       {this.state.isMapInit && <Routing map={this.map} />}
//                       <TileLayer
//                                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                       />
       
                
              
//                   <Marker position={[48.4438604,-1.1050784 ]} draggable={true}>
//                     <Popup>
//                       A pretty CSS3 popup. <br /> Easily customizable.
//                     </Popup>
//                   </Marker>
                  
             
         

//             <Search className='search-bar' position="topleft" openSearchOnLoad={false} popUp={this.myPopup} closeResultsOnClick={true} />

     
           
//       </Map>
//       {this.state.weatherIsOpen?<Weather />: null }   
//         <MapOptionBar weatherOnClick={this.setWeather}  />
//       </Fragment>
//     )
//   }
// }



export default class LeafletMap extends Component {
  state = {
    initialPosition:{lat: 57.74,lng: 11.94,zoom: 13,},
    currentMarkerPosition:null,
    routeIsOn:false,
    currentRoute:[],
    isMapInit: false,
    weatherIsOpen:false,
    loginIsOpen:false,
    routeListIsOpen:false,
    isLogged:false,
    
  };
  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  myPopup=(SearchInfo) => {
    return(
      <Popup >
        <div className='search-popup'>
          <p>latitude and longitude from search component:{SearchInfo.latLng.toString().replace(',',' , ')}</p>
          <p>Adresse: {SearchInfo.info}</p>
          {console.log(SearchInfo)}

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

  handleClick(e) {
    console.log(e.latlng);
    return <Marker position={[e.latlng.lat,e.latlng.lng ]} draggable={true}>
    <Popup>
       A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
</Marker>
    
  }

  render() {
    const position = [this.state.initialPosition.lat, this.state.initialPosition.lng];
    return (
      <Fragment>
            <Map className='map' center={position} onclick={this.handleClick} zoom={this.state.initialPosition.zoom} ref={this.saveMap} style={{ height: "calc(100vh - 100px)" }}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />
              {this.state.isMapInit && <Routing map={this.map} />}
             
              <Search className='search-bar' position="topright" openSearchOnLoad={false} popUp={this.myPopup} closeResultsOnClick={true} />
            </Map>
            {this.state.weatherIsOpen?<Weather />: null }   
              <MapOptionBar weatherOnClick={this.setWeather}  />
      </Fragment>
    );
  }
}