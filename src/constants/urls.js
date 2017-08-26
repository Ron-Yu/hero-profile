import C from './basic'

const { GET_HEROES } = C

const BASE = 'http://hahow-recruit.herokuapp.com'

export default {
  [GET_HEROES]: `${BASE}/heroes`
}
