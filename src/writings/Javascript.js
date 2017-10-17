import React, { Component } from 'react'
import { StandardWritingPage } from '../components.js'

class Javascript extends Component {
  render() {
    return (
      <StandardWritingPage title="javascript" bgColor="#F3DF49" color="#000">
        <h2> experience </h2>
        <p> 2+ years, professional </p>
        <h2> about </h2>
        <p>
          I started programming in Javascript professionally over 2 years ago.
        </p>
        <p>
          Javascript was challenging to learn at first. Things like variable scope, variable hoisting, event based programming,
          different versions of the language, and DOM interaction inconsistencies all threw me off.
        </p>
        <p>
          I really like Javascript now, thanks to ES6, amazing libraries, and my growth as programmer.
        </p>
        <h2> how i use it </h2>
        <p>
          I use Javascript mostly for front-end development. I've also built Javascript games in Phasher. I've also built APIs in Express.
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
          and subtle animations.
        </p>
        <p>
          I'm really excited to keep building real time apps using WebRTC, Websockets and games using Javascript.
        </p>
      </StandardWritingPage>
    )
  }
}

export default Javascript
