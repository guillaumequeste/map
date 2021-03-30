import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import meslay from "../../../img/meslay/meslay.jpg";
import meslay2 from "../../../img/meslay/meslay2.jpg";
import meslay3 from "../../../img/meslay/meslay3.jpg";
import meslay4 from "../../../img/meslay/meslay4.jpg";
import meslay5 from "../../../img/meslay/meslay5.jpg";
import meslay6 from "../../../img/meslay/meslay6.jpg";
import meslay7 from "../../../img/meslay/meslay7.jpg";
import meslay8 from "../../../img/meslay/meslay8.jpg";
import meslay9 from "../../../img/meslay/meslay9.jpg";
import meslay10 from "../../../img/meslay/meslay10.jpg";
import meslay11 from "../../../img/meslay/meslay11.jpg";
import meslay12 from "../../../img/meslay/meslay12.jpg";
import meslay13 from "../../../img/meslay/meslay13.jpg";
import meslay14 from "../../../img/meslay/meslay14.jpg";
import meslay15 from "../../../img/meslay/meslay15.jpg";

class Meslay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Meslay-du-Maine",
      image: "meslay.jpg",
      piste: "herbe et cendrée",
      corde: "droite",
      circonference: "1 750 m",
      region: "Pays de la Loire",
      departement: "Mayenne",
      ville: "Meslay-du-Maine",
      surnom: "hippodrome de la Bretonnière"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Meslay du Maine Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/meslay"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={meslay}
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
                src={meslay2}
                alt="meslay2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={meslay3}
                alt="meslay3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={meslay4}
                alt="meslay4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={meslay5}
                alt="meslay5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={meslay6}
                alt="meslay6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={meslay7}
                alt="meslay7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={meslay8}
                alt="meslay8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={meslay9}
                alt="meslay9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={meslay10}
                alt="meslay10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={meslay11}
                alt="meslay11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={meslay12}
                alt="meslay12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={meslay13}
                alt="meslay13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={meslay14}
                alt="meslay14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={meslay15}
                alt="meslay15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Meslay;
