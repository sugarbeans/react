import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div>
        this is Info{this.props.match.params.id}
        <br />
      
      </div>
    )
  }
}
