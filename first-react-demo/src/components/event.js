import React, {Component} from 'react'
class Event extends Component {
  constructor(props){
    super(props)
    this.state = {'name': props.name}
  }
  changeName(name, e){
    e.preventDefault()
    alert(name)
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={(e) => this.changeName(this.state.name, e)}>click</button>
      </div>
     
    )
  }
}
export default Event