import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import abbevillemini from "../img/abbeville/abbevillemini.jpg";
import amiensmini from "../img/amiens/amiensmini.jpg";
import angersmini from "../img/angers/angersmini.jpg";
import argentanmini from "../img/argentan/argentanmini.jpg";
import arrasmini from "../img/arras/arras01min.jpg";
import auteuilmini from "../img/auteuil/auteuilmini.jpg";
import bacquevillemini from "../img/bacqueville/bacquevillemini.jpg";
import bernaymini from "../img/bernay/bernaymini.jpg";
import bihorelmini from "../img/bihorel/bihorelmini.jpg";
import cabourgmini from "../img/cabourg/cabourgmini.jpg";
import caenmini from "../img/caen/caenmini.jpg";

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
    const arras = [50.29358383886521, 2.737261885372093];
    const auteuil = [48.85357949565165, 2.2576086105700597];
    const bacqueville = [49.789944562691666, 1.0040160319636016];
    const bernay = [49.082567, 0.6087611];
    const bihorel = [49.4586393, 1.1191943];
    const cabourg = [49.2772449, -0.1206713];
    const caen = [49.1751767, -0.3708798];

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
                      <img src={arrasmini} alt="arras" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={auteuil}>
              <Popup>
                <Link to="/auteuil" className="linkHippodrome">
                  <div className="lien">
                    <div>Auteuil</div>
                    <div>
                      <img src={auteuilmini} alt="auteuil" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={bacqueville}>
              <Popup>
                <Link to="/bacqueville_en_caux" className="linkHippodrome">
                  <div className="lien">
                    <div>Bacqueville-en-Caux</div>
                    <div>
                      <img
                        src={bacquevillemini}
                        alt="bacqueville"
                        className="apercu"
                      />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={bernay}>
              <Popup>
                <Link to="/bernay" className="linkHippodrome">
                  <div className="lien">
                    <div>Bernay</div>
                    <div>
                      <img src={bernaymini} alt="bernay" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={bihorel}>
              <Popup>
                <Link to="/bihorel" className="linkHippodrome">
                  <div className="lien">
                    <div>Bihorel</div>
                    <div>
                      <img src={bihorelmini} alt="bihorel" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={cabourg}>
              <Popup>
                <Link to="/cabourg" className="linkHippodrome">
                  <div className="lien">
                    <div>Cabourg</div>
                    <div>
                      <img src={cabourgmini} alt="cabourg" className="apercu" />
                    </div>
                  </div>
                </Link>
              </Popup>
            </Marker>
            <Marker position={caen}>
              <Popup>
                <Link to="/caen" className="linkHippodrome">
                  <div className="lien">
                    <div>Caen</div>
                    <div>
                      <img
                        src={caenmini}
                        alt="caen"
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
