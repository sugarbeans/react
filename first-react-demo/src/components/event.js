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
        <p onClick={this.props.changeParent}>{this.props.children?this.props.children:'点我试试'}</p>
        <p>______________________________________</p>
        <input type="text" onChange={this.props.changes} value={this.props.name}/>
        <button onClick={(e) => this.changeName(this.state.name, e)}>{this.state.name}</button>
      </div>
     
    )
  }
}
export default Event