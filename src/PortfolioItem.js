import React, { Component } from 'react';
import SVG from 'svg.js';

import './css/PortfolioItem.css';


class PortfolioItem extends Component {

  componentDidMount() {
    this.draw = SVG(this.svgEl).size(this.root.clientWidth, this.root.clientHeight);
    let rect = this.draw.rect(this.root.clientWidth, this.root.clientHeight).attr({ fill: '#f06' });
    for (let i = 0; i < 3; i++) {
      let point = this.randomPoint();
      let text = this.draw.text("forms express 2.0");
      text.font({ family: "sans-serif", weight: "bold", opacity: 0.1, size: this.randomSize() })
          .x(-30).y((i * .33)*this.root.clientHeight);
      this.animateText(text);
    }
  }

  animateText(text , delay) {
    let randomPoint = this.randomPoint();
    text.animate(10000).x(randomPoint.x).after(() => {
      console.log(randomPoint);
      this.animateText(text);
    });
  }

  randomPoint() {
    return {
      x: Math.random() * this.root.clientWidth,
      y: Math.random() * this.root.clientHeight
    }
  }

  randomSize() {
    return 48;
  }

  render() {
    return (
      <a style={{ position: "relative" }} href="/" className="PortfolioItem" ref={(el) => { this.root = el; }} >
        <div className="content">
          <h1> {this.props.title} </h1>
          <h3> {this.props.subtitle} </h3>
          <svg style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} ref={(el) => { this.svgEl = el; }}></svg>
        </div>
      </a>
    );
  }
}

export default PortfolioItem;
