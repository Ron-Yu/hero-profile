import axios from 'axios'
import C from '../constants/basic'
import URLS from '../constants/urls'
import ACTION_TYPES from '../constants/actionTypes'

const { GET_HEROES, GET_HERO_PROFILE, UPDATE_HERO_PROFILE } = URLS

const {
  GET_HEROES_REQUEST,
  GET_HEROES_SUCCESS,
  GET_HEROES_FAILURE,
  GET_HERO_PROFILE_REQUEST,
  GET_HERO_PROFILE_SUCCESS,
  GET_HERO_PROFILE_FAILURE,
  UPDATE_HERO_PROFILE_REQUEST,
  UPDATE_HERO_PROFILE_SUCCESS,
  UPDATE_HERO_PROFILE_FAILURE
} = ACTION_TYPES

const { INC_ABILITY, DEC_ABILITY } = C

export function getHeroes() {
  return async dispatch => {
    try {
      dispatch({ type: GET_HEROES_REQUEST })

      const { status, data } = await axios({
        method: 'get',
        url: GET_HEROES
      })

      status === 200
        ? dispatch({ type: GET_HEROES_SUCCESS, payload: data })
        : dispatch({ type: GET_HEROES_FAILURE, payload: data })
    } catch (err) {
      dispatch({ type: GET_HEROES_FAILURE, payload: err.response.data })
    }
  }
}

export function getHeroProfile(heroId) {
  return async dispatch => {
    try {
      const url = GET_HERO_PROFILE.replace(':heroId', heroId)

      dispatch({ type: GET_HERO_PROFILE_REQUEST })

      const { status, data } = await axios({
        method: 'get',
        url
      })

      status === 200
        ? dispatch({ type: GET_HERO_PROFILE_SUCCESS, payload: data })
        : dispatch({ type: GET_HERO_PROFILE_FAILURE, payload: data })
    } catch (err) {
      dispatch({ type: GET_HERO_PROFILE_FAILURE, payload: err.response.data })
    }
  }
}

export function updateHeroProfile({ heroId, ability }) {
  return async dispatch => {
    try {
      const url = UPDATE_HERO_PROFILE.replace(':heroId', heroId)

      dispatch({ type: UPDATE_HERO_PROFILE_REQUEST })

      const { status } = await axios({
        method: 'patch',
        url,
        data: ability
      })

      status === 200
        ? dispatch({ type: UPDATE_HERO_PROFILE_SUCCESS })
        : dispatch({ type: UPDATE_HERO_PROFILE_FAILURE })
    } catch (err) {
      dispatch({
        type: UPDATE_HERO_PROFILE_FAILURE,
        payload: err.response.data
      })
    }
  }
}

export function incAbility(abilityType) {
  return {
    type: INC_ABILITY,
    payload: {
      abilityType
    }
  }
}

export function decAbility(abilityType) {
  return {
    type: DEC_ABILITY,
    payload: {
      abilityType
    }
  }
}
