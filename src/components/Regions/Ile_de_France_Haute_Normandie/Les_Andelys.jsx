import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import les_andelys from "../../../img/les_andelys/les_andelys01.jpg";
import les_andelys2 from "../../../img/les_andelys/les_andelys02.jpg";
import les_andelys3 from "../../../img/les_andelys/les_andelys03.jpg";
import les_andelys4 from "../../../img/les_andelys/les_andelys04.jpg";
import les_andelys5 from "../../../img/les_andelys/les_andelys05.jpg";
import les_andelys6 from "../../../img/les_andelys/les_andelys06.jpg";
import les_andelys7 from "../../../img/les_andelys/les_andelys07.jpg";
import les_andelys8 from "../../../img/les_andelys/les_andelys08.jpg";
import les_andelys9 from "../../../img/les_andelys/les_andelys09.jpg";
import les_andelys10 from "../../../img/les_andelys/les_andelys10.jpg";
import les_andelys11 from "../../../img/les_andelys/les_andelys11.jpg";
import les_andelys12 from "../../../img/les_andelys/les_andelys12.jpg";
import les_andelys13 from "../../../img/les_andelys/les_andelys13.jpg";
import les_andelys14 from "../../../img/les_andelys/les_andelys14.jpg";
import les_andelys15 from "../../../img/les_andelys/les_andelys15.jpg";

class Les_Andelys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Les Andelys",
      image: "les_andelys01.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "1 000 m",
      region: "Haute-Normandie",
      departement: "Eure",
      ville: "Les Andelys",
      surnom: "hippodrome René Tomasini"
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
              src={les_andelys}
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
                src={les_andelys2}
                alt="les_andelys02"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={les_andelys3}
                alt="les_andelys03"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={les_andelys4}
                alt="les_andelys04"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={les_andelys5}
                alt="les_andelys05"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={les_andelys6}
                alt="les_andelys06"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={les_andelys7}
                alt="les_andelys07"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={les_andelys8}
                alt="les_andelys08"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={les_andelys9}
                alt="les_andelys09"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={les_andelys10}
                alt="les_andelys10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={les_andelys11}
                alt="les_andelys11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={les_andelys12}
                alt="les_andelys12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={les_andelys13}
                alt="les_andelys13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={les_andelys14}
                alt="les_andelys14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={les_andelys15}
                alt="les_andelys15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Les_Andelys;
