import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default class App extends Component {

  state ={
    progress:0
  }
  setProgress =(progress) => {
    this.setState({progress : progress})
  }

  render() {
  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Navbar />
        <Switch>
          <Route exact path="/"> <News setProgress={this.setProgress} key="a1" pageSize="5" country="us" category="general" /> </Route>
          <Route exact path="/general"> <News setProgress={this.setProgress} key="ge" pageSize="5" country="us" category="general" /> </Route>
          <Route exact path="/Space"> <News setProgress={this.setProgress} key="space" pageSize="5" country="us" category="Space" /> </Route>
          <Route exact path="/Science"> <News setProgress={this.setProgress} key="science" pageSize="5" country="us" category="Science" /> </Route>
          <Route exact path="/Entertainment"> <News setProgress={this.setProgress} key="entertainment" pageSize="5" country="us" category="Entertainment" /> </Route>
          <Route exact path="/Politics"> <News setProgress={this.setProgress} key="politics" pageSize="5" country="us" category="Politics" /> </Route>
          <Route exact path="/Sports"> <News setProgress={this.setProgress} key="sports" pageSize="5" country="us" category="Sports" /> </Route>
        </Switch>
      </Router>
    </div>
  )
}
}
