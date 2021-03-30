import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import deauville from "../../../img/deauville/deauville01.jpg";
import deauville2 from "../../../img/deauville/deauville02.jpg";
import deauville3 from "../../../img/deauville/deauville03.jpg";
import deauville4 from "../../../img/deauville/deauville04.jpg";
import deauville5 from "../../../img/deauville/deauville05.jpg";
import deauville6 from "../../../img/deauville/deauville06.jpg";
import deauville7 from "../../../img/deauville/deauville07.jpg";
import deauville8 from "../../../img/deauville/deauville08.jpg";
import deauville9 from "../../../img/deauville/deauville09.jpg";
import deauville10 from "../../../img/deauville/deauville10.jpg";
import deauville11 from "../../../img/deauville/deauville11.jpg";
import deauville12 from "../../../img/deauville/deauville12.jpg";
import deauville13 from "../../../img/deauville/deauville13.jpg";
import deauville14 from "../../../img/deauville/deauville14.jpg";
import deauville15 from "../../../img/deauville/deauville15.jpg";
import deauville16 from "../../../img/deauville/deauville16.jpg";
import deauville17 from "../../../img/deauville/deauville17.jpg";
import deauville18 from "../../../img/deauville/deauville18.jpg";
import deauville19 from "../../../img/deauville/deauville19.jpg";
import deauville20 from "../../../img/deauville/deauville20.jpg";
import deauville21 from "../../../img/deauville/deauville21.jpg";
import deauville22 from "../../../img/deauville/deauville22.jpg";

class Deauville extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Deauville",
      image: "deauville.jpg",
      piste: "herbe et PSF",
      corde: "droite",
      circonference: "2 000 m",
      region: "Basse-Normandie",
      departement: "Calvados",
      ville: "Deauville",
      surnom: "hippodrome de Deauville-la-Touques"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Deauville Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/deauville"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={deauville}
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
                src={deauville2}
                alt="deauville02"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville3}
                alt="deauville03"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={deauville4}
                alt="deauville04"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville5}
                alt="deauville05"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={deauville6}
                alt="deauville06"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville7}
                alt="deauville07"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={deauville8}
                alt="deauville08"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville9}
                alt="deauville09"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={deauville10}
                alt="deauville10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville11}
                alt="deauville11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={deauville12}
                alt="deauville12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville13}
                alt="deauville13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={deauville14}
                alt="deauville14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville15}
                alt="deauville15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={deauville16}
                alt="deauville16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville17}
                alt="deauville17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={deauville18}
                alt="deauville18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville19}
                alt="deauville19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={deauville20}
                alt="deauville20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={deauville21}
                alt="deauville21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={deauville22}
                alt="deauville22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Deauville;
