import createHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const history = createHistory()

const middleware = [routerMiddleware(history), thunk]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    initialState,
    enhancer
  )
}
