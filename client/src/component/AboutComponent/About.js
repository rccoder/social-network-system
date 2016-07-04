import React from 'react'
import Paper from 'material-ui/Paper';

const AboutContentText = (
  <div>
  </div>
)

const About  = React.createClass({
  render() {
    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    }
    return(
      <div>
      1111
        <Paper style={style} zDepth={1} rounded={false} />
      </div>
    )
  }
})

export default About
