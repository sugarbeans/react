import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Main extends Component {
  render() {
    return (
      <div>
        Main组件
        <Link to="/home/a">这是个a链接</Link>
        <Link to="/home/main/456">参数路由</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
