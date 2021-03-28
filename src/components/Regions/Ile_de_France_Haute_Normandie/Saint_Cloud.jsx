import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import saint_cloud from "../../../img/saint-cloud/saint-cloud.jpg";
import saint_cloud2 from "../../../img/saint-cloud/saint-cloud2.jpg";
import saint_cloud3 from "../../../img/saint-cloud/saint-cloud3.jpg";

class Saint_Cloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Saint-Cloud",
      image: "saint-cloud.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "2 300 m",
      region: "Ile de France",
      departement: "Hauts-de-Seine",
      ville: "Saint-Cloud",
      surnom: "hippodrome de Saint-Cloud"
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={saint_cloud}
              alt={this.state.nom}
              className="tailleImage"
            />
          </div>
          <Roll right>
            <div className="description">
              <h2 className="titreCard">{this.state.nom}</h2>
              <ul>
                <li className="liCard">
                  <strong>Piste : </strong>
                  {this.state.piste}
                </li>
                <li className="liCard">
                  <strong>Corde : </strong>
                  {this.state.corde}
                </li>
                <li className="liCard">
                  <strong>Circonference : </strong>
                  {this.state.circonference}
                </li>
                <li className="liCard">
                  <strong>Région : </strong>
                  {this.state.region}
                </li>
                <li className="liCard">
                  <strong>Département : </strong>
                  {this.state.departement}
                </li>
                <li className="liCard">
                  <strong>Ville à proximité : </strong>
                  {this.state.ville}
                </li>
                <li className="liCard">
                  <strong>Surnom : </strong>
                  {this.state.surnom}
                </li>
                <li className="liCard">
                  <i>&darr; + de photos &darr;</i>
                </li>
              </ul>
            </div>
          </Roll>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={saint_cloud2}
                alt="saint-cloud2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_cloud3}
                alt="saint-cloud3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Saint_Cloud;
