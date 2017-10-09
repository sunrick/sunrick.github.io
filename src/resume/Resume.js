import React, { Component } from 'react';
import { StandardWritingPage } from '../components.js'
import store from './store.js'

class Resume extends Component {
  render() {
    return (
      <StandardWritingPage title="résumé">
        <h2> summary </h2>
        <p> Hello. I'm half Swedish and half American. I've lived in 9 countries and I enjoy making a difference in the world through code. </p>
        <p> You can count on me to: </p>
        <ul>
          <li> Develop high quality software on time </li>
          <li> Work well in a team </li>
          <li> Learn and adapt quickly </li>
        </ul>
        <h2> skills </h2>
        <h4> programming languages </h4>
        <ul>
          <li> Ruby </li>
          <li> Javascript </li>
          <li> Elixir </li>
        </ul>
        <h4> programming frameworks </h4>
        <ul>
          <li> Ruby on rails </li>
          <li> React </li>
          <li> Phoenix </li>
        </ul>
        <h4> tools </h4>
        <ul>
          <li> Git/Github </li>
          <li> Sublime </li>
          <li> Mac </li>
        </ul>
        <h4> spoken languages </h4>
        <ul>
          <li> English </li>
          <li> Swedish </li>
          <li> French </li>
          <li> Spanish </li>
          <li> Dutch </li>
          <li> Chinese (mandarin) </li>
        </ul>
        <h2> programming experience </h2>
        {store.programming.map((job) => {
          return(
            <div>
              <h3 style={{marginBottom: 0}}> {job.title.toLowerCase()} </h3>
              <p style={{marginBottom: 0}}>{job.company}</p>
              <p style={{marginTop: 0, marginBottom: 0}}>{job.location} </p>
              <p style={{marginTop: 0}}>{job.date} </p>
              <p>{job.description}</p>
              <ul>
                {job.summary.map((bullet) => {
                  return(<li>{bullet}</li>) }
                )}
              </ul>
            </div>
          )
        })}
        <h2> professional experience </h2>
        {store.professional.map((job) => {
          return(
            <div>
              <h3 style={{marginBottom: 0}}> {job.title.toLowerCase()} </h3>
              <p style={{marginBottom: 0}}>{job.company}</p>
              <p style={{marginTop: 0, marginBottom: 0}}>{job.location} </p>
              <p style={{marginTop: 0}}>{job.date} </p>
              <p>{job.description}</p>
              <ul>
                {job.summary.map((bullet) => {
                  return(<li>{bullet}</li>) }
                )}
              </ul>
            </div>
          )
        })}
        <h2> education </h2>
        {store.education.map((job) => {
          return(
            <div>
              <h3 style={{marginBottom: 0}}> {job.company.toLowerCase()} </h3>
              <p style={{marginBottom: 0}}>{job.title}</p>
              <p style={{marginTop: 0, marginBottom: 0}}>{job.location} </p>
              <p style={{marginTop: 0}}>{job.date} </p>
              <p>{job.description}</p>
              <ul>
                {job.summary.map((bullet) => {
                  return(<li>{bullet}</li>) }
                )}
              </ul>
            </div>
          )
        })}
      </StandardWritingPage>
  )
  }
}

export default Resume;
