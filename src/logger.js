import ReactGA from 'react-ga'

ReactGA.initialize('UA-108721903-1')

function logPage(location) {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
}

function logEvent(action) {
  ReactGA.event({
    category: "Click",
    action: action
  })
  alert('hi')
}

export { logPage, logEvent }
