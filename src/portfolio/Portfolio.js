import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js'
import { FluidContainer, Columns, Column } from '../components.js'

class Portfolio extends Component {
  render() {
    return (
      <FluidContainer>
        <Column width={[1, 1, 1/2]} style={{marginBottom: "2rem", marginTop: "2rem"}}>
          <PortfolioItem title="forms express 2.0" subtitle="self service aca compliance reporting" labels="ruby on rails"/>
        </Column>
        <Column width={[1, 1, 1/2]}>
          <PortfolioItem title="accord aca" subtitle="aca compliance reporting" labels="ruby on rails"/>
        </Column>
      </FluidContainer>
    )
  }
}

export default Portfolio
