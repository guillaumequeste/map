import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import abbevillemini from "../img/abbeville/abbevillemini.jpg";
import amiensmini from "../img/amiens/amiensmini.jpg";
import angersmini from "../img/angers/angersmini.jpg";
import argentanmini from "../img/argentan/argentanmini.jpg";
import arrasmini from "../img/arras/arras01min.jpg";

export default class CarteHippodromes extends Component {
  state = {
    lat: 49.5,
    lng: 2,
    zoom: 5
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const abbeville = [50.0915, 1.8184099999999717];
    const amiens = [49.893904380381564, 2.2694657325744174];
    const angers = [47.4944796, -0.5072976];
    const argentan = [48.75395, 0.0014978];
    const arras = [50.29358383886521, 2.737261885372093]

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
            <Marker position={amiens}>
              <Popup>
                <Link to="/amiens" className="linkHippodrome">
                  <div className="lien">
                    <div>Amiens</div>
                    <div>
                      <img src={amiensmini} alt="amiens" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={angers}>
              <Popup>
                <Link to="/angers" className="linkHippodrome">
                  <div className="lien">
                    <div>Angers</div>
                    <div>
                      <img src={angersmini} alt="angers" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={argentan}>
              <Popup>
                <Link to="/argentan" className="linkHippodrome">
                  <div className="lien">
                    <div>Argentan</div>
                    <div>
                      <img
                        src={argentanmini}
                        alt="argentan"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={arras}>
              <Popup>
                <Link to="/arras" className="linkHippodrome">
                  <div className="lien">
                    <div>Arras</div>
                    <div>
                      <img
                        src={arrasmini}
                        alt="arras"
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
