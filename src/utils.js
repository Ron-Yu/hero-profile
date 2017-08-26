import km from 'keymirror'

export function makeActionsStatus(name) {
  return km({
    [`${name}_REQUEST`]: null,
    [`${name}_SUCCESS`]: null,
    [`${name}_FAILURE`]: null
  })
}
