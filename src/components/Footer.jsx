import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bodyFooter">
        <Link
          to="/"
          className={`divFooter ${
            this.props.accueil == true ? "ecStyle" : ""
          }`}
        >
          <div className="linkFooter">
            <span className="colorLinkFooter">
              Accueil
            </span>
          </div>
        </Link>
        <Link
          to="/regions"
          className={`divFooter ${
            this.props.regions == true ? "ecStyle" : ""
          }`}
        >
          <div className="linkFooter">
            <span className="colorLinkFooter">
              Régions
            </span>
          </div>
        </Link>
        <Link
          to="/carte"
          className={`divFooter ${
            this.props.carte == true ? "ecStyle" : ""
          }`}
        >
          <div className="linkFooter">
            <span className="colorLinkFooter">
              Carte
            </span>
          </div>
        </Link>
        <Link
          to="/liste"
          className={`divFooter ${
            this.props.liste == true ? "ecStyle" : ""
          }`}
        >
          <div className="linkFooter">
            <span className="colorLinkFooter">
              Liste
            </span>
          </div>
        </Link>
        <Link
          to="/contact"
          className={`divFooter ${
            this.props.contact == true ? "ecStyle" : ""
          }`}
        >
          <div className="linkFooter">
            <span className="colorLinkFooter">
              Contact
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Footer;
