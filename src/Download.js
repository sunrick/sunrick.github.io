import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

const programming = [
  {
    company: "accord systems llc",
    date: "apr 16 - current",
    location: "alpharetta, ga, usa",
    title: "ruby on rails developer",
    summary: "in a team of three other developers working on a full stack application for the health insurance industry, specifically health care compliance reporting."
  },
  {
    company: "codesmith development",
    date: "dec 15 - apr 16",
    location: "atlanta, ga, usa",
    title: "ruby on rails developer",
    summary: "built rails api with two other backend developers for a campaign management platform. built rails api for a mobile app similar to tinder, supports real time chat, push notifications, location and other criteria based matching. building rails full stack app for tracking an essential company process."
  },
  {
    company: "the iron yard",
    date: "sep 15 - nov 15",
    location: "atlanta, ga, usa",
    title: "ruby on rails teacher assistant",
    summary: "responsibilities include helping students with their homework, reinforcing concepts learned in class, and assisting with grading."
  },
  {
    company: "the iron yard",
    date: "may 15 - jul 15",
    location: "atlanta, ga, usa",
    title: "ruby on rails engineering student",
    summary: "12 week intensive programming course aimed at preparing students to be junior level ruby on rails developers. the course is focused on preparing students on how to think like a programmer, how to produce high quality web applications and how to work effectively in teams across the development stack. the course culminates in a personal/team project to create an application that addresses a technology need and to showcase what students have learned over the 12 weeks."
  },
  {
    company: "dabench.com",
    date: "apr 12 - may 13",
    location: "madrid, spain",
    title: "co-founder",
    summary: "co-founded a social media website catered to football (soccer) fans. within the first month of launching the website, we generated 120,000 page views and 30,000 visits with 20,000 of those visitors being unique."
  }
];

const professional = [

]

const education = [
  {
    company: "lancaster university",
    date: "09 - 14",
    location: "lancaster, england",
    title: "bsc hons management (study abroad) – 2:1 degree",
    summary: "the degree covered a wide spectrum of business subjects. specialized in accounting and finance modules including: financial statement analysis, corporate finance, investment and portfolio management."
  },
  {
    company: "hong kong university of science and technology",
    date: "10 - 11",
    location: "hong kong, china",
    title: "exchange year",
    summary: "lead an exchange student organization, enrolled in chinese (mandarin) modules, and member in a six month management consulting project for a company (mag infinity) in hong kong"
  },
  {
    company: "american school of the hague",
    date: "07 - 09",
    location: "wassenaar, the netherlands",
    title: "international baccalaureate",
    summary: ""
  },
  {
    company: "lake forest high school",
    date: "05 - 07",
    location: "lake forest, il, usa",
    title: "",
    summary: ""
  }
]

class Download extends Component {
  render() {
    return (
      <div className="Download">
        <FixedNavbar/>
        <div className="fluid-container">
          <div style={{ marginBottom: "0rem" }} className="grid">
            <div className="column">
              <h1 style={{fontSize: "4em", marginTop: "0.85rem", marginBottom: "0.85rem" }}> résumé </h1>
            </div>
          </div>
          <div className="grid">
            <div className="column is-6">
              <h2> summary </h2>
              <p> </p>
              <h2> skills </h2>
              <h4> programming languages </h4>
              <ul>
                <li> ruby </li>
                <li> javascript </li>
                <li> elixir </li>
              </ul>
              <h4> programming frameworks </h4>
              <ul>
                <li> ruby on rails </li>
                <li> react </li>
                <li> phoenix </li>
              </ul>
              <h4> spoken languages </h4>
              <ul>
                <li> english </li>
                <li> swedish </li>
                <li> french </li>
                <li> spanish </li>
                <li> dutch </li>
                <li> chinese (mandarin) </li>
              </ul>
              <h2> programming experience </h2>
              {programming.map((job) => {
                return(
                  <div>
                    <h4> {job.company} </h4>
                    <p> {job.date} </p>
                    <p> {job.location} </p>
                    <p> {job.title} </p>
                    <p> {job.summary} </p>
                  </div>
                )
              })}
              <h2> professional experience </h2>
              {professional.map((job) => {
                return(
                  <div>
                    <h4> {job.company} </h4>
                    <p> {job.date} </p>
                    <p> {job.location} </p>
                    <p> {job.title} </p>
                    <p> {job.summary} </p>
                  </div>
                )
              })}
              <h2> education </h2>
              {education.map((school) => {
                return(
                  <div>
                    <h4> {school.company} </h4>
                    <p> {school.date} </p>
                    <p> {school.location} </p>
                    <p> {school.title} </p>
                    <p> {school.summary} </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
