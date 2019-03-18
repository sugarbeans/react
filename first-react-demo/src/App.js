import React, {Component} from 'react';
import Event from './components/event'
import Form from './components/form'
import './App.css';
import Post from './components/Post'
import PostForm from './components/PostForm'
import {Provider} from 'react-redux'
import {store} from './store'
import StateImprovement from './components/stateImprovement'

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: 'ectrip',
      flag: true,
      numbers : [1,2,3,4,5],
      param: 'sugarbeans'
    }
  }
  changeFlag = () =>{
    alert(1111)
    this.setState((prevState) => {
      return {flag : !prevState.flag}
    }) 
  }
  changes = (event) => {
    this.setState({param: event.target.value})
  } 
  render() {
    let ulShow = null
    if(this.state.flag) {
      ulShow = (<ul><ShowList numbers={this.state.numbers}/></ul>)
    }
    return (
      <Provider store={store}>
        <div>
          <Welcome name={this.state.param} />
          <Clock />
          <Event name={this.state.param} changes={this.changes.bind(this)}>event</Event>
          <Event changeParent={this.changeFlag.bind(this, true)}/>
          <WarningBanner warn = {this.state.flag}/>
          <button onClick={this.changeFlag}>{this.state.flag?'show':'hide'}</button>
          {ulShow}
          <Form />
          <PostForm />
          <Post />
          <StateImprovement></StateImprovement>
      </div>
      </Provider>
    )
  }
}

class ListItem extends Component {
  render() {
    return (
      <li>{this.props.value}</li>
    )
  }
}
class ShowList extends Component {
  render() {
    return (
      this.props.numbers.map((number,index) => <ListItem key={index} value={number}/>)
    )
  }
}
class WarningBanner extends Component {
  render() {
    if(this.props.warn) {
      return false
    }
    return (
      <div>www.ectrip.com</div>
    )
  }
}
function Welcome(obj) {
  return (<h1>{obj.name}</h1>)
}
const STR = '被调用，this指向：'
class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {date: new Date(), timeNum: 1000, isToggleOn: true}
    this.handler = this.handler.bind(this)
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick()
    , this.state.timeNum)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  tick() {
    this.setState({date: new Date()})
  }
  handler() {
    this.setState(prevState => {
      return {isToggleOn : !prevState.isToggleOn}
    }
    )
    console.log(`handler ${STR}`,this);
  }
  handlerCopy = ()=>{
    console.log(`handlerCopy ${STR}`,this);
  }
  render() {
    return (
      <div>
        <h3>It's {this.state.date.toLocaleTimeString()}</h3>
        <label htmlFor = 'btn'>单击打印函数handler中this的指向</label>
        <input id = "btn" type="button" value = '单击' onClick = {this.handler}/>
        <input id = "btnCopy" type="button" value = '单击' onClick = {this.handlerCopy}/>
        <div>{this.state.isToggleOn?'ON':'OFF'}</div>
      </div>
    )
  }
}
//setInterval(clock,1000)
export default App