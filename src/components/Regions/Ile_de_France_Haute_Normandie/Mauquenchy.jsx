import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import mauquenchy from "../../../img/mauquenchy/mauquenchy.jpg";
import mauquenchy2 from "../../../img/mauquenchy/mauquenchy2.jpg";
import mauquenchy3 from "../../../img/mauquenchy/mauquenchy3.jpg";
import mauquenchy4 from "../../../img/mauquenchy/mauquenchy4.jpg";
import mauquenchy5 from "../../../img/mauquenchy/mauquenchy5.jpg";
import mauquenchy6 from "../../../img/mauquenchy/mauquenchy6.jpg";
import mauquenchy7 from "../../../img/mauquenchy/mauquenchy7.jpg";
import mauquenchy8 from "../../../img/mauquenchy/mauquenchy8.jpg";
import mauquenchy9 from "../../../img/mauquenchy/mauquenchy9.jpg";
import mauquenchy10 from "../../../img/mauquenchy/mauquenchy10.jpg";
import mauquenchy11 from "../../../img/mauquenchy/mauquenchy11.jpg";

class Mauquenchy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Mauquenchy",
      image: "mauquenchy.jpg",
      piste: "sable",
      corde: "gauche",
      circonference: "1 300 m",
      region: "Haute-Normandie",
      departement: "Seine-Maritime",
      ville: "Forges-les-Eaux",
      surnom: "hippodrome du Pays de Bray"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Mauquenchy Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/mauquenchy"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={mauquenchy}
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
                src={mauquenchy2}
                alt="mauquenchy2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mauquenchy3}
                alt="mauquenchy3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mauquenchy4}
                alt="mauquenchy4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mauquenchy5}
                alt="mauquenchy5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mauquenchy6}
                alt="mauquenchy6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mauquenchy7}
                alt="mauquenchy7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={mauquenchy8}
                alt="mauquenchy8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mauquenchy9}
                alt="mauquenchy9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={mauquenchy10}
                alt="mauquenchy10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={mauquenchy11}
                alt="mauquenchy11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Mauquenchy;
