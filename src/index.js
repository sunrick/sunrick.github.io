import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';

import FontBlack from './fonts/CircularStdBlack.woff2'
import FontBold from './fonts/CircularStdBold.woff2'
import FontBook from './fonts/CircularStdBook.woff2'

import { injectGlobal } from 'styled-components'

import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'


injectGlobal`
  @font-face {
    font-family: FontBlack;
    src: url('${FontBlack}') format('woff2');
  }
  @font-face {
    font-family: FontBold;
    src: url('${FontBold}') format('woff2');
  }
  @font-face {
    font-family: FontBook;
    src: url('${FontBook}') format('woff2');
  }
  body {
    font-family: FontBook;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    position: relative;
    font-size: 20px;
    background-color: #e6ecf0;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: FontBlack;
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
  ul {
    list-style-type: none;
    padding: 0;
  }
`

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();
