import C from './basic'

const { GET_HEROES, GET_HERO_PROFILE, UPDATE_HERO_PROFILE } = C

const BASE = 'http://hahow-recruit.herokuapp.com'

export default {
  [GET_HEROES]: `${BASE}/heroes`,
  [GET_HERO_PROFILE]: `${BASE}/heroes/:heroId/profile`,
  [UPDATE_HERO_PROFILE]: `${BASE}/heroes/:heroId/profile`
}
