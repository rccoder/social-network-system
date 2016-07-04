import React from 'react';
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';
import {
  Colors,
  Spacing,
  Typography,
} from 'material-ui/styles';

const LeftNav = React.createClass({
  getStyles() {
    return {
      leftNavTitle: {
        cursor: 'pointer',
        fontSize: 24,
        color: 'red',
        lineHeight: 20 + 'px',
        fontWeight: '',
        backgroundColor: 'red',
        paddingLeft: '2px',
        marginBottom: 8
      }
    }
  },
  render(){

    const { open, docked, closeLeftNav } = this.props

    const styles = this.getStyles()

    return(
      <Drawer
        open = {open}
        docked = {docked}
      >
        <MenuItem
         onTouchTap = {closeLeftNav}
        >
         Close
        </MenuItem>
        <Link to={`/home`}><MenuItem>Home</MenuItem></Link>
        <Link to={`/about`}><MenuItem>About</MenuItem></Link>
      </Drawer>
    )
  }
})

export default LeftNav
