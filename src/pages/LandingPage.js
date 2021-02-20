import React, { Component } from "react";
import './LandingPage.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import SearchBar from "../components/SearchBar";


class LandingPage extends Component {
    render() {
        return (
            <div id="landingpage">
                <h1>aligned.space</h1>
                <SearchBar/>
            </div>
        )
    }
}

export default LandingPage;