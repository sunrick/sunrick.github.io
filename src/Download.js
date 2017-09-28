import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

const programming = [
  {
    company: "Accord Systems LLC",
    date: "Apr 16 - Current",
    location: "Alpharetta, GA, USA",
    title: "Ruby on Rails Developer",
    description: "Accord Systems is a software company specialized in building platforms for the Affordable Care Act (ACA) and HR industry.",
    summary: [
      "Lead developer on a new self service full stack Rails product (Forms Express).",
      "Developer on flagship full stack Rails product (Accord ACA).",
      "Wrote over 800+ tests covering essential platform functionality.",
      "Sped up an important process by 1500 times (from 25 hours to 10 minutes).",
    ]
  },
  {
    company: "Codesmith Development",
    date: "Dec 15 - Apr 16",
    location: "Atlanta, GA, USA",
    title: "Ruby on Rails Developer",
    description: "Codesmith Development is a software development shop.",
    summary: [
      "Lead developer for Rails API on a mobile app similar to Tinder, supports real time chat, push notifications, OAuth flows, location based matching.",
      "Lead developer for Rails API for tracking a client's essential company process.",
      "Built Rails API with two other backend developers for a campaign management platform.",
    ]
  },
  {
    company: "The Iron Yard",
    date: "Sep 15 - Nov 15",
    location: "Atlanta, GA, USA",
    title: "Ruby on Rails Teacher Assistant",
    description: "The Iron Yard is a programming school.",
    summary: [
      "Helped students with coursework.",
      "Reinforced concepts learned in class.",
      "Assisted with grading assignments."
    ]
  },
  {
    company: "The Iron Yard",
    date: "May 15 - Jul 15",
    location: "Atlanta, GA, USA",
    title: "Ruby on Rails Engineering Student",
    description: "The Iron Yard is a programming school.",
    summary: [
      "Attended 12 week intensive programming course aimed at preparing students to become Ruby on Rails developers.",
      "Built Spanish verb conjugation Rails API that supported 57,000+ conjugations.",
      "Built restaurant health score web scraper at Atlanta Civic hackathon.",
      "Built route optimization Rails API using Googles API. Supported up to 8 locations.",
    ]
  }
];

const professional = [
  {
    company: "UPS Global Business Services",
    date: "Dec 14 - Feb 14",
    location: "Atlanta, GA, USA",
    title: "Finance and Accounting Systems Specialist",
    description: "Worked in a team responsible for managing UPS Supply Chain Solutions billing/accounting IT systems.",
    summary: [
      "Point of contact/intermediary for the ETMS IT system for developers and their customers.",
      "Dealt with tickets, recurring reporting issues and communicated with developers on a weekly basis.",
      "Provided support to other team members’ projects by attending meetings, and preparing documents.",
      "Documented and improved team processes.",
      "Redesigned an internal customer satisfaction survey procedure based on findings."
    ]
  },
  {
    company: "UPS Global Business Services",
    date: "Oct 14 - Dec 14",
    location: "Atlanta, GA, USA",
    title: "Order to Cash Intern",
    description: "Worked in a team responsible for monitoring and improving UPS customer processes before and after their packages have been shipped.",
    summary: [
      "Worked with speech analytics software to analyze customer calls to UPS call centers worldwide.",
      "Identified customer pain points along team's processes.",
      "Created, updated and optimized queries to retrieve relevant and accurate call data.",
      "Improved overall query accuracy by more than 70%.",
      "Wrote documentation and built framework on how to use the speech analytics software for the whole department.",
      "Presented findings to top level management."
    ]
  },
  {
    company: "Amadeus IT Group SA",
    date: "Aug 11 – Aug 12",
    location: "Madrid, Spain",
    title: "Commercial Finance Analyst",
    description: "Amadeus is a leading IT and software provider to the travel industry.",
    summary: [
      "Supported account managers and global travel agencies with financial and KPI reporting, contract implementation, and ad-hoc analysis.",
      "Responsible for accounts that represented 25% of Amadeus’ yearly booking volume.",
      "Utilized database programs, Business Objects (Allstats), SAP, and MS Access to extract data for reporting.",
      "Reduced total lead time of monthly reoccurring reports and database queries from two weeks to three days."
    ]
  }
]

const education = [
  {
    company: "Lancaster University",
    date: "09 - 14",
    location: "Lancaster, England",
    title: "BSc Hons Management (Study Abroad) – 2:1 degree",
    description: "",
    summary: [
      "Specialized in Accounting and Finance.",
      "Notable modules: financial statement analysis, corporate finance, investment and portfolio management.",
    ]
  },
  {
    company: "Hong Kong University of Science and Technology",
    date: "10 - 11",
    location: "Hong Kong, China",
    title: "Exchange year",
    description: "",
    summary: [
      "Lead an exchange student organization.",
      "Enrolled in chinese (mandarin) modules",
      "Member of a six month management consulting project for a company (Mag Infinity) in Hong Kong."
    ]
  },
  {
    company: "American School of the Hague",
    date: "07 - 09",
    location: "Wassenaar, The Netherlands",
    title: "International Baccalaureate",
    description: "",
    summary: []
  },
  {
    company: "Lake Forest High School",
    date: "05 - 07",
    location: "Lake Forest, IL, USA",
    title: "",
    description: "",
    summary: []
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
            <div className="column">
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
              {programming.map((job) => {
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
              {professional.map((job) => {
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
              {education.map((job) => {
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
