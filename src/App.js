import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HeroList from './components/Hero/HeroList'
import styled from 'styled-components'
import { Box } from 'grid-styled'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Container>
          <HeroList />
          <FlatButton label="Default" />
          {/* {this.props.children} */}
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
