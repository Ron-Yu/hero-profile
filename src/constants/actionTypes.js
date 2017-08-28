import { makeActionsStatus } from '../utils'
import C from './basic'

const { GET_HEROES, GET_HERO_PROFILE, UPDATE_HERO_PROFILE } = C

const arr = [GET_HEROES, GET_HERO_PROFILE, UPDATE_HERO_PROFILE]

let result = {}

arr.forEach(item => {
  result = { ...result, ...makeActionsStatus(item) }
})

export default result
