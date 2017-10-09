import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

import { injectGlobal } from 'styled-components'

import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'


injectGlobal`
  body {
    font-family: sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  .title {
    margin-bottom: 0px;
  }
  .subtitle {
    margin-top: -0.25rem;
  }
`

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();
