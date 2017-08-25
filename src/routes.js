import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import App from './App'
import About from './About'

const history = createHistory()

export default function() {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </div>
    </ConnectedRouter>
  )
}
