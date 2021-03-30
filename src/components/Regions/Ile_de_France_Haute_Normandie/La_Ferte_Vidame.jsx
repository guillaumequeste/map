import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import la_ferte_vidame from "../../../img/la_ferte-vidame/la_ferte-vidame01.jpg";
import la_ferte_vidame2 from "../../../img/la_ferte-vidame/la_ferte-vidame02.jpg";
import la_ferte_vidame3 from "../../../img/la_ferte-vidame/la_ferte-vidame03.jpg";
import la_ferte_vidame4 from "../../../img/la_ferte-vidame/la_ferte-vidame04.jpg";
import la_ferte_vidame5 from "../../../img/la_ferte-vidame/la_ferte-vidame05.jpg";
import la_ferte_vidame6 from "../../../img/la_ferte-vidame/la_ferte-vidame06.jpg";
import la_ferte_vidame7 from "../../../img/la_ferte-vidame/la_ferte-vidame07.jpg";
import la_ferte_vidame8 from "../../../img/la_ferte-vidame/la_ferte-vidame08.jpg";
import la_ferte_vidame9 from "../../../img/la_ferte-vidame/la_ferte-vidame09.jpg";
import la_ferte_vidame10 from "../../../img/la_ferte-vidame/la_ferte-vidame10.jpg";
import la_ferte_vidame11 from "../../../img/la_ferte-vidame/la_ferte-vidame11.jpg";
import la_ferte_vidame12 from "../../../img/la_ferte-vidame/la_ferte-vidame12.jpg";

class La_Ferte_Vidame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "La Ferté-Vidame",
      image: "la_ferte-vidame01.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "1 025 m",
      region: "Centre-Val de Loire",
      departement: "Eure-et-Loir",
      ville: "La Ferté-Vidame",
      surnom: "hippodrome de Pipe-Souris"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"La Ferté-Vidame Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/la_ferte"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={la_ferte_vidame}
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
                src={la_ferte_vidame2}
                alt="la_ferte-vidame02"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame3}
                alt="la_ferte-vidame03"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame4}
                alt="la_ferte-vidame04"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame5}
                alt="la_ferte-vidame05"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame6}
                alt="la_ferte-vidame06"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame7}
                alt="la_ferte-vidame07"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame8}
                alt="la_ferte-vidame08"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame9}
                alt="la_ferte-vidame09"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame10}
                alt="la_ferte-vidame10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame11}
                alt="la_ferte-vidame11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={la_ferte_vidame12}
                alt="la_ferte-vidame12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default La_Ferte_Vidame;
