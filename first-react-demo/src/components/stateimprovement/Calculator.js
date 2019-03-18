import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {type: ['c', 'f'], temperature: 20}
  }
  handleChange(obj) {
    console.log(obj,22222)
    const _temperature = obj.scale === "c" ? obj.value : this.toCelsius(obj.value) 
    this.setState({temperature: _temperature})
  }
  toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 / 9
  }
  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
  }
  render() {
    const _temper = this.toFahrenheit(this.state.temperature)
    return (
      <div>
        <TemperatureInput scale = {this.state.type[0]} temperature={this.state.temperature} onTemperatureChange={this.handleChange}></TemperatureInput>
        <TemperatureInput scale = {this.state.type[1]} temperature={_temper} onTemperatureChange={this.handleChange}></TemperatureInput>
      </div>
    )
  }
}
