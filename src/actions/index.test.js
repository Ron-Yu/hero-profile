import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import * as actions from './index'
import ACTION_TYPES from '../constants/actionTypes'
import C from '../constants/basic'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const host = 'http://hahow-recruit.herokuapp.com'
axios.defaults.host = host
axios.defaults.adapter = httpAdapter

describe('change single ability', () => {
  it('should increment str ability', () => {
    const abilityType = 'str'
    const expectedAction = {
      type: C.INC_ABILITY,
      payload: {
        abilityType
      }
    }
    expect(actions.incAbility(abilityType)).toEqual(expectedAction)
  })

  it('should decrement int ability', () => {
    const abilityType = 'int'
    const expectedAction = {
      type: C.DEC_ABILITY,
      payload: {
        abilityType
      }
    }
    expect(actions.decAbility(abilityType)).toEqual(expectedAction)
  })
})

describe('GET GET_HEROES', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should GET_HEROES_SUCCESS', async () => {
    nock(host).get('/heroes').reply(200, [{ id: '1', name: 'name1' }])

    const expectedActions = [
      { type: ACTION_TYPES.GET_HEROES_REQUEST },
      {
        type: ACTION_TYPES.GET_HEROES_SUCCESS,
        payload: [{ id: '1', name: 'name1' }]
      }
    ]
    const store = mockStore()

    await store.dispatch(actions.getHeroes())
    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('should GET_HEROES_FAILURE', async () => {
    nock(host).get('/heroes').reply(404, 'not found')

    const expectedActions = [
      { type: ACTION_TYPES.GET_HEROES_REQUEST },
      {
        type: ACTION_TYPES.GET_HEROES_FAILURE,
        payload: 'not found'
      }
    ]
    const store = mockStore()

    await store.dispatch(actions.getHeroes())
    return expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('GET GET_HERO_PROFILE', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should GET_HERO_PROFILE_SUCCESS', async () => {
    const heroId = '1'
    nock(host)
      .get(`/heroes/${heroId}/profile`)
      .reply(200, { str: 1, int: 2, agi: 2, luk: 4 })

    const expectedActions = [
      { type: ACTION_TYPES.GET_HERO_PROFILE_REQUEST },
      {
        type: ACTION_TYPES.GET_HERO_PROFILE_SUCCESS,
        payload: { str: 1, int: 2, agi: 2, luk: 4 }
      }
    ]
    const store = mockStore()

    await store.dispatch(actions.getHeroProfile(heroId))
    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('should GET_HERO_PROFILE_FAILURE', async () => {
    const heroId = '1'
    nock(host).get(`/heroes/${heroId}/profile`).reply(404, 'not found')

    const expectedActions = [
      { type: ACTION_TYPES.GET_HERO_PROFILE_REQUEST },
      {
        type: ACTION_TYPES.GET_HERO_PROFILE_FAILURE,
        payload: 'not found'
      }
    ]
    const store = mockStore()

    await store.dispatch(actions.getHeroProfile(heroId))
    return expect(store.getActions()).toEqual(expectedActions)
  })
})

describe('PATCH UPDATE_HERO_PROFILE', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should UPDATE_HERO_PROFILE_SUCCESS', async () => {
    const heroId = '1'
    const ability = { str: 8, int: 7, agi: 5, luk: 2 }

    nock(host).patch(`/heroes/${heroId}/profile`, ability).reply(200, 'ok')

    const expectedActions = [
      { type: ACTION_TYPES.UPDATE_HERO_PROFILE_REQUEST },
      { type: ACTION_TYPES.UPDATE_HERO_PROFILE_SUCCESS }
    ]
    const store = mockStore()

    await store.dispatch(actions.updateHeroProfile({ heroId, ability }))
    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('should UPDATE_HERO_PROFILE_FAILURE when total ability points are not the same', async () => {
    const heroId = '1'

    nock(host)
      .get(`/heroes/${heroId}/profile`)
      .reply(200, { str: 1, int: 2, agi: 2, luk: 4 })

    nock(host).patch(`/heroes/${heroId}/profile`).reply(400, 'bad request')

    const { data: originalAbility } = await axios({
      method: 'get',
      url: `/heroes/${heroId}/profile`,
      baseURL: host
    })

    const newAbility = { ...originalAbility, str: originalAbility.str + 1 }

    const expectedActions = [
      { type: ACTION_TYPES.UPDATE_HERO_PROFILE_REQUEST },
      {
        type: ACTION_TYPES.UPDATE_HERO_PROFILE_FAILURE,
        payload: 'bad request'
      }
    ]
    const store = mockStore()

    await store.dispatch(actions.updateHeroProfile({ heroId, newAbility }))
    return expect(store.getActions()).toEqual(expectedActions)
  })

  it('should UPDATE_HERO_PROFILE_FAILURE when missing ability property', async () => {
    const heroId = '1'

    nock(host)
      .get(`/heroes/${heroId}/profile`)
      .reply(200, { str: 1, int: 2, agi: 2, luk: 4 })

    nock(host).patch(`/heroes/${heroId}/profile`).reply(400, 'bad request')

    const { data: originalAbility } = await axios({
      method: 'get',
      url: `/heroes/${heroId}/profile`,
      baseURL: host
    })

    const newAbility = { ...originalAbility }
    delete newAbility.str

    const expectedActions = [
      { type: ACTION_TYPES.UPDATE_HERO_PROFILE_REQUEST },
      {
        type: ACTION_TYPES.UPDATE_HERO_PROFILE_FAILURE,
        payload: 'bad request'
      }
    ]
    const store = mockStore()

    await store.dispatch(actions.updateHeroProfile({ heroId, newAbility }))
    return expect(store.getActions()).toEqual(expectedActions)
  })
})
