import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import chartres from "../../../img/chartres/chartres.jpg";
import chartres2 from "../../../img/chartres/chartres2.jpg";
import chartres3 from "../../../img/chartres/chartres3.jpg";
import chartres4 from "../../../img/chartres/chartres4.jpg";
import chartres5 from "../../../img/chartres/chartres5.jpg";
import chartres6 from "../../../img/chartres/chartres6.jpg";
import chartres7 from "../../../img/chartres/chartres7.jpg";
import chartres8 from "../../../img/chartres/chartres8.jpg";
import chartres9 from "../../../img/chartres/chartres9.jpg";
import chartres10 from "../../../img/chartres/chartres10.jpg";
import chartres11 from "../../../img/chartres/chartres11.jpg";

class Chartres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Chartres",
      image: "chartres.jpg",
      piste: "sable",
      corde: "gauche",
      circonference: "1 003 m",
      region: "Centre-Val de Loire",
      departement: "Eure-et-Loire",
      ville: "Chartres",
      surnom: "hippodrome de Chartres"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Chartres Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/chartres"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={chartres}
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
                src={chartres2}
                alt="chartres2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chartres3}
                alt="chartres3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={chartres4}
                alt="chartres4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chartres5}
                alt="chartres5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={chartres6}
                alt="chartres6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chartres7}
                alt="chartres7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={chartres8}
                alt="chartres8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chartres9}
                alt="chartres9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={chartres10}
                alt="chartres10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={chartres11}
                alt="chartres11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Chartres;
