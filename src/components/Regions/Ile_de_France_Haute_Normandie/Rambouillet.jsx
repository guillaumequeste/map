import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import rambouillet from "../../../img/rambouillet/rambouillet01.jpg";
import rambouillet2 from "../../../img/rambouillet/rambouillet02.jpg";
import rambouillet3 from "../../../img/rambouillet/rambouillet03.jpg";
import rambouillet4 from "../../../img/rambouillet/rambouillet04.jpg";
import rambouillet5 from "../../../img/rambouillet/rambouillet05.jpg";
import rambouillet6 from "../../../img/rambouillet/rambouillet06.jpg";
import rambouillet7 from "../../../img/rambouillet/rambouillet07.jpg";
import rambouillet8 from "../../../img/rambouillet/rambouillet08.jpg";
import rambouillet9 from "../../../img/rambouillet/rambouillet09.jpg";
import rambouillet10 from "../../../img/rambouillet/rambouillet10.jpg";
import rambouillet11 from "../../../img/rambouillet/rambouillet11.jpg";
import rambouillet12 from "../../../img/rambouillet/rambouillet12.jpg";
import rambouillet13 from "../../../img/rambouillet/rambouillet13.jpg";
import rambouillet14 from "../../../img/rambouillet/rambouillet14.jpg";
import rambouillet15 from "../../../img/rambouillet/rambouillet15.jpg";
import rambouillet16 from "../../../img/rambouillet/rambouillet16.jpg";
import rambouillet17 from "../../../img/rambouillet/rambouillet17.jpg";
import rambouillet18 from "../../../img/rambouillet/rambouillet18.jpg";
import rambouillet19 from "../../../img/rambouillet/rambouillet19.jpg";
import rambouillet20 from "../../../img/rambouillet/rambouillet20.jpg";
import rambouillet21 from "../../../img/rambouillet/rambouillet21.jpg";
import rambouillet22 from "../../../img/rambouillet/rambouillet22.jpg";
import rambouillet23 from "../../../img/rambouillet/rambouillet23.jpg";
import rambouillet24 from "../../../img/rambouillet/rambouillet24.jpg";
import rambouillet25 from "../../../img/rambouillet/rambouillet25.jpg";
import rambouillet26 from "../../../img/rambouillet/rambouillet26.jpg";
import rambouillet27 from "../../../img/rambouillet/rambouillet27.jpg";
import rambouillet28 from "../../../img/rambouillet/rambouillet28.jpg";

class Rambouillet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Rambouillet",
      image: "rambouillet01.jpg",
      piste: "herbe",
      corde: "gauche",
      circonference: "1 800 m",
      region: "Ile-de-France",
      departement: "Yvelines",
      ville: "Rambouillet",
      surnom: "hippodrome de la Villeneuve"
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
              src={rambouillet}
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
                src={rambouillet2}
                alt="rambouillet02"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet3}
                alt="rambouillet03"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet4}
                alt="rambouillet04"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet5}
                alt="rambouillet05"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet6}
                alt="rambouillet06"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet7}
                alt="rambouillet07"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet8}
                alt="rambouillet08"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet9}
                alt="rambouillet09"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet10}
                alt="rambouillet10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet11}
                alt="rambouillet11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet12}
                alt="rambouillet12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet13}
                alt="rambouillet13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet14}
                alt="rambouillet14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet15}
                alt="rambouillet15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet16}
                alt="rambouillet16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet17}
                alt="rambouillet17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet18}
                alt="rambouillet18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet19}
                alt="rambouillet19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet20}
                alt="rambouillet20"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet21}
                alt="rambouillet21"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet22}
                alt="rambouillet22"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet23}
                alt="rambouillet23"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet24}
                alt="rambouillet24"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet25}
                alt="rambouillet25"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet26}
                alt="rambouillet26"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={rambouillet27}
                alt="rambouillet27"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={rambouillet28}
                alt="rambouillet28"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Rambouillet;
