import React from 'react'
import Paper from 'material-ui/Paper';


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
        <Paper style={style} zDepth={2} rounded={false} />
        <Paper style={style} zDepth={3} rounded={false} />
        <Paper style={style} zDepth={4} rounded={false} />
        <Paper style={style} zDepth={5} rounded={false} />
      </div>
    )
  }
})

export default About
