
import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

// class Routing extends MapLayer {
//   createLeafletElement() {
//     const { map } = this.props;
//     let leafletElement = L.Routing.control({
//       waypoints: [
//         L.latLng(16.506, 80.648),
//         L.latLng(17.384, 78.4866),
//         L.latLng(12.971, 77.5945)
//       ],
//       //   router: new L.Routing.Google({
//       //   travelMode: google.maps.TravelMode.TRANSIT,
//       //   unitSystem: google.maps.UnitSystem.METRIC,
//       //   provideRouteAlternatives: true
//       // }),
//       lineOptions: {
//         styles: [
//           {
//             color: "blue",
//             opacity: 0.6,
//             weight: 4
//           }
//         ]
//       },
//       addWaypoints: false,
//       draggableWaypoints: true,
//       fitSelectedRoutes: true,
//       showAlternatives: false,
//       routeWhileDragging: true,
//       geocoder: L.Control.Geocoder.nominatim()
//     }).addTo(map.leafletElement);

 
//     return leafletElement.getPlan();
//   }
// }
// export default withLeaflet(Routing);

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [
       
      ],
      // router: new L.Routing.Google(),
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.6,
            weight: 2
          }
        ]
      },
      show:true,
      collapsible:true,
      addWaypoints: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
      geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map.leafletElement);
    
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);