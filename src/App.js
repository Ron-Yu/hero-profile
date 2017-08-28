import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Hero from './components/Hero/'
import styled from 'styled-components'
import { Box } from 'grid-styled'
import HeroProfile from './components/HeroProfile'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Container>
          <Hero />
          <HeroProfile />
        </Container>
      </MuiThemeProvider>
    )
  }
}

const Container = styled(Box)`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`

export default App
