import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import NavBar from "./components/NavBar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}
export default App;
