import React from 'react'
import { Router, Route, Redirect, Link, hashHistory, IndexRoute } from 'react-router';

import Main from './component/MainComponent/Main'
import Home from './component/HomeComponent/Home'
import About from './component/AboutComponent/About'
import Post from './component/PostComponent/Post'

const AppRoutes = (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path='about' component={About} />
    <Route path='/post/:id' component={Post} />
  </Route>
)
export default AppRoutes
