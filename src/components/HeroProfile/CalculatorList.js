import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'material-ui/List'
import Calculator from './Calculator'

const CalculatorList = props => {
  const { ability, remainingPoints } = props
  const PROFILE_ORDER = ['str', 'int', 'agi', 'luk']

  return (
    <List>
      {PROFILE_ORDER.map(profile =>
        <Calculator
          key={profile}
          type={profile}
          points={ability[profile]}
          remainingPoints={remainingPoints}
        />
      )}
    </List>
  )
}

CalculatorList.propTypes = {
  ability: PropTypes.shape({
    str: PropTypes.number.isRequired,
    int: PropTypes.number.isRequired,
    agi: PropTypes.number.isRequired,
    luk: PropTypes.number.isRequired
  }).isRequired,
  remainingPoints: PropTypes.number.isRequired
}

export default CalculatorList
