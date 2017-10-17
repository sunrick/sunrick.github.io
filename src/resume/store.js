const store = {
  contact: {
    name: "Rickard Sundén",
    email: "rickard@sunden.io",
    linkedin: "linkedin.com/in/rsunden/",
    github: "github.com/sunrick/",
    portfolio: "sunden.io"
  },
  summary: {
    tagline: "Hello. I'm half Swedish and half American. I've lived in 9 countries. I enjoy making a difference in the world through code.",
    intro: "You can count on me to:",
    items: [
      "Develop high quality software on time.",
      "Work well in a team.",
      "Learn and adapt quickly."
    ]
  },
  skills: {
    programming: {
      languages: [
        "Javascript",
        "Ruby",
        "Elixir"
      ],
      frameworks: [
        "React JS",
        "React Native",
        "Ruby on Rails",
        "Phoenix"
      ],
      tools: [
        "Sublime",
        "Mac",
        "Git/Github",
        "Node",
        "Webpack",
        "Babel",
        "PostgresSQL",
        "Redis",
        "AWS",
        "Heroku"
      ]
    },
    spoken_languages: [
      "English",
      "Swedish",
      "French",
      "Spanish",
      "Dutch",
      "Chinese (Mandarin)"
    ]
  },
  programming: [
    {
      company: "Accord Systems LLC",
      date: "Apr 16 - Current",
      location: "Alpharetta, GA, USA",
      title: "Ruby on Rails Developer",
      description: "Accord Systems is a software company specialized in building platforms for the Affordable Care Act (ACA) and HR industry.",
      summary: [
        "Lead developer on a new self service full stack Rails product (Forms Express).",
        "Developer on flagship full stack Rails product (Accord ACA).",
        "Wrote over 800+ tests using RSpec covering essential platform functionality.",
        "Sped up form generation by 1500 times (from 25 hours to 10 minutes).",
      ]
    },
    {
      company: "Codesmith Development",
      date: "Dec 15 - Apr 16",
      location: "Atlanta, GA, USA",
      title: "Ruby on Rails Developer",
      description: "Codesmith Development is a software development shop.",
      summary: [
        "Lead developer for Rails API on a mobile app similar to Tinder, supported real time chat, push notifications, OAuth flows, location based matching.",
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
        "Graded assignments and provided feedback."
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
  ],
  professional: [
    {
      company: "UPS Global Business Services",
      date: "Dec 14 - Feb 15",
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
      description: "Worked in a team responsible for monitoring and improving UPS customer shipping processes.",
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
  ],
  education: [
    {
      company: "Lancaster University",
      date: "09 - 14",
      location: "Lancaster, England",
      title: "BSc Hons Management (Study Abroad)",
      description: "",
      summary: [
        "2:1 degree.",
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
        "Enrolled in chinese (mandarin) modules.",
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
  ],
  other: {
    sports: [
      "Play and watch soccer.",
      "Go Karting.",
      "Rock climbing."
    ],
    volunteering: [
      "Assistant coach for soccer.",
      "Tutor kids in programming."
    ],
    learning: [
      "Ruby meetups.",
      "React meetups.",
      "Language classes."
    ]
  }
}

export default store
