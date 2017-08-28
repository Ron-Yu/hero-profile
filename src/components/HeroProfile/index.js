import React from 'react'
import { Route, Switch } from 'react-router'
import EmptyHeroProfile from './EmptyHeroProfile'
import ActiveHeroProfile from './ActiveHeroProfile'

const HeroProfile = () =>
  <Switch>
    <Route exact path="/heroes" component={EmptyHeroProfile} />
    <Route path="/heroes/:heroId" component={ActiveHeroProfile} />
  </Switch>

export default HeroProfile
