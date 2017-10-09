import React, { Component } from 'react';
import StandardPage from '../StandardPage.js'
import PortfolioItem from './PortfolioItem.js'
import { Columns, Column } from '../components.js'

class Portfolio extends Component {
  render() {
    return (
      <StandardPage title="portfolio">
        <Columns>
          <Column width={1/2}>
            <PortfolioItem title="forms express 2.0" subtitle="self service aca compliance reporting"/>
          </Column>
          <Column width={1/2}>
            <PortfolioItem title="accord aca" subtitle="aca compliance reporting"/>
          </Column>
        </Columns>
      </StandardPage>
    )
  }
}

export default Portfolio
