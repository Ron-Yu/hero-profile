import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getHeroProfile } from '../../actions'
import { Flex, Box } from 'grid-styled'
import { FadeIn } from 'animate-css-styled-components'
import CalculatorList from './CalculatorList'
import InfoSection from './InfoSection'

class ActiveHeroProfile extends Component {
  componentDidMount() {
    const { getHeroProfile, match: { params: { heroId } } } = this.props
    getHeroProfile(heroId)
  }

  componentWillReceiveProps(nextProps) {
    const { getHeroProfile, match: { params: { heroId } } } = this.props
    const { match: { params: { heroId: nextHeroId } } } = nextProps

    if (heroId !== nextHeroId) {
      getHeroProfile(nextHeroId)
    }
  }

  render() {
    const { heroProfile, match: { params: { heroId } } } = this.props

    return (
      <FadeIn delay="0.5s">
        <Flex justify="center" wrap>
          <Box width={[1, 1 / 3]} px={2}>
            <CalculatorList {...heroProfile} />
          </Box>
          <Box width={[1, 1 / 3]} px={2}>
            <InfoSection {...heroProfile} heroId={heroId} />
          </Box>
        </Flex>
      </FadeIn>
    )
  }
}

ActiveHeroProfile.propTypes = {
  getHeroProfile: PropTypes.func.isRequired,
  heroId: PropTypes.string
}

ActiveHeroProfile.defaultProps = {
  heroId: ''
}

export default connect(
  state => ({
    heroProfile: state.heroProfile
  }),
  { getHeroProfile }
)(ActiveHeroProfile)
