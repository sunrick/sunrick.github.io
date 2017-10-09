import React, { Component } from 'react'
import StandardPage from '../StandardPage.js'

class Javascript extends Component {
  render() {
    return (
      <StandardPage title="javascript" bgColor="#F3DF49" color="#000">
        <h2> experience </h2>
        <p> 2+ years, professional </p>
        <h2> about </h2>
        <p>
          Javascript was my introduction to programming over 8 years ago. I started programming in Javascript professionally over 2 years ago.
        </p>
        <p>
          Javascript was challenging to learn at first. Things like variable scope, variable hoisting, event based programming,
          weird browser quirks, and DOM interaction inconsistencies all threw me off.
        </p>
        <p>
          I really like Javascript now, thanks to ES6, amazing libraries, and my growth as programmer.
        </p>
        <h2> how i use it </h2>
        <p>
          I use Javascript mostly for front-end development. I've toyed with the idea of using back-end js frameworks but
          I just find Ruby to be better suited for back-end development.
        </p>
        <p>
          I've built apps using vanilla Javascript, jQuery, React, Vue, Ember, Angular 1.
          My go to front-end framework is React.
        </p>
        <p>
          I like messing around with visualization/animation libraries like D3.js, Paper.js, SVG.js and Velocity.js.
        </p>
        <h2> the future </h2>
        <p>
          I see myself becoming exclusively a front-end developer. I love creating apps that are easy to use, have sleek UI,
          and have impressive animations.
        </p>
        <p>
          I'm really excited to keep building real time apps using WebRTC, Websockets and other cool tech.
        </p>
      </StandardPage>
    )
  }
}

export default Javascript
