import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import { FlipInY } from 'animate-css-styled-components'
import { Link } from 'react-router-dom'

class HeroCard extends Component {
  constructor() {
    super()

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)

    this.state = {
      zDepth: 1
    }
  }

  componentDidMount() {
    this.setState({
      zDepth: this.props.isActive ? 5 : 1
    })
  }

  componentWillReceiveProps(nextProps) {
    const { isActive } = this.props

    if (isActive !== nextProps.isActive) {
      this.setState({
        zDepth: nextProps.isActive ? 5 : 1
      })
    }
  }

  render() {
    const { id, name, image, index, isActive } = this.props
    const { zDepth } = this.state

    const DURATION_SEC = 0.8
    const DELAY_SEC = 0.3
    const duration = `${DURATION_SEC}s`
    const delay = `${index * DELAY_SEC}s`

    return (
      <HeroLink to={`/heroes/${id}`}>
        <HeroFlipInY duration={duration} delay={delay} isActive={isActive}>
          <HeroPaper
            zDepth={zDepth}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            <Card>
              <HeroCardMedia>
                <HeroImg src={image} isActive={isActive} alt="" />
              </HeroCardMedia>
              <CardTitle title={name} />
            </Card>
          </HeroPaper>
        </HeroFlipInY>
      </HeroLink>
    )
  }

  handleMouseOver() {
    const { isActive } = this.props

    if (isActive) return

    this.setState({
      zDepth: 3
    })
  }

  handleMouseOut() {
    const { isActive } = this.props

    if (isActive) return

    this.setState({
      zDepth: 1
    })
  }
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
}

const HeroPaper = styled(Paper)`
  cursor: pointer;
`

const HeroLink = styled(Link)`
  text-decoration: none;
`

const HeroFlipInY = styled(FlipInY)`
  transition: all 0.5s;
  border: ${props =>
    props.isActive ? '5px solid #00bcd4' : '5px solid transparent'};
`
const HeroCardMedia = styled(CardMedia)`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`

const HeroImg = styled.img`
  position: absolute;
  transition: all 0.5s;
  filter: ${props => (props.isActive ? 'invert(.8)' : 'invert(0)')};
`

export default HeroCard
