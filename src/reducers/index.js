import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import heroes from './heroes'

export default combineReducers({
  router: routerReducer,
  heroes
})
