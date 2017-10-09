import React, { Component } from 'react'
import styled from 'styled-components'
import FixedNavbar from './FixedNavbar.js'

class StandardPage extends Component {
  render() {
    return(
      <Wrapper {...this.props}>
        <FixedNavbar/>
        <div className="fluid-container">
          <div style={{ marginBottom: "0rem" }} className="grid">
            <div className="column">
              <h1 style={{fontSize: "4em", marginTop: "0.85rem", marginBottom: "0.85rem" }}> {this.props.title} </h1>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
              {this.props.children}
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 10rem;
  background-color: ${props => props.bgColor || "#fff"};
  color: ${props => props.color || "#000"};
`

export default StandardPage

