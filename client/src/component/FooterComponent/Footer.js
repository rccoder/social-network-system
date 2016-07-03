import React from 'react'
import './Footer.less'

const Footer = React.createClass({
  render() {
    return (
      <div className = 'footer'>
        <p className = 'copyRight'>
          Copyright @ 2016 by rccoder
        </p>
        <p className = 'poweredBy'>
          PoweredBy React & material-ui
        </p>
      </div>
    )
  }
})

export default Footer
