
import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import 'lrm-google';
import { withLeaflet } from "react-leaflet";
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
// import 'leaflet-control-geocoder/dist/Control.Geocoder.css';




class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let router = L.Routing.mapbox('pk.eyJ1IjoiaWl6byIsImEiOiJjazU4NTNla28wODliM2pyZm9uNHI1bXBvIn0.OT8s8L8U9Y0o0OjTIdBb4g');
    let vehicle = 'cycling';
    router.options.profile = 'mapbox/'+vehicle ;
    let leafletElement = L.Routing.control({
      waypoints: [
       
      ],
      // router: 
      lineOptions: {
        // styles: [
        //   {
        //     color: "#FF9B42",
        //     opacity: 1,
        //     weight: 4
        //   }
        // ]
      },
      router: router,
      language: 'fr',
      show:false,
      reverseWaypoints:true,
      collapsible:true,
      addWaypoints: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      show: false,  
      geocoder: L.Control.Geocoder.mapbox('pk.eyJ1IjoiaWl6byIsImEiOiJjazU4NTNla28wODliM2pyZm9uNHI1bXBvIn0.OT8s8L8U9Y0o0OjTIdBb4g')
  
    }).addTo(map.leafletElement);
    
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);