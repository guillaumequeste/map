import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import clairefontaine from "../../../img/clairefontaine/clairefontaine.jpg";
import clairefontaine2 from "../../../img/clairefontaine/clairefontaine2.jpg";
import clairefontaine3 from "../../../img/clairefontaine/clairefontaine3.jpg";
import clairefontaine4 from "../../../img/clairefontaine/clairefontaine4.jpg";
import clairefontaine5 from "../../../img/clairefontaine/clairefontaine5.jpg";
import clairefontaine6 from "../../../img/clairefontaine/clairefontaine6.jpg";
import clairefontaine7 from "../../../img/clairefontaine/clairefontaine7.jpg";
import clairefontaine8 from "../../../img/clairefontaine/clairefontaine8.jpg";
import clairefontaine9 from "../../../img/clairefontaine/clairefontaine9.jpg";
import clairefontaine10 from "../../../img/clairefontaine/clairefontaine10.jpg";
import clairefontaine11 from "../../../img/clairefontaine/clairefontaine11.jpg";
import clairefontaine12 from "../../../img/clairefontaine/clairefontaine12.jpg";
import clairefontaine13 from "../../../img/clairefontaine/clairefontaine13.jpg";
import clairefontaine14 from "../../../img/clairefontaine/clairefontaine14.jpg";
import clairefontaine15 from "../../../img/clairefontaine/clairefontaine15.jpg";
import clairefontaine16 from "../../../img/clairefontaine/clairefontaine16.jpg";
import clairefontaine17 from "../../../img/clairefontaine/clairefontaine17.jpg";
import clairefontaine18 from "../../../img/clairefontaine/clairefontaine18.jpg";
import clairefontaine19 from "../../../img/clairefontaine/clairefontaine19.jpg";

class Clairefontaine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Clairefontaine",
      image: "clairefontaine.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "2 000 m",
      region: "Basse-Normandie",
      departement: "Calvados",
      ville: "Tourgéville",
      surnom: "hippodrome de Deauville-Clairefontaine"
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
              src={clairefontaine}
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
                src={clairefontaine2}
                alt="clairefontaine2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine3}
                alt="clairefontaine3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine4}
                alt="clairefontaine4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine5}
                alt="clairefontaine5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine6}
                alt="clairefontaine6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine7}
                alt="clairefontaine7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine8}
                alt="clairefontaine8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine9}
                alt="clairefontaine9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine10}
                alt="clairefontaine10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine11}
                alt="clairefontaine11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine12}
                alt="clairefontaine12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine13}
                alt="clairefontaine13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine14}
                alt="clairefontaine14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine15}
                alt="clairefontaine15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine16}
                alt="clairefontaine16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine17}
                alt="clairefontaine17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine18}
                alt="clairefontaine18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={clairefontaine19}
                alt="clairefontaine19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Clairefontaine;
