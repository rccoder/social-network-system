import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import { getMuiTheme } from 'material-ui/styles'

import LeftNav from '../LeftNavComponent/LeftNav'
import Footer from '../FooterComponent/Footer'

import './Header.less'

const Header = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    }
  },
  getInitialState() {
    return {
      leftNavOpen: false,
      aboutMeOpen: false,
      muiTheme: getMuiTheme()
    }
  },
  componentWillMount() {
    this.setState({
      muiTheme: this.state.muiTheme
    })
  },
  handleTouchTapLeftIconButton() {
    console.log('tap')
    this.setState({
      leftNavOpen: !this.state.leftNavOpen
    })
  },
  handleTouchTapAboutMeButton() {
    console.log('aboutme')
    this.setState({
      aboutMeOpen: true
    })
  },
  handleAboutMeClose() {
    this.setState({
      aboutMeOpen: false
    })
  },
  getStyles() {
    return {
      AppBar: {
        position: 'fixed',
        top: 0,
        marginLeft: '0px',

      }
    }
  },
  handleCloseLeftNav() {
    this.setState({
      leftNavOpen: false
    })
  },
  render() {
    const styles = this.getStyles()

    const title = 'Just Say'

    let { leftNavOpen } = this.state

    let showMenuIconButton = true

    styles.leftNav = {
       zIndex: styles.AppBar.zIndex - 1,
    }

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleAboutMeClose}
      />
    ];

    return(
      <div className = 'main'>
        <AppBar
          onLeftIconButtonTouchTap = {this.handleTouchTapLeftIconButton}
          onRightIconButtonTouchTap = {this.handleTouchTapAboutMeButton}
          title = {title}
          zDepth = {0}
          style = {styles.AppBar}
          iconClassNameRight="muidocs-icon-custom-github"
        />
        <Dialog
          title="About Me"
          actions={actions}
          modal={false}
          open={this.state.aboutMeOpen}
          onRequestClose={this.handleAboutMeClose}
        >
          This is a simple social network system called 'Just Say'
          <br/>
          Author: 'rccoder'
          <br/>
          Github: 'https://github.com/rccoder'
        </Dialog>
        <LeftNav
          style = {styles.leftNav}
          open = {leftNavOpen}
          closeLeftNav = {this.handleCloseLeftNav}
        />
        {/* the main content*/}
        {this.props.children}
        <Footer>
        </Footer>
      </div>
    )
  }
})

export default Header
