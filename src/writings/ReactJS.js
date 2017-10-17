import React, { Component } from 'react'
import { StandardWritingPage } from '../components.js'

class ReactJS extends Component {
  render() {
    return (
      <StandardWritingPage title="react.js" bgColor="#61dafb" color="#000">
        <h2> experience </h2>
        <p> 6+ months, professional </p>
        <h2> about </h2>
        <p>
          I started working with front-end frameworks about 1 and a half years ago.
          My journey began with Angular 1, then Ember, followed by Vue and now React.
        </p>
        <p>
          I landed with React as my go to JS framework because of its rich ecosystem and
          because of React Native.
        </p>
        <p>
          React helped me internalize component based architecture.
          I love how powerful React is for developing web and mobile apps.
        </p>
        <h2> how i use it </h2>
        <p>
          I use Facebook's yarn and create-react-app and create-react-native-app to generate and manage my React apps.
        </p>
        <p>
          For state management I prefer to use Mobx because of its intuitive API.
          For deployment I normally use S3 and Route 53.
        </p>
        <p>
          My favorite libraries in React right now are Styled Components, React Navigation, and React Router.
        </p>
        <h2> the future </h2>
        <p>
          I want to eventually become a React and React Native expert. Something else that I'm interested in is building
          desktop apps in Electron + React.
        </p>
      </StandardWritingPage>
    )
  }
}

export default ReactJS
