import React, { Component } from 'react'

export default class BoilingVerdict extends Component {
  render() {
    if(this.props.celsius >= 100) {
      return <p>open</p>
    }
    return (
      <p>close</p>
    )
  }
}
