import React, { Component } from 'react';
import SVG from 'svg.js';

import './css/PortfolioItem.css';


class PortfolioItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: null,
      height: null
    }
  }

  componentDidMount() {
    this.computeSize();
    window.addEventListener("resize", this.computeSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.computeSize);
  }


  computeSize = () => {
    this.setState({
      height: this.root.clientWidth,
      width: this.root.clientHeight,
      duration: 40000
    }, this.drawSVG);
  }

  drawSVG = () => {
    const defaults = {
      yStart: this.root.clientHeight * -.25,
      duration: 20000,
      easing: '>',
      font: {
        family: "sans-serif",
        weight: "bold",
        opacity: 0.1,
        size: this.root.clientHeight * 1.3
      }
    }

    this.draw = SVG(this.svgEl).size(this.state.height, this.state.width);
    this.draw.clear();

    this.text = this.draw.text(this.props.title);
    this.text
      .font(defaults.font)
      .x(-this.text.length())
      .y(defaults.yStart)
      .animate({
        duration: defaults.duration,
        easing: defaults.easing
      })
      .x(this.state.width)
      .loop();

    this.pause();
  }

  pause = () => {
    this.text.pause();
  }

  play = () => {
    this.text.play();
  }

  render() {
    return (
      <a onMouseEnter={this.play} onMouseLeave={this.pause} href={this.props.url || "#"} className="PortfolioItem" ref={(el) => { this.root = el; }} >
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
