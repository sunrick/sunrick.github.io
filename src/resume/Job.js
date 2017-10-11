import React, { Component } from 'react';
import { Labels, Label } from '../components.js'

class Job extends Component {

  render() {
    const job = this.props.job
    const items = [job.company, job.location, job.date]
    return(
      <div style={{ paddingBottom: "1rem"}}>
        <h3 style={{marginBottom: "1.5rem"}}> {job.title.toLowerCase()} </h3>
        <PaddedLabels>
          {items.map((item, index) => (
            <Label key={index}>{item}</Label>
          ))}
        </PaddedLabels>
        <p>{job.description}</p>
        <ul>
          {job.summary.map((bullet) => {
            return(<li style={{marginBottom: "0.75rem"}}>{bullet}</li>)
          })}
        </ul>
      </div>
    )
  }

}

const PaddedLabels = Labels.extend`
  padding-bottom: 0.75rem
`

export default Job
