import React, { Component } from 'react'
import styled from 'styled-components'
import { StandardWritingPage } from '../components.js'
import SkillList from './SkillList.js'
import Job from './Job.js'
import School from './School.js'
import Summary from './Summary.js'
import store from './store.js'

class Resume extends Component {
  render() {
    return (
      <StandardWritingPage title="résumé">
        <Summary summary={store.summary}/>
        <Section>
          <h2> skills </h2>
          <SkillList title="programming languages" items={store.skills.programming.languages}/>
          <SkillList title="programming frameworks" items={store.skills.programming.frameworks}/>
          <SkillList title="tools" items={store.skills.programming.tools}/>
          <SkillList title="spoken languages" items={store.skills.spoken_languages}/>
        </Section>
        <Section>
          <h2> programming experience </h2>
          {store.programming.map((job) => {
            return <Job job={job}/>
          })}
        </Section>
        <Section>
          <h2> professional experience </h2>
          {store.professional.map((job) => {
            return <Job job={job}/>
          })}
        </Section>
        <Section>
          <h2> education </h2>
          {store.education.map((school) => {
            return <School school={school}/>
          })}
        </Section>
      </StandardWritingPage>
    )
  }
}

export default Resume;


const Section = styled.div`
  margin-top: 2.5rem;
`
