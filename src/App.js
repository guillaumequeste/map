import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Helmet from "./components/Helmet";
import { Link } from "react-router-dom";
import map from "./img/map.jpeg";

const App = (props) => (
  <>
    <Helmet
      title={"Accueil Hippodromes visités"}
      link={"http://map.guillaumequeste.fr"}
    />
    <Header />
    <Footer accueil={true}/>
    <div className="app">
      <div className="ligne">
        <div className="case caseHippodromes">
          <div className="titleCase">
            <span>Hippodromes</span>
          </div>
        </div>
        <Link to="/regions" className="case caseLink">
          <div className="titleCase">
            <span>Régions</span>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/carte" className="case caseLink caseMap">
          <div className="titleCase">
            <span>Carte</span>
          </div>
          <img
                src={map}
                alt="argentan6"
                
              />
        </Link>
        <Link to="/liste" className="case caseLink caseListe">
          <div className="titleCase">
            <span>Liste</span>
          </div>
        </Link>
      </div>
    </div>
  </>
);

export default App;
