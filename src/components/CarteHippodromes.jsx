import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import abbevillemini from "../img/abbeville/abbevillemini.jpg";

export default class CarteHippodromes extends Component {
  state = {
    lat: 49.5,
    lng: 2,
    zoom: 5
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const abbeville = [50.0915, 1.8184099999999717];

    return (
      <div className="bodyMap">
        <div className="map">
          <h1 className="titreCarte">53 hippodromes visités</h1>
          <MapContainer center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={abbeville}>
              <Popup minWidth={200}>
                <Link to="/abbeville" className="linkHippodrome">
                  <div className="lien">
                    <div>Abbeville</div>
                    <div>
                      <img
                        src={abbevillemini}
                        alt="abbeville"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
  }
}
