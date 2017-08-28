import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch, Redirect } from 'react-router'
import App from './App'

const history = createHistory()

export default function() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/heroes" component={App} />
        <Redirect from="/" to="/heroes" />
      </Switch>
    </ConnectedRouter>
  )
}
