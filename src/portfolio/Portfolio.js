import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js'
import { FluidMobileContainer, Back, BBox, media } from '../components.js'
import lights from '../img/lights.svg'

class Portfolio extends Component {
  render() {
    return (
      <FluidMobileContainer style={{overflow: "auto", paddingTop: "3rem", backgroundColor: "#FFDC50", backgroundImage: `url(${lights})`, backgroundRepeat: "repeat"}}>
        <Back/>
        <Box>
          <p> Every idea starts with a little light. Then you work really hard to keep that little light going. </p>
          <p> Come on little guy! Shine bright! </p>
          <p> These are some of the ideas I've worked on that I think shine the brightest. </p>
        </Box>
        <PortfolioItem style={{paddingTop: "3rem"}} status="in development" title="sports fantasy game" subtitle="be the best sports investor" labels="express.js + react native" description="A fun betting platform where you bet on match results. Compete against everyone or with friends in a league. User with most money at the end of the season wins."/>
        <PortfolioItem status="in development" title="consulting platform" subtitle="hire experts for short term projects" labels="express.js + react.js" description="A platform that connects companies with experts. Rate negotiation, scheduling, contracts and payment all handled through platform."/>
        <PortfolioItem status="in development" title="engagement platform" subtitle="interact with customers in real time" labels="phoenix + react native" description="A way for brands to ask questions in real time to their customers. Users can start promotions and give away prizes."/>
        <PortfolioItem status="in production" title="forms express 2.0" subtitle="self service aca compliance reporting" labels="ruby on rails" description="Platform for companies to manage their Affordable Care Act compliance reporting themselves. Users can input employee life events and the system calculates the correct code combinations for the reporting year."/>
        <PortfolioItem status="in production" title="accord aca" subtitle="aca compliance reporting" labels="ruby on rails" description="Full service platform for companies to manage their Affordable Care Act compliance reporting. Various data sources are compiled from client systems and analyzed to generate correct code combinations for the reporting year."/>
        <PortfolioItem status="in production" title="levana" subtitle="funding platform for school tuition" labels="ruby on rails" description="A funding platform to send kids to better schools. Premise of the application is to make donating more personal."/>
      </FluidMobileContainer>
    )
  }
}

const Box = BBox.extend`
  width: 50%;
  margin-bottom: 2rem;
  ${media.tablet`
    border-radius: 0px;
    border-left: 0;
    border-right: 0;
    width: 100%;
  `}
`
export default Portfolio
