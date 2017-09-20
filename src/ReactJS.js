import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

class ReactJS extends Component {
  render() {
    return (
      <div className="ReactJS">
        <FixedNavbar/>
        <div className="fluid-container">
          <div style={{ marginBottom: "0rem" }} className="grid">
            <div className="column">
              <h1 style={{fontSize: "4em", marginTop: "0.85rem", marginBottom: "0.85rem" }}> react.js </h1>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
              <h2> experience </h2>
              <p> 6+ months, professional </p>
              <h2> about </h2>
              <p>
                I started working with front-end frameworks about 1 and a half years ago.
                My journey began with Angular 1, then Ember, followed by Vue and now React.
              </p>
              <p>
                I landed with React as my go to JS framework because of its rich ecosystem and
                wide array of devices it supports. I mainly have used React.js but have built a few
                apps using React Native.
              </p>
              <p>
                React and Vue helped me internalize component based architecture,
                a pattern that has really served me well in organizing my Javascript code.
                I love how powerful React is for developing web and mobile apps.
              </p>
              <h2> how i use it </h2>
              <p>
                I use Facebook's yarn and create-react-app to generate and manage my React apps.
                One of my pet peeves is having to write my own configuration code, like Rails,
                create-react-app handles 99% of what I need for my projects.
              </p>
              <p>
                For state management I prefer to use Mobx because of its intuitive API and lack of boilerplate code.
                For deployment I normally use S3 and Route 53.
              </p>
              <p>
                My favorite CSS framework to pair React with is Bulma, I'm familiar with Semantic UI, Bootstrap and Foundation.
              </p>
              <h2> the future </h2>
              <p>
                I want to eventually become a React and React Native expert. I want to continue to develop
                desktop apps in Electron + React, mobile apps with React Native and web apps with React JS.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactJS;
