import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

// we use switch if we want react to match
//only one route at the time

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/> 
              <Route path='/post/:post_id' component={Post}/> 
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
