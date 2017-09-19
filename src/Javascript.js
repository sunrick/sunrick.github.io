import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

class Javascript extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#F3DF49"}} className="Javascript">
        <FixedNavbar/>
        <div className="fluid-container">
          <div style={{ marginBottom: "0rem" }} className="grid">
            <div className="column">
              <h1 style={{fontSize: "4em", marginTop: "0.85rem", marginBottom: "0.85rem" }}> javascript </h1>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
              <h2> experience </h2>
              <p> 2+ years, professional </p>
              <h2> about </h2>
              <p>
                javascript.
              </p>
              <h2> how i use it </h2>
              <p>
                hello.
              </p>
              <h2> the future </h2>
              <p>
                dog.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Javascript;
