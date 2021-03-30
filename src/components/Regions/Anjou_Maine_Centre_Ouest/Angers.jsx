import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import angers from "../../../img/angers/angers.jpg";
import angers2 from "../../../img/angers/angers2.jpg";
import angers3 from "../../../img/angers/angers3.jpg";
import angers4 from "../../../img/angers/angers4.jpg";
import angers5 from "../../../img/angers/angers5.jpg";
import angers6 from "../../../img/angers/angers6.jpg";
import angers7 from "../../../img/angers/angers7.jpg";
import angers8 from "../../../img/angers/angers8.jpg";
import angers9 from "../../../img/angers/angers9.jpg";
import angers10 from "../../../img/angers/angers10.jpg";
import angers11 from "../../../img/angers/angers11.jpg";
import angers12 from "../../../img/angers/angers12.jpg";
import angers13 from "../../../img/angers/angers13.jpg";

class Angers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Angers",
      image: "angers.jpg",
      piste: "herbe et sable",
      corde: "gauche",
      circonference: "1 801 m",
      region: "Pays de la Loire",
      departement: "Maine-et-Loire",
      ville: "Angers",
      surnom: "hippodrome d'Eventard"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Angers Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/angers"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={angers}
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
                src={angers2}
                alt="angers2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={angers3}
                alt="angers3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={angers4}
                alt="angers4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={angers5}
                alt="angers5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={angers6}
                alt="angers6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={angers7}
                alt="angers7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={angers8}
                alt="angers8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={angers9}
                alt="angers9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={angers10}
                alt="angers10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={angers11}
                alt="angers11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={angers12}
                alt="angers12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={angers13}
                alt="angers13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Angers;
