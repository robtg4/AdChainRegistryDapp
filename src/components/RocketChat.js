import React, { Component } from 'react'

class RocketChat extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (
      <div>
        <div id='rocket'>
          <iframe src='http://chat.adchain.com' height='500' style={{height: '100vh', width: '100%'}} />
        </div>
      </div>
    )
  }
}

export default RocketChat
