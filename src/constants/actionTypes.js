import { makeActionsStatus } from '../utils'
import C from './basic'

const { GET_HEROES } = C

const arr = [GET_HEROES]

let result = {}

arr.forEach(item => {
  result = { ...result, ...makeActionsStatus(item) }
})

export default result
