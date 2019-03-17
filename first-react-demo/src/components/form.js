import React, {Component} from 'react'
class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '', isGoing: true, numberOfGuests: 2}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const _target = event.target
    const value = _target.type === "checkbox" ? _target.checked : _target.value
    const name = _target.name
    this.setState({[name]: value})
  }
  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="value" value={this.state.value}  onChange={this.handleChange}/>
        <label>isGoing:<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChange}/></label>
        <label>number of guests: <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleChange}/></label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}
export default Form