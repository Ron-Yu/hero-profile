import {
  abilityReducer,
  remainingPointsReducer,
  INITIAL_STATE
} from './heroProfile'
import ACTION_TYPES from '../constants/actionTypes'
import C from '../constants/basic'

describe('ability reducer', () => {
  it('should return the initial state', () => {
    expect(abilityReducer(undefined, {})).toEqual(INITIAL_STATE.ability)
  })

  it(`should handle ${ACTION_TYPES.GET_HERO_PROFILE_SUCCESS}`, () => {
    const ability = { str: 2, int: 5 }

    expect(
      abilityReducer(undefined, {
        type: ACTION_TYPES.GET_HERO_PROFILE_SUCCESS,
        payload: ability
      })
    ).toEqual(ability)
  })

  it(`should handle ${C.INC_ABILITY}`, () => {
    const abilityType = 'str'
    const abilityState = { str: 1, int: 2, agi: 3, luk: 4 }

    expect(
      abilityReducer(abilityState, {
        type: C.INC_ABILITY,
        payload: { abilityType }
      })
    ).toEqual({ str: 2, int: 2, agi: 3, luk: 4 })
  })

  it(`should handle ${C.DEC_ABILITY}`, () => {
    const abilityType = 'agi'
    const abilityState = { str: 1, int: 2, agi: 3, luk: 4 }

    expect(
      abilityReducer(abilityState, {
        type: C.DEC_ABILITY,
        payload: { abilityType }
      })
    ).toEqual({ str: 1, int: 2, agi: 2, luk: 4 })
  })
})

describe('remainingPoints reducer', () => {
  it('should return the initial state', () => {
    expect(remainingPointsReducer(undefined, {})).toEqual(
      INITIAL_STATE.remaingingPoints
    )
  })

  it(`should handle ${C.INC_ABILITY} and remove remainingPoints by 1`, () => {
    const remainingPoints = 1

    expect(
      remainingPointsReducer(remainingPoints, {
        type: C.INC_ABILITY
      })
    ).toEqual(remainingPoints - 1)
  })

  it(`should handle ${C.DEC_ABILITY} and add remainingPoints by 1`, () => {
    const remainingPoints = 1

    expect(
      remainingPointsReducer(remainingPoints, {
        type: C.DEC_ABILITY
      })
    ).toEqual(remainingPoints + 1)
  })
})
