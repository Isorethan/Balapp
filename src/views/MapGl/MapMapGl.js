import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export default function MapGl() {
  const [viewport, setViewport] = useState({
    width:'100vw',
    height: 'calc(100vh - 100px)',
    latitude: 48.0833,
    longitude: -1.6833,
    zoom: 8,
  });

  return (
    <ReactMapGL className='map'  mapboxApiAccessToken="pk.eyJ1IjoiaWl6byIsImEiOiJjazU4NTNla28wODliM2pyZm9uNHI1bXBvIn0.OT8s8L8U9Y0o0OjTIdBb4g"
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}