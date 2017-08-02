import React, { Component } from 'react'

import './MainSidebar.css'

import adchainLogo from './assets/ad_chain_logo_white_text.png'
import metaxLogo from './assets/metax_logo_white_text.png'

class MainSidebar extends Component {
  constructor(props) {
    super()

    this._Link = props.Link
  }

  componentDidMount() {
    /*
    window.$('.ui.sidebar')
    .sidebar({
      dimPage:false
    })
    */
  }

  render () {
    const Link = this._Link

    return (
        <div className='MainSidebar ui sidebar inverted vertical menu visible'>
        <div className='adChainLogo ui image'>
          <a href='/'>
            <img src={adchainLogo} alt='adChain' />
          </a>
        </div>
        <div className='ListTitle ui header'>
          adChain Registry
        </div>
        <div className="SidebarList overflow-y">
          <ul className='ui list'>
            <li className='item'>
              <Link to='/domains' activeClassName='active'>All domains</Link>
            </li>
            <li className='item'>
              <Link to='/domains?approved=true'>Domains in registry</Link>
            </li>
            <li className='item'>
              <Link to='/domains?pending=true'>Domains in application</Link>
            </li>
            <li className='item'>
              <Link to='/domains?in_voting=true'>Domains in voting</Link>
            </li>
            <li className='item'>
              <Link to='/domains?rejected=true'>Rejected domains</Link>
            </li>
            <li className='item ApplyLink'>
              <Link to='/apply'>Apply now</Link>
            </li>
          </ul>
        </div>
        <div className="SidebarFooter">
          <div className='metaxLogo ui image'>
            <a href='https://metax.io' target='_blank' rel='noopener noreferrer'>
              <img src={metaxLogo} alt='MetaX' />
            </a>
          </div>
          <div className='Copyright'>
          <p>© Copyright 2017 MetaXchain, Inc.<br />
          All rights reserved.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MainSidebar