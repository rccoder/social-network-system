import React from 'react';
import AppBar from 'material-ui/AppBar'

import { getMuiTheme } from 'material-ui/styles'

import './Header.less'

const Header = React.createClass({
  getStyles() {
    return {
      AppBar: {
        position: 'fixed',
        top: 0,
        paddingRight: '40px',
      }
    }
  },
  render() {
    const styles = this.getStyles()
    const title = 'Just Say'

    const {onLeftIconButtonTouchTap} = this.props

    return(
      <AppBar
        onLeftIconButtonTouchTap = {onLeftIconButtonTouchTap}
        title = {title}
        zDepth = {0}
        style = {styles.AppBar}
      />
    )
  }
})

export default Header
