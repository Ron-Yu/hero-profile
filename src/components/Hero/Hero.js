import React, { Component } from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import { FlipInY } from 'animate-css-styled-components'

class Hero extends Component {
  constructor() {
    super()

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)

    this.state = {
      zDepth: 1
    }
  }

  render() {
    const { id, name, image, index } = this.props
    const { zDepth } = this.state

    const DURATION_SEC = 0.8
    const DELAY_SEC = 0.3
    const duration = `${DURATION_SEC}s`
    const delay = `${index * DELAY_SEC}s`

    return (
      <FlipInY duration={duration} delay={delay}>
        <HeroPaper
          zDepth={zDepth}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <Card>
            <CardMedia>
              <img src={image} alt="" />
            </CardMedia>
            <CardTitle title={name} />
          </Card>
        </HeroPaper>
      </FlipInY>
    )
  }

  handleMouseOver() {
    this.setState({
      zDepth: 5
    })
  }

  handleMouseOut() {
    this.setState({
      zDepth: 1
    })
  }
}

const HeroPaper = styled(Paper)`
  cursor: pointer;
`

export default Hero
