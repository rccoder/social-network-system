import React from 'react'

import SayAbstract from '../SayAbstractComponent/SayAbstract'

import './Home.less'

const HomeScreen = (
  <div className = 'homeScreen'>
    <h1>
      Just Says
    </h1>
    <p>
    simple social network system
    </p>
  </div>
);

const Home = React.createClass({
  render() {
    return(
      <div>
        {HomeScreen}
        <SayAbstract
         />
      </div>
    )
  }
})

export default Home
