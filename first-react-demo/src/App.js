import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() { 
    return (
      <div>
        <h1>hello, world</h1>
        <Welcome name="ectrip" />
        <Clock date = {new Date()}/>
      </div>
    )
  }
}
function Welcome(obj) {
  return (<h1>{obj.name}</h1>)
}
function Clock(obj) {
  return (<h2>It's {obj.date.toLocaleTimeString()}</h2>)
}
export default App