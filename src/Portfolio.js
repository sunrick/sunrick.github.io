import React, { Component } from 'react';
import StandardPage from './StandardPage.js'
import PortfolioItem from './PortfolioItem.js'

class Portfolio extends Component {
  render() {
    return (
      <StandardPage title="portfolio">
        <div className="grid">
          <div className="column is-6">
            <PortfolioItem title="forms express 2.0" subtitle="self service aca compliance reporting"/>
          </div>
          <div className="column is-6">
            <PortfolioItem title="accord aca" subtitle="aca compliance reporting"/>
          </div>
        </div>
      </StandardPage>
    )
  }
}

export default Portfolio
