import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import saint_malo from "../../../img/saint-malo/saint-malo.jpg";
import saint_malo2 from "../../../img/saint-malo/saint-malo2.jpg";
import saint_malo3 from "../../../img/saint-malo/saint-malo3.jpg";
import saint_malo4 from "../../../img/saint-malo/saint-malo4.jpg";
import saint_malo5 from "../../../img/saint-malo/saint-malo5.jpg";
import saint_malo6 from "../../../img/saint-malo/saint-malo6.jpg";
import saint_malo7 from "../../../img/saint-malo/saint-malo7.jpg";
import saint_malo8 from "../../../img/saint-malo/saint-malo8.jpg";
import saint_malo9 from "../../../img/saint-malo/saint-malo9.jpg";
import saint_malo10 from "../../../img/saint-malo/saint-malo10.jpg";
import saint_malo11 from "../../../img/saint-malo/saint-malo11.jpg";

class Saint_Malo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Saint-Malo",
      image: "saint-malo.jpg",
      piste: "herbe et sable",
      corde: "droite",
      circonference: "1 500 m",
      region: "Bretagne",
      departement: "Ile-et-Vilaine",
      ville: "Saint-Malo",
      surnom: "hippodrome de Marville"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Saint-Malo Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/saint-malo"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={saint_malo}
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
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_malo2}
                alt="saint-malo2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_malo3}
                alt="saint-malo3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_malo4}
                alt="saint-malo4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_malo5}
                alt="saint-malo5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_malo6}
                alt="saint-malo6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_malo7}
                alt="saint-malo7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_malo8}
                alt="saint-malo8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_malo9}
                alt="saint-malo9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={saint_malo10}
                alt="saint-malo10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_malo11}
                alt="saint-malo11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Saint_Malo;
