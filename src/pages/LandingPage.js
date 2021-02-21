import React, { Component } from "react";
import './LandingPage.css';
import logo from '../aligned.jpg'
import SearchBar from "../components/SearchBar";


class LandingPage extends Component {
    render() {
        return (
            <div id="landingpage">
                <img alt="aligned-logo" src={logo} height="200px" width="200px" />
                <h1 id="title"><b>aligned.space</b></h1>
                <SearchBar/>
            </div>
        )
    }
}

export default LandingPage;