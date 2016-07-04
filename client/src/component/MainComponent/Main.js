import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import { getMuiTheme } from 'material-ui/styles'

import Header from '../HeaderComponent/Header'
import LeftNav from '../LeftNavComponent/LeftNav'
import Footer from '../FooterComponent/Footer'

import './Main.less'

const Main = React.createClass({
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
  handleTouchTapCloseLeftNav() {
    this.setState({
      leftNavOpen: false
    })
  },
  getStyles() {
    return {
      content: {
        marginLeft: '0px'
      }
    }
  },
  render() {
    const style = this.getStyles()
    if(this.state.leftNavOpen == true) {
      style.content.marginLeft = "256px"
    }
    return(
      <div className = 'main'>
        <Header
          onLeftIconButtonTouchTap = {this.handleTouchTapLeftIconButton}
        />
        <LeftNav
          open = {this.state.leftNavOpen}
          closeLeftNav = {this.handleTouchTapCloseLeftNav}
        />
        <div style = {style.content}>
        {/* the main content*/}
        {this.props.children}
        </div>
        <Footer>
        </Footer>
      </div>
    )
  }
})

export default Main
