import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListItem } from 'material-ui/List'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import { incAbility, decAbility } from '../../actions'

const Calculator = props => {
  const { type, points, remainingPoints, incAbility, decAbility } = props

  const handleIncAbility = () => incAbility(type)
  const handleDecAbility = () => decAbility(type)

  return (
    <ListItem>
      <FlexContainer>
        <Box width={4 / 12}>
          <TypeArea>
            {type}
          </TypeArea>
        </Box>
        <Box width={2 / 12}>
          <FloatingActionButton
            mini={true}
            disabled={remainingPoints === 0}
            onClick={handleIncAbility}
          >
            <ContentAdd />
          </FloatingActionButton>
        </Box>
        <Box width={4 / 12}>
          <ValueyArea>
            {points}
          </ValueyArea>
        </Box>
        <Box width={2 / 12}>
          <FloatingActionButton
            mini={true}
            secondary={true}
            disabled={points === 0}
            onClick={handleDecAbility}
          >
            <ContentRemove />
          </FloatingActionButton>
        </Box>
      </FlexContainer>
    </ListItem>
  )
}

Calculator.propTypes = {
  type: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  remainingPoints: PropTypes.number.isRequired,
  incAbility: PropTypes.func.isRequired,
  decAbility: PropTypes.func.isRequired
}

const FlexContainer = styled(Flex)`
  align-items: center;
  text-align: center;
`

const TypeArea = styled.h3`color: #ec7b7b;`
const ValueyArea = TypeArea.extend`color: #4caf50;`

export default connect(null, { incAbility, decAbility })(Calculator)
