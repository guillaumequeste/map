import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Helmet from "./components/Helmet";
import { Link } from "react-router-dom";

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
        <Link to="/" className="case">
          <div className="titleCase">
            <span>accueil</span>
          </div>
        </Link>
        <Link to="/regions" className="case">
          <div className="titleCase">
            <span>Régions</span>
          </div>
        </Link>
      </div>
      <div className="ligne">
        <Link to="/carte" className="case">
          <div className="titleCase">
            <span>Carte</span>
          </div>
        </Link>
        <Link to="/liste" className="case">
          <div className="titleCase">
            <span>Liste</span>
          </div>
        </Link>
      </div>
    </div>
  </>
);

export default App;
