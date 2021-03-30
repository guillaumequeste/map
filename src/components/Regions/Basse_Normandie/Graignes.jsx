import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import graignes from "../../../img/graignes/graignes.jpg";
import graignes2 from "../../../img/graignes/graignes2.jpg";
import graignes3 from "../../../img/graignes/graignes3.jpg";
import graignes4 from "../../../img/graignes/graignes4.jpg";
import graignes5 from "../../../img/graignes/graignes5.jpg";
import graignes6 from "../../../img/graignes/graignes6.jpg";
import graignes7 from "../../../img/graignes/graignes7.jpg";
import graignes8 from "../../../img/graignes/graignes8.jpg";
import graignes9 from "../../../img/graignes/graignes9.jpg";
import graignes10 from "../../../img/graignes/graignes10.jpg";
import graignes11 from "../../../img/graignes/graignes11.jpg";
import graignes12 from "../../../img/graignes/graignes12.jpg";
import graignes13 from "../../../img/graignes/graignes13.jpg";
import graignes14 from "../../../img/graignes/graignes14.jpg";
import graignes15 from "../../../img/graignes/graignes15.jpg";
import graignes16 from "../../../img/graignes/graignes16.jpg";
import graignes17 from "../../../img/graignes/graignes17.jpg";
import graignes18 from "../../../img/graignes/graignes18.jpg";
import graignes19 from "../../../img/graignes/graignes19.jpg";
import graignes20 from "../../../img/graignes/graignes20.jpg";
import graignes21 from "../../../img/graignes/graignes21.jpg";

class Graignes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Graignes",
      image: "graignes.jpg",
      piste: "sable",
      corde: "gauche",
      circonference: "1 034 m",
      region: "Basse-Normandie",
      departement: "Manche",
      ville: "Graignes",
      surnom: "hippodrome du Vieux Château"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Graignes Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/graignes"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={graignes}
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
                src={graignes2}
                alt="graignes2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes3}
                alt="graignes3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={graignes4}
                alt="graignes4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes5}
                alt="graignes5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={graignes6}
                alt="graignes6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes7}
                alt="graignes7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={graignes8}
                alt="graignes8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes9}
                alt="graignes9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={graignes10}
                alt="graignes10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes11}
                alt="graignes11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={graignes12}
                alt="graignes12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes13}
                alt="graignes13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={graignes14}
                alt="graignes14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes15}
                alt="graignes15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={graignes16}
                alt="graignes16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes17}
                alt="graignes17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={graignes18}
                alt="graignes18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes19}
                alt="graignes19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={graignes20}
                alt="graignes20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={graignes21}
                alt="graignes21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Graignes;
