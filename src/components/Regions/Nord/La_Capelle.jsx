import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import la_capelle from "../../../img/la_capelle/la_capelle.jpg";
import la_capelle2 from "../../../img/la_capelle/la_capelle2.jpg";
import la_capelle3 from "../../../img/la_capelle/la_capelle3.jpg";
import la_capelle4 from "../../../img/la_capelle/la_capelle4.jpg";
import la_capelle5 from "../../../img/la_capelle/la_capelle5.jpg";
import la_capelle6 from "../../../img/la_capelle/la_capelle6.jpg";
import la_capelle7 from "../../../img/la_capelle/la_capelle7.jpg";
import la_capelle8 from "../../../img/la_capelle/la_capelle8.jpg";
import la_capelle9 from "../../../img/la_capelle/la_capelle9.jpg";
import la_capelle10 from "../../../img/la_capelle/la_capelle10.jpg";
import la_capelle11 from "../../../img/la_capelle/la_capelle11.jpg";
import la_capelle12 from "../../../img/la_capelle/la_capelle12.jpg";
import la_capelle13 from "../../../img/la_capelle/la_capelle13.jpg";
import la_capelle14 from "../../../img/la_capelle/la_capelle14.jpg";
import la_capelle15 from "../../../img/la_capelle/la_capelle15.jpg";
import la_capelle16 from "../../../img/la_capelle/la_capelle16.jpg";
import la_capelle17 from "../../../img/la_capelle/la_capelle17.jpg";
import la_capelle18 from "../../../img/la_capelle/la_capelle18.jpg";
import la_capelle19 from "../../../img/la_capelle/la_capelle19.jpg";
import la_capelle20 from "../../../img/la_capelle/la_capelle20.jpg";
import la_capelle21 from "../../../img/la_capelle/la_capelle21.jpg";

class La_Capelle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "La Capelle",
      image: "la_capelle.jpg",
      piste: "sable de Mouen",
      corde: "gauche",
      circonference: "1 609 m",
      region: "Hauts-de-France",
      departement: "Aisne",
      ville: "La Capelle",
      surnom: "hippodrome de la Thiérache"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"La Capelle Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/la_capelle"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={la_capelle}
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
                src={la_capelle2}
                alt="la_capelle2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle3}
                alt="la_capelle3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_capelle4}
                alt="la_capelle4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle5}
                alt="la_capelle5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_capelle6}
                alt="la_capelle6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle7}
                alt="la_capelle7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_capelle8}
                alt="la_capelle8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle9}
                alt="la_capelle9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_capelle10}
                alt="la_capelle10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle11}
                alt="la_capelle11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_capelle12}
                alt="la_capelle12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle13}
                alt="la_capelle13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_capelle14}
                alt="la_capelle14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle15}
                alt="la_capelle15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_capelle16}
                alt="la_capelle16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle17}
                alt="la_capelle17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={la_capelle18}
                alt="la_capelle18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle19}
                alt="la_capelle19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={la_capelle20}
                alt="la_capelle20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={la_capelle21}
                alt="la_capelle21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default La_Capelle;
