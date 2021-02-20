import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import NavBar from "./components/NavBar.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Resources from './pages/Resources';
import SubmitReview from './pages/SubmitReview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route component={LandingPage} exact path="/" />
            <Route component={About} path="/about" />
            <Route component={Resources} path="/resources"/>
            <Route component={SubmitReview} path="/submitreview"/>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
