import ACTION_TYPES from '../constants/actionTypes'

const { GET_HEROES_SUCCESS } = ACTION_TYPES

const INITIAL_STATE = []

export default function heroesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_HEROES_SUCCESS:
      return action.payload.data
    default:
      return state
  }
}
