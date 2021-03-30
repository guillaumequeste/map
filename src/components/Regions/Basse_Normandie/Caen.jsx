import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import caen from "../../../img/caen/caen.jpg";
import caen2 from "../../../img/caen/caen2.jpg";
import caen3 from "../../../img/caen/caen3.jpg";
import caen4 from "../../../img/caen/caen4.jpg";
import caen5 from "../../../img/caen/caen5.jpg";
import caen6 from "../../../img/caen/caen6.jpg";
import caen7 from "../../../img/caen/caen7.jpg";
import caen8 from "../../../img/caen/caen8.jpg";
import caen9 from "../../../img/caen/caen9.jpg";
import caen10 from "../../../img/caen/caen10.jpg";
import caen11 from "../../../img/caen/caen11.jpg";
import caen12 from "../../../img/caen/caen12.jpg";
import caen13 from "../../../img/caen/caen13.jpg";
import caen14 from "../../../img/caen/caen14.jpg";
import caen15 from "../../../img/caen/caen15.jpg";
import caen16 from "../../../img/caen/caen16.jpg";
import caen17 from "../../../img/caen/caen17.jpg";
import caen18 from "../../../img/caen/caen18.jpg";
import caen19 from "../../../img/caen/caen19.jpg";

class Caen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Caen",
      image: "caen.jpg",
      piste: "sable",
      corde: "droite",
      circonference: "1 954 m",
      region: "Basse-Normandie",
      departement: "Calvados",
      ville: "Caen",
      surnom: "hippodrome de la Prairie"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Caen Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/caen"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={caen}
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
                src={caen2}
                alt="caen2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={caen3}
                alt="caen3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={caen4}
                alt="caen4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={caen5}
                alt="caen5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={caen6}
                alt="caen6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={caen7}
                alt="caen7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={caen8}
                alt="caen8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={caen9}
                alt="caen9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={caen10}
                alt="caen10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={caen11}
                alt="caen11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={caen12}
                alt="caen12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={caen13}
                alt="caen13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={caen14}
                alt="caen14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={caen15}
                alt="caen15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={caen16}
                alt="caen16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={caen17}
                alt="caen17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={caen18}
                alt="caen18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={caen19}
                alt="caen19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Caen;
