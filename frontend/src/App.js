import './App.css';

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
import Todos from './components/Todos/Todos.jsx'

export class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/:id/todos" component={Todos}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
