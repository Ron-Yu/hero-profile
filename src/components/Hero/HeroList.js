import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHeroes } from '../../actions'
import { Flex, Box } from 'grid-styled'
import Hero from './Hero'

class HeroList extends Component {
  componentDidMount() {
    const { getHeroes } = this.props
    getHeroes()
  }

  render() {
    const { heroes } = this.props

    if (heroes.length === 0) return null

    return (
      <Flex>
        {heroes.map((hero, index) => {
          return (
            <Box key={hero.id} width={1 / 4} px={2}>
              <Hero {...hero} index={index} />
            </Box>
          )
        })}
      </Flex>
    )
  }
}

export default connect(
  state => ({
    heroes: state.heroes
  }),
  {
    getHeroes
  }
)(HeroList)
