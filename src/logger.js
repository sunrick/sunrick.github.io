import ReactGA from 'react-ga'

ReactGA.initialize('UA-108721903-1', { debug: true })

function logPage(location) {
  ReactGA.set({ page: location.hash.replace('#', '') })
  ReactGA.pageview(location.hash.replace('#', ''))
}

function logEvent(action) {
  ReactGA.event({
    category: "Click",
    action: action
  })
}

export { logPage, logEvent }
