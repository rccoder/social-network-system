import React from 'react'
import { Router, Route, Redirect, Link, hashHistory, IndexRoute } from 'react-router';

import Header from './component/HeaderComponent/Header'
import Home from './component/HomeComponent/Home'
import About from './component/AboutComponent/About'

const AppRoutes = (
  <Route path='/' component={Header}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path='about' component={About} />
  </Route>
)
export default AppRoutes
