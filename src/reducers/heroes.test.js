import reducer from './heroes'
import ACTION_TYPES from '../constants/actionTypes'

describe('heroes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle GET_HEROES_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: ACTION_TYPES.GET_HEROES_SUCCESS,
        payload: [{ id: '1', name: 'name1' }, { id: '2', name: 'name2' }]
      })
    ).toEqual([{ id: '1', name: 'name1' }, { id: '2', name: 'name2' }])

    expect(
      reducer(
        [
          {
            id: '0',
            name: 'name0'
          }
        ],
        {
          type: ACTION_TYPES.GET_HEROES_SUCCESS,
          payload: [{ id: '1', name: 'name1' }, { id: '2', name: 'name2' }]
        }
      )
    ).toEqual([{ id: '1', name: 'name1' }, { id: '2', name: 'name2' }])
  })
})
