import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <li><Link to='/add'>404</Link></li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
