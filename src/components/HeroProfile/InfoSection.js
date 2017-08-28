import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'
import { updateHeroProfile } from '../../actions'

const InfoSection = props => {
  const { remainingPoints, updateHeroProfile, ability, heroId } = props

  const handleUpdateProfile = () =>
    updateHeroProfile({
      heroId,
      ability
    })

  return (
    <Container column align="center" justify="space-around">
      <Box>
        <h3>
          remainging point: {remainingPoints}
        </h3>
      </Box>
      <Box>
        <RaisedButton
          label="Update"
          primary={true}
          onClick={handleUpdateProfile}
          disabled={remainingPoints > 0}
        />
      </Box>
    </Container>
  )
}

InfoSection.propTypes = {
  heroId: PropTypes.string.isRequired,
  remainingPoints: PropTypes.number.isRequired,
  updateHeroProfile: PropTypes.func.isRequired,
  ability: PropTypes.shape({
    str: PropTypes.number.isRequired,
    int: PropTypes.number.isRequired,
    agi: PropTypes.number.isRequired,
    luk: PropTypes.number.isRequired
  }).isRequired
}

const Container = styled(Flex)`
  height: 100%;
`

export default connect(null, { updateHeroProfile })(InfoSection)
