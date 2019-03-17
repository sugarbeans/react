import React, {Component} from 'react'
class StateImprovement extends Component {
  render() {
    return (
      <Calculator></Calculator>
    )
  }
}
class BoilingVerdict extends Component{
  render() {
    if (this.props.celsius >= 100) {
      return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
    }
  }
class Calculator extends Component {
  constructor(){
    super()
    this.state={celsius: 100}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({'celsius': event.target.value})
  }
  render() {
    const temperature = this.state.celsius
    return (
      <fieldset>
        <legend>输入一个数字</legend>
        <input value={temperature} onChange={this.handleChange}/>
        <BoilingVerdict celsius={temperature} />
      </fieldset>
      
    )
  }
}
export default StateImprovement  