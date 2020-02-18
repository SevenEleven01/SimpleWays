import React, { Component } from 'react';
import './maps.css';
import HeadBar from '../../components/header-bar/header-bar';


class Maps extends Component {
  render() {
    return (
     <>
     <HeadBar/>
     <div id="map" style={{ width: "100p%", height: "100vh" }}></div>
     </>
    );
  }
}

export default Maps;
