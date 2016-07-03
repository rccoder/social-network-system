import React from 'react'

import './Home.less'

const HomeScreen = (
  <div className = 'homeScreen'>
    <h1>
      Just Say
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
      </div>
    )
  }
})

export default Home
