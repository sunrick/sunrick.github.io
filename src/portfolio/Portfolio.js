import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js'
import { FluidMobileContainer, Back } from '../components.js'

class Portfolio extends Component {
  render() {
    return (
      <FluidMobileContainer style={{overflow: "auto", paddingTop: "3rem", backgroundColor: "#FFDC50"}}>
        <Back/>
        <PortfolioItem style={{paddingTop: "3rem"}} status="in development" title="sports fantasy game" subtitle="buy and sell results" labels="express.js + react native" description="A fun betting platform (in game currency) for match results. Compete against everyone or with friends in a league. User with most money at the end of the season wins."/>
        <PortfolioItem status="in development" title="consulting platform" subtitle="hire experts for short term projects" labels="express.js + react.js" description="A platform that connects companies with experts. Rate negotiation, scheduling, contracts and payment all handled through platform."/>
        <PortfolioItem status="in development" title="engagement platform" subtitle="interact with customers in real time" labels="phoenix + react native" description="A way for brands to ask questions in real time to their customers. Could be used for any type of live event. Users attach promotions and prizes to events and questions."/>
        <PortfolioItem status="in production" title="forms express 2.0" subtitle="self service aca compliance reporting" labels="ruby on rails" description="Platform for companies to manage their Affordable Care Act compliance reporting themselves. Users can input employee life events and the system calculates the correct code combinations for the reporting year."/>
        <PortfolioItem status="in production" title="accord aca" subtitle="aca compliance reporting" labels="ruby on rails" description="Full service platform for companies to manage their Affordable Care Act compliance reporting. Various data sources are compiled from client systems and analyzed to generate correct code combinations for the reporting year."/>
        <PortfolioItem status="in production" title="levana" subtitle="funding platform for school tuition" labels="ruby on rails" description="A funding platform to send kids to better schools. Premise of the application is to make donating more personal."/>
      </FluidMobileContainer>
    )
  }
}

export default Portfolio
