import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import maisons_laffitte from "../../../img/maisons_laffitte/maisons_laffitte.jpg";
import maisons_laffitte2 from "../../../img/maisons_laffitte/maisons_laffitte2.jpg";
import maisons_laffitte3 from "../../../img/maisons_laffitte/maisons_laffitte3.jpg";
import maisons_laffitte4 from "../../../img/maisons_laffitte/maisons_laffitte4.jpg";
import maisons_laffitte5 from "../../../img/maisons_laffitte/maisons_laffitte5.jpg";
import maisons_laffitte6 from "../../../img/maisons_laffitte/maisons_laffitte6.jpg";
import maisons_laffitte7 from "../../../img/maisons_laffitte/maisons_laffitte7.jpg";
import maisons_laffitte8 from "../../../img/maisons_laffitte/maisons_laffitte8.jpg";
import maisons_laffitte9 from "../../../img/maisons_laffitte/maisons_laffitte9.jpg";
import maisons_laffitte10 from "../../../img/maisons_laffitte/maisons_laffitte10.jpg";
import maisons_laffitte11 from "../../../img/maisons_laffitte/maisons_laffitte11.jpg";
import maisons_laffitte12 from "../../../img/maisons_laffitte/maisons_laffitte12.jpg";
import maisons_laffitte13 from "../../../img/maisons_laffitte/maisons_laffitte13.jpg";
import maisons_laffitte14 from "../../../img/maisons_laffitte/maisons_laffitte14.jpg";
import maisons_laffitte15 from "../../../img/maisons_laffitte/maisons_laffitte15.jpg";

class Maisons_Laffitte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Maisons Laffitte",
      image: "maisons_laffitte.jpg",
      piste: "herbe",
      corde: "gauche et droite",
      circonference: "2 000 m",
      region: "Ile de France",
      departement: "Yvelines",
      ville: "Maisons-Laffitte",
      surnom: "hippodrome de Maisons-Laffitte"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Maisons-Laffitte Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/maisons-laffitte"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={maisons_laffitte}
              alt={this.state.nom}
              className="tailleImage"
            />
          </div>
          <Roll right>
            <div className="description">
              <h2 className="titreCard long">{this.state.nom}</h2>
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
                src={maisons_laffitte2}
                alt="maisons_laffitte2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte3}
                alt="maisons_laffitte3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte4}
                alt="maisons_laffitte4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte5}
                alt="maisons_laffitte5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte6}
                alt="maisons_laffitte6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte7}
                alt="maisons_laffitte7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte8}
                alt="maisons_laffitte8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte9}
                alt="maisons_laffitte9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte10}
                alt="maisons_laffitte10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte11}
                alt="maisons_laffitte11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte12}
                alt="maisons_laffitte12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte13}
                alt="maisons_laffitte13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte14}
                alt="maisons_laffitte14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={maisons_laffitte15}
                alt="maisons_laffitte15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Maisons_Laffitte;
