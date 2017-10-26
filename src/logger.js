import ReactGA from 'react-ga'

ReactGA.initialize('UA-108721903-1', { debug: true })

function logPage(location) {
  console.log('called')
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
}

function logEvent(action) {
  console.log('called')
  ReactGA.event({
    category: "Click",
    action: action
  })
}

export { logPage, logEvent }
