import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <FixedNavbar/>
        <div className="fluid-container">
          <div className="grid">
            <div className="column">
              <h1 style={{fontSize: "4em", marginTop: "0.85rem", marginBottom: "0.85rem" }}> portfolio </h1>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
              <PortfolioItem title="forms express 2.0" subtitle="self service aca compliance reporting"/>
            </div>
            <div className="column is-6">
              <PortfolioItem title="accord aca" subtitle="aca compliance reporting"/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Portfolio;
