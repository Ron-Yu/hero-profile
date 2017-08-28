import ACTION_TYPES from '../constants/actionTypes'
import C from '../constants/basic'

const { GET_HERO_PROFILE_SUCCESS } = ACTION_TYPES
const { INC_ABILITY, DEC_ABILITY } = C

const INITIAL_STATE = {
  ability: {
    str: 0,
    int: 0,
    agi: 0,
    luk: 0
  },
  remaingingPoints: 0
}

export function abilityReducer(state = INITIAL_STATE.ability, action) {
  const abilityType = action.payload && action.payload.abilityType

  switch (action.type) {
    case GET_HERO_PROFILE_SUCCESS:
      return action.payload.data
    case INC_ABILITY:
      return {
        ...state,
        [abilityType]: state[abilityType] + 1
      }
    case DEC_ABILITY:
      return {
        ...state,
        [abilityType]: state[abilityType] - 1
      }
    default:
      return state
  }
}

export function remainingPointsReducer(
  state = INITIAL_STATE.remaingingPoints,
  action
) {
  switch (action.type) {
    case GET_HERO_PROFILE_SUCCESS:
      return INITIAL_STATE.remaingingPoints
    case INC_ABILITY:
      return state - 1
    case DEC_ABILITY:
      return state + 1
    default:
      return state
  }
}
