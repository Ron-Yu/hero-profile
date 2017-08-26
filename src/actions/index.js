import axios from 'axios'
import URLS from '../constants/urls'
import ACTION_TYPES from '../constants/actionTypes'

const { GET_HEROES } = URLS

const {
  GET_HEROES_REQUEST,
  GET_HEROES_SUCCESS,
  GET_HEROES_FAILURE
} = ACTION_TYPES

export function getHeroes() {
  return async dispatch => {
    try {
      dispatch({ type: GET_HEROES_REQUEST })

      const response = await axios({
        method: 'get',
        url: GET_HEROES
      })

      response.status === 200
        ? dispatch({ type: GET_HEROES_SUCCESS, payload: response })
        : dispatch({ type: GET_HEROES_FAILURE, payload: response })
    } catch (err) {
      dispatch({ type: GET_HEROES_FAILURE, payload: err })
    }
  }
}
