import React, { Component } from 'react';
import FixedNavbar from './FixedNavbar.js';

const programming = [
  {
    company: "Accord Systems LLC",
    date: "Apr 16 - Current",
    location: "Alpharetta, GA, USA",
    title: "Ruby on Rails Developer",
    description: "",
    summary: [
      "In a team of three other developers working on a full stack application for the health insurance industry, specifically health care compliance reporting."
    ]
  },
  {
    company: "Codesmith Development",
    date: "Dec 15 - Apr 16",
    location: "Atlanta, GA, USA",
    title: "Ruby on Rails Developer",
    description: "",
    summary: [
      "Built Rails API with two other backend developers for a campaign management platform.",
      "Built Rails API for a mobile app similar to tinder, supports real time chat, push notifications, location and other criteria based matching.",
      "Built Rails API for tracking an essential company process."
    ]
  },
  {
    company: "The Iron Yard",
    date: "Sep 15 - Nov 15",
    location: "Atlanta, GA, USA",
    title: "Ruby on Rails Teacher Assistant",
    description: "",
    summary: [
      "Responsibilities include helping students with their homework, reinforcing concepts learned in class, and assisting with grading."
    ]
  },
  {
    company: "The Iron Yard",
    date: "May 15 - Jul 15",
    location: "Atlanta, GA, USA",
    title: "Ruby on Rails Engineering Student",
    description: "12 week intensive programming course aimed at preparing students to be junior level Ruby on Rails developers.",
    summary: []
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
      "This involved dealing with tickets, recurring reporting issues and communicating with developers on a weekly basis.",
      "Provided support to other team members’ projects.",
      "This involved attending meetings, preparing documents and learning how to manage a project.",
      "Documented and improved team processes.",
      "Redesigned an internal customer satisfaction survey procedure based on findings."
    ]
  },
  {
    company: "UPS Global Business Services",
    date: "Oct 14 - Dec 14",
    location: "Atlanta, GA, USA",
    title: "Order to Cash Intern",
    description: "Worked in a team responsible for monitoring and improving ups customer processes before and after their packages have been shipped.",
    summary: [
      "Worked with speech analytics software to analyze customer calls to ups call centers worldwide.",
      "Main task was to find what the customer pain points were along my team's processes.",
      "Developed a strategy to identify customer issues, improving overall query accuracy by more than 70%.",
      "Created, updated and optimized queries to retrieve relevant and accurate call data.",
      "Provided extensive documentation and a framework on how to use the speech analytics software effectively for the whole department.presented findings to top level management in the Global Business Services division."
    ]
  },
  {
    company: "Amadeus IT Group SA",
    date: "Aug 11 – Aug 12",
    location: "Madrid, Spain",
    title: "Commercial Finance Analyst",
    description: "",
    summary: [
      "Key member of a team responsible for supporting internal account managers and global travel agencies with financial and KPI reporting, contract implementation, and ad-hoc analysis.",
      "Personally responsible for accounts which represented 25% of amadeus’ yearly booking volume and provided day-to-day support to key corporate travel management agencies.",
      "Utilized database programs such as business objects (allstats), sap, and ms access to extract essential data for reporting, clients, and account management.",
      "Reduced total lead time of monthly reoccurring reports and database queries from two weeks to three days."
    ]
  }
]

const education = [
  {
    company: "Lancaster University",
    date: "09 - 14",
    location: "Lancaster, England",
    title: "BSc Hons Managment (Study Abroad) – 2:1 degree",
    description: "The degree covered a wide spectrum of business subjects. specialized in accounting and finance modules including: financial statement analysis, corporate finance, investment and portfolio management.",
    summary: []
  },
  {
    company: "Hong Kong University of Science and Technology",
    date: "10 - 11",
    location: "Hong Kong, China",
    title: "Exchange year",
    description: "Lead an exchange student organization, enrolled in chinese (mandarin) modules, and member in a six month management consulting project for a company (mag infinity) in hong kong",
    summary: []
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
                <li> Make a difference </li>
              </ul>
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
                    <h3 style={{marginBottom: 0}}> {job.title} </h3>
                    <p style={{marginBottom: 0}}>Company: {job.company}</p>
                    <p style={{marginTop: 0, marginBottom: 0}}>Location: {job.location} </p>
                    <p style={{marginTop: 0}}>When: {job.date} </p>
                    <p> {job.description} </p>
                    <p> Details </p>
                    <ul style={{paddingLeft: 0}}>
                      {job.summary.map((bullet) => {
                        return(<li style={{listStylePosition: "inside"}}> {bullet} </li>) }
                      )}
                    </ul>
                  </div>
                )
              })}
              <h2> professional experience </h2>
              {professional.map((job) => {
                return(
                  <div>
                    <h3 style={{marginBottom: 0}}> {job.title} </h3>
                    <p style={{marginBottom: 0}}>Company: {job.company}</p>
                    <p style={{marginTop: 0, marginBottom: 0}}>Location: {job.location} </p>
                    <p style={{marginTop: 0}}>When: {job.date} </p>
                    <p> {job.description} </p>
                    <p> Details </p>
                    <ul style={{paddingLeft: 0}}>
                      {job.summary.map((bullet) => {
                        return(<li style={{listStylePosition: "inside"}}> {bullet} </li>) }
                      )}
                    </ul>
                  </div>
                )
              })}
              <h2> education </h2>
              {education.map((job) => {
                return(
                  <div>
                    <h3 style={{marginBottom: 0}}> {job.title} </h3>
                    <p style={{marginBottom: 0}}>Company: {job.company}</p>
                    <p style={{marginTop: 0, marginBottom: 0}}>Location: {job.location} </p>
                    <p style={{marginTop: 0}}>When: {job.date} </p>
                    <p> {job.description} </p>
                    <p> Details </p>
                    <ul style={{paddingLeft: 0}}>
                      {job.summary.map((bullet) => {
                        return(<li style={{listStylePosition: "inside"}}> {bullet} </li>) }
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
