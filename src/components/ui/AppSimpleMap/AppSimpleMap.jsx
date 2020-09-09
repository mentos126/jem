import React from 'react'
import { Map, Marker, TileLayer, Popup } from 'react-leaflet'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './AppSimpleMap.scss'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function AppSimpleMap ({marker}) {
  const {position, zoom, popup} = marker

  return (
    <div>
      <Map center={position} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={position}>
          <Popup>{popup}</Popup>
        </Marker>
      </Map>
    </div>
  )
}
