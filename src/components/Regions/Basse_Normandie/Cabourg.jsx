import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import cabourg from "../../../img/cabourg/cabourg.jpg";
import cabourg2 from "../../../img/cabourg/cabourg2.jpg";
import cabourg3 from "../../../img/cabourg/cabourg3.jpg";
import cabourg4 from "../../../img/cabourg/cabourg4.jpg";
import cabourg5 from "../../../img/cabourg/cabourg5.jpg";
import cabourg6 from "../../../img/cabourg/cabourg6.jpg";
import cabourg7 from "../../../img/cabourg/cabourg7.jpg";
import cabourg8 from "../../../img/cabourg/cabourg8.jpg";
import cabourg9 from "../../../img/cabourg/cabourg9.jpg";
import cabourg10 from "../../../img/cabourg/cabourg10.jpg";
import cabourg11 from "../../../img/cabourg/cabourg11.jpg";
import cabourg12 from "../../../img/cabourg/cabourg12.jpg";
import cabourg13 from "../../../img/cabourg/cabourg13.jpg";
import cabourg14 from "../../../img/cabourg/cabourg14.jpg";
import cabourg15 from "../../../img/cabourg/cabourg15.jpg";
import cabourg16 from "../../../img/cabourg/cabourg16.jpg";
import cabourg17 from "../../../img/cabourg/cabourg17.jpg";
import cabourg18 from "../../../img/cabourg/cabourg18.jpg";
import cabourg19 from "../../../img/cabourg/cabourg19.jpg";
import cabourg20 from "../../../img/cabourg/cabourg20.jpg";
import cabourg21 from "../../../img/cabourg/cabourg21.jpg";
import cabourg22 from "../../../img/cabourg/cabourg22.jpg";
import cabourg23 from "../../../img/cabourg/cabourg23.jpg";

class Cabourg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Cabourg",
      image: "cabourg.jpg",
      piste: "sable",
      corde: "droite",
      circonference: "1 275 m",
      region: "Basse-Normandie",
      departement: "Calvados",
      ville: "Cabourg",
      surnom: "hippodrome de Cabourg"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Cabourg Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/cabourg"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={cabourg}
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
                src={cabourg2}
                alt="cabourg2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg3}
                alt="cabourg3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cabourg4}
                alt="cabourg4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg5}
                alt="cabourg5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cabourg6}
                alt="cabourg6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg7}
                alt="cabourg7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cabourg8}
                alt="cabourg8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg9}
                alt="cabourg9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cabourg10}
                alt="cabourg10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg11}
                alt="cabourg11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cabourg12}
                alt="cabourg12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg13}
                alt="cabourg13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cabourg14}
                alt="cabourg14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg15}
                alt="cabourg15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cabourg16}
                alt="cabourg16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg17}
                alt="cabourg17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cabourg18}
                alt="cabourg18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg19}
                alt="cabourg19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={cabourg20}
                alt="cabourg20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg21}
                alt="cabourg21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={cabourg22}
                alt="cabourg22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={cabourg23}
                alt="cabourg23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Cabourg;
