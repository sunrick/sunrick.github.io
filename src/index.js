import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router
} from 'react-router-dom'


injectGlobal`
  body {
    font-family: sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    position: relative;
  }

  .fluid-container {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .grid {
    display: flex;
  }

  .column {
    flex: 1;
    padding: 0.75rem;
    &:first-child {
      padding-left: 0px;
    }
    &.is-6 {
      flex: none;
      width: 50%;
    }
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
