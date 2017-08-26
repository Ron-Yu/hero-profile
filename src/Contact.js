import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>this is contact</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Contact
