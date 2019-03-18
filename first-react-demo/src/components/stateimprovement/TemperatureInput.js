import React, { Component } from 'react'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { 
    scaleNames: {
      c: 'Celsius',
      f: 'Fahrenheit'
    }}
  }
  handleChange(e) {
    const _obj = {'scale': e.target.name, 'value': e.target.value}
    this.props.onTemperatureChange(_obj)
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {this.state.scaleNames[scale]}</legend>
        <input name={scale} value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}
