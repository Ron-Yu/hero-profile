import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getHeroes } from '../../actions'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import HeroCard from './HeroCard'

class HeroList extends Component {
  componentDidMount() {
    const { getHeroes } = this.props

    getHeroes()
  }

  render() {
    const { heroes, match: { params: { heroId } } } = this.props

    if (heroes.length === 0) return null

    return (
      <FlexContainer wrap>
        {heroes.map((hero, index) => {
          const isActive = Number(heroId) === Number(hero.id)

          return (
            <Box key={hero.id} w={[1, 1 / 2, 1 / 4]} px={2}>
              <HeroCard {...hero} index={index} isActive={isActive} />
            </Box>
          )
        })}
      </FlexContainer>
    )
  }
}

HeroList.propTypes = {
  getHeroes: PropTypes.func.isRequired,
  heroes: PropTypes.array.isRequired,
  heroId: PropTypes.string
}

HeroList.defaultProps = {
  heroId: ''
}

const FlexContainer = styled(Flex)`
  margin-bottom: 20px;
`

export default connect(
  state => ({
    heroes: state.heroes,
    router: state.router
  }),
  {
    getHeroes
  }
)(HeroList)
