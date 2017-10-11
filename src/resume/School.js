import React, { Component } from 'react';
import { Labels, Label } from '../components.js'

class School extends Component {
  render() {
    const school = this.props.school
    const items = [school.title, school.location, school.date].filter((item) => item !== "")
    return(
     <div style={{ paddingBottom: "1rem"}}>
      <h3 style={{marginBottom: "1.5rem"}}> {school.company.toLowerCase()} </h3>
      <PaddedLabels>
        {items.map((item, index) => (
          <Label key={index}>{item}</Label>
        ))}
      </PaddedLabels>
      <p>{school.description}</p>
      <ul>
        {school.summary.map((bullet) => {
          return(<li style={{marginBottom: "0.25rem"}}>{bullet}</li>)
        })}
      </ul>
    </div>
    )
  }
}

const PaddedLabels = Labels.extend`
  padding-bottom: 0.75rem
`

export default School
