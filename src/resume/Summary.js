import React, { Component } from 'react';
class Summary extends Component {
  render() {
    const summary = this.props.summary
    return(
      <div>
        <h2>summary</h2>
        <p>{summary.tagline}</p>
        <p>{summary.dependencies.intro}</p>
        <ul>
          {summary.dependencies.items.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Summary
