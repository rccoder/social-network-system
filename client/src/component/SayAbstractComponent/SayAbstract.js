import React from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';

const OneSayAbstract = React.createClass({
  getStyles() {
    return {
      paper: {
        minHeight: '200px',
        width: '96%',
        margin: '20px auto',
        display: 'block',
        padding: '30px',
        position: 'relative'
      },
      author: {
        position: 'absolute',
        bottom: '20px'
      },
      dataTime: {
        position: 'absolute',
        bottom: '20px',
        left: '150px'
      },
      readMore: {
        position: 'absolute',
        right: '30px',

      }
    }
  },
  render() {
    const style = this.getStyles()
    return (
      <Paper style = {style.paper} zDepth={2}>
        <p>
          {this.props.contents}
        </p>
        <span style = {style.author}>
          {this.props.author}
        </span>
        <span style = {style.dataTime}>
          {this.props.dataTime}
        </span>
        <RaisedButton
          style = {style.readMore}
          label = "Read More"
          secondary = {true}
          />
      </Paper>
    )
  }

})

const SayAbstract = React.createClass({
  getStyles() {
    return {
      content: {
        width: "100%",
      }
    }
  },
  render () {
    const style = this.getStyles()

    const PaperList = []
    PaperList.push(
      <Link to={`/post/1`}>
        <OneSayAbstract
        contents = 'You can change the port number by setting the $PORT environment variable before invoking any of the scripts above'
        author = 'rccoder'
        dataTime = '2016-7-4'
        key = '1'
        />
      </Link>
    )

    PaperList.push(
      <Link to={`/post/2`}>
        <OneSayAbstract
        contents = 'You can change the port number by setting the $PORT environment variable before invoking any of the scripts above'
        author = 'rccoder'
        dataTime = '2016-7-4'
        key = '2'
        />
      </Link>
    )

    return (
      <div style = {style.content}>
        {PaperList}
      </div>
    )
  }
})

export default SayAbstract
