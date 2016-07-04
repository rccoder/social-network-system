import React from 'react'
import Paper from 'material-ui/Paper'

const Post = React.createClass({
  getInitialState() {
    return {
      title: 'Loading Title',
      content: 'Loading Content'
    }
  },
  getStyles() {
    return {
      paper: {
        minHeight: '400px',
        width: '96%',
        margin: '20px auto',
        display: 'block',
        padding: '30px',
        position: 'relative',
        marginTop: '80px'
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
          <h3>
            {this.state.title}
          </h3>
          <div>
            {this.state.content}
          </div>
        </Paper>
    )
  }
})

export default Post
