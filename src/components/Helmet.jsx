import React, { Component } from "react";
import { Helmet } from "react-helmet";

class HelmetComponent extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <link rel="canonical" href={this.props.link} />
          <meta
            name="keywords"
            content="Guillaume Queste developpeur web projet map hippodromes"
          />
          <meta
            name="description"
            content="Hippodromes visités"
          />
          <meta
            property="og:title"
            content="Hippodromes visités"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https:/www.guillaumequeste.fr" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="fr_FR" />
          <meta
            property="og:title"
            content="Hippodromes visités"
          />
          <meta
            property="og:description"
            content="Hippodromes visités"
          />
          <meta
            property="og:site_name"
            content="Hippodromes visités"
          />
          <meta
            name="twitter:description"
            content="Hippodromes visités"
          />
          <meta
            name="twitter:title"
            content="Hippodromes visités"
          />
          <meta name="twitter:image" content="" />
        </Helmet>
      </div>
    );
  }
}

export default HelmetComponent;
