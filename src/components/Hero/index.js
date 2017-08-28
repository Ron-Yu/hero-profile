import React from 'react'
import { Route, Switch } from 'react-router'
import HeroList from './HeroList'

const Hero = () =>
  <Switch>
    <Route exact path="/heroes/" component={HeroList} />
    <Route path="/heroes/:heroId" component={HeroList} />
  </Switch>

export default Hero
