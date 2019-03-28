import React, { Component } from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Main from './../Main'
import About from './../About'
import Topic from './../Topic'
import Info from './Info'
import NoMatch from './NoMatch'

export default class Router extends Component {
  render() {
    return (
    <HashRouter>
      <Home>
        <Switch>
        <Route path="/home" render = {() => 
          <Main>
            <div>this is a sub children
              <Route path="/home/a" component={About}></Route>
              <Route path="/home/main/:id" component={Info}></Route>
            </div>
          </Main>
  }></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/topics" component={Topic}></Route>
        <Route component={NoMatch}></Route>
        </Switch>
      </Home>
    </HashRouter>
    )
  }
}
