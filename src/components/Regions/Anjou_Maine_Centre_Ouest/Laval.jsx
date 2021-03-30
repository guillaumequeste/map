import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import laval from "../../../img/laval/laval.jpg";
import laval2 from "../../../img/laval/laval2.jpg";
import laval3 from "../../../img/laval/laval3.jpg";
import laval4 from "../../../img/laval/laval4.jpg";
import laval5 from "../../../img/laval/laval5.jpg";
import laval6 from "../../../img/laval/laval6.jpg";
import laval7 from "../../../img/laval/laval7.jpg";
import laval8 from "../../../img/laval/laval8.jpg";
import laval9 from "../../../img/laval/laval9.jpg";
import laval10 from "../../../img/laval/laval10.jpg";
import laval11 from "../../../img/laval/laval11.jpg";
import laval12 from "../../../img/laval/laval12.jpg";
import laval13 from "../../../img/laval/laval13.jpg";
import laval14 from "../../../img/laval/laval14.jpg";
import laval15 from "../../../img/laval/laval15.jpg";
import laval16 from "../../../img/laval/laval16.jpg";
import laval17 from "../../../img/laval/laval17.jpg";
import laval18 from "../../../img/laval/laval18.jpg";
import laval19 from "../../../img/laval/laval19.jpg";
import laval20 from "../../../img/laval/laval20.jpg";
import laval21 from "../../../img/laval/laval21.jpg";

class Laval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Laval",
      image: "laval.jpg",
      piste: "sable",
      corde: "gauche",
      circonference: "1 500 m",
      region: "Pays de la Loire",
      departement: "Mayenne",
      ville: "Laval",
      surnom: "hippodrome de Bellevue-la-Forêt"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Laval Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/laval"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={laval}
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
                src={laval2}
                alt="laval2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval3}
                alt="laval3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={laval4}
                alt="laval4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval5}
                alt="laval5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={laval6}
                alt="laval6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval7}
                alt="laval7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={laval8}
                alt="laval8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval9}
                alt="laval9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={laval10}
                alt="laval10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval11}
                alt="laval11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={laval12}
                alt="laval12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval13}
                alt="laval13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={laval14}
                alt="laval14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval15}
                alt="laval15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={laval16}
                alt="laval16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval17}
                alt="laval17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={laval18}
                alt="laval18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval19}
                alt="laval19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={laval20}
                alt="laval20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={laval21}
                alt="laval21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Laval;
