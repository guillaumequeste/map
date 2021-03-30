import React, { Component } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Helmet from "../../Helmet";
import saint_pierre_sur_dives from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives.jpg";
import saint_pierre_sur_dives2 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives2.jpg";
import saint_pierre_sur_dives3 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives3.jpg";
import saint_pierre_sur_dives4 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives4.jpg";
import saint_pierre_sur_dives5 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives5.jpg";
import saint_pierre_sur_dives6 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives6.jpg";
import saint_pierre_sur_dives7 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives7.jpg";
import saint_pierre_sur_dives8 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives8.jpg";
import saint_pierre_sur_dives9 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives9.jpg";
import saint_pierre_sur_dives10 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives10.jpg";
import saint_pierre_sur_dives11 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives11.jpg";
import saint_pierre_sur_dives12 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives12.jpg";
import saint_pierre_sur_dives13 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives13.jpg";
import saint_pierre_sur_dives14 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives14.jpg";
import saint_pierre_sur_dives15 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives15.jpg";
import saint_pierre_sur_dives16 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives16.jpg";
import saint_pierre_sur_dives17 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives17.jpg";
import saint_pierre_sur_dives18 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives18.jpg";
import saint_pierre_sur_dives19 from "../../../img/saint-pierre-sur-dives/saint-pierre-sur-dives19.jpg";

class Saint_Pierre_sur_Dives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Saint-Pierre-sur-Dives",
      image: "saint-pierre-sur-dives.jpg",
      piste: "herbe",
      corde: "droite",
      circonference: "1 000 m",
      region: "Basse-Normandie",
      departement: "Calvados",
      ville: "Caen - Lisieux",
      surnom: "hippodrome de Saint-Pierre-sur-Dives"
    };
  }
  render() {
    return (
      <div>
        <Helmet
          title={"Saint-Pierre-sur-Dives Hippodromes visités"}
          link={"http://map.guillaumequeste.fr/saint-pierre-sur-dives"}
        />
        <Header />
        <Footer />
        <div className="fiche">
          <div className="image">
            <img
              src={saint_pierre_sur_dives}
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
                src={saint_pierre_sur_dives2}
                alt="saint-pierre-sur-dives2"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives3}
                alt="saint-pierre-sur-dives3"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives4}
                alt="saint-pierre-sur-dives4"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives5}
                alt="saint-pierre-sur-dives5"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives6}
                alt="saint-pierre-sur-dives6"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives7}
                alt="saint-pierre-sur-dives7"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives8}
                alt="saint-pierre-sur-dives8"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives9}
                alt="saint-pierre-sur-dives9"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives10}
                alt="saint-pierre-sur-dives10"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives11}
                alt="saint-pierre-sur-dives11"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives12}
                alt="saint-pierre-sur-dives12"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives13}
                alt="saint-pierre-sur-dives13"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives14}
                alt="saint-pierre-sur-dives14"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives15}
                alt="saint-pierre-sur-dives15"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos">
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives16}
                alt="saint-pierre-sur-dives16"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives17}
                alt="saint-pierre-sur-dives17"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
        <div className="plusDePhotos der">
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives18}
                alt="saint-pierre-sur-dives18"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
          <Zoom>
            <div className="image">
              <img
                src={saint_pierre_sur_dives19}
                alt="saint-pierre-sur-dives19"
                className="tailleImagePlus"
              />
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Saint_Pierre_sur_Dives;
