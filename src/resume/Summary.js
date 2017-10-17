import React, { Component } from 'react';
class Summary extends Component {
  render() {
    const summary = this.props.summary
    return(
      <div>
        <h2>summary</h2>
        <p>{summary.tagline}</p>
        <p>{summary.intro}</p>
        <ul>
          {summary.items.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Summary
