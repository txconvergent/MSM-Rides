import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css';

export class MapContainer extends Component {
  render() {
    return (
      <div className='mapBackground'>
        <Map google={this.props.google} 
        zoom={6}
        initialCenter={{
          lat: 30.27,
          lng: -97.74
        }}
        >

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
              
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

console.log(process.env.REACT_APP_MAPS_API_KEY);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer)