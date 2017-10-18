import React, { Component } from 'react'
import SVG from 'svg.js'
import styled from 'styled-components'


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
    }, this.drawSVG);
  }

  drawSVG = () => {
    const defaults = {
      yStart: this.root.clientHeight * -.25,
      duration: 5000,
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
      .x(this.state.width + this.text.length() / 2)
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
      <Wrapper
        onMouseEnter={this.play}
        onMouseLeave={this.pause}
        href={this.props.url || "#"}
        innerRef={el => { this.root = el }}
      >
        <Content>
          <h1 style={{marginBottom: 0}}> {this.props.title} </h1>
          <h3 style={{marginTop: 0}}> {this.props.subtitle} </h3>
          <p> {this.props.labels} </p>
          <SVGBox innerRef={el => { this.svgEl = el }}/>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.a`
  display: block;
  position: relative;
  color: #000;
  background-color: transparent;
  border-radius: 5px;
  border: 3px solid black;
`

const Content = styled.div`
  padding-top: 1px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
`

const SVGBox = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`

export default PortfolioItem;
