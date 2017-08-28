import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import heroes from './heroes'
import { abilityReducer, remainingPointsReducer } from './heroProfile'

export default combineReducers({
  router: routerReducer,
  heroes,
  heroProfile: combineReducers({
    ability: abilityReducer,
    remainingPoints: remainingPointsReducer
  })
})
