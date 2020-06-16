import React, { Component, Fragment } from 'react';
import { Map, TileLayer, LayersControl, Popup, Marker } from 'react-leaflet';
import Search from "react-leaflet-search";
import "leaflet/dist/leaflet.css";
import './Map.css'
import MapOptionBar from '../mapoptionbar/MapOptionBar';
import Weather from '../weather/Weather'
import L from 'leaflet';
import Routing from "./RoutingMachine";
// import Routing from "./Routing";
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import {Context} from '../../store/Context'


// const { BaseLayer, Overlay } = LayersControl ;


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});




export default class LeafletMap extends Component {

  static contextType = Context ;



createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}



 refMap = map => {
    this.map = map;
    const {saveMap} = this.context
    saveMap()
  };

  
  componentDidUpdate(prevProps, prevState) {
    // if( prevState.currentMarkerPosition !== this.state.currentMarkerPosition){
    //   this.setState({
    //      currentMarkerPosition:[this.handleClick.lat, this.handleClick.lng]
    //   })
    // }
  }

  myPopup=(SearchInfo) => {
    return(
      <Popup >
        <div className='search-popup'>
          <p>latitude and longitude from search component:{SearchInfo.latLng.toString().replace(',',' , ')}</p>
          <p>Adresse: {SearchInfo.info}</p>
          {/* {console.log(SearchInfo)} */}

          {/* <p>{JSON.stringify(SearchInfo.raw)}</p> */}
        </div>
      </Popup>
    );
  }


  

  handleClick(e) {
    return e.latlng  
  }

  render() {

    const {initialPosition, isMapInit, weatherIsOpen, setWeather} = this.context
    const position = [initialPosition.lat,initialPosition.lng]
    return (
      <Fragment>
            <Map className='map' center={position} onclick={this.handleClick} zoom={initialPosition.zoom} ref={this.refMap} style={{ height: "calc(100vh - 100px)" }}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                // url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                 url='https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=iMol10A9RwYIC4jyyBx3SimR0qvTvRN5zGYuL7r9sMXh7Oos6KjoMiNgyoiMKATf'
              />
              {isMapInit && <Routing className='Router' map={this.map} />}
             
              <Search className='search-bar' position="topright" openSearchOnLoad={false} popUp={this.myPopup} closeResultsOnClick={true} />
            </Map>
            {weatherIsOpen?<Weather />: null }   
              <MapOptionBar weatherOnClick={setWeather}  />
      </Fragment>
    );
  }
}