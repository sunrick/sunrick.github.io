import React, { Component } from 'react';

import Button from './Button.js';

import './css/PortfolioItem.css';


class PortfolioItem extends Component {
  render() {
    return (
      <a href="/#" className="PortfolioItem">
        <div className="content">
          <h1> {this.props.title} </h1>
          <h3> {this.props.subtitle} </h3>
          <div style={{marginTop: "5rem"}} className="buttons">
            <Button to="/ruby-on-rails" text="ruby on rails"/>
          </div>
        </div>
      </a>
    );
  }
}

export default PortfolioItem;
