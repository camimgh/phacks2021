
import React, { Component } from "react";
import './About.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar';


class About extends Component {
    render() {
        return (
            <div id="about">
                <h1>aligned.space</h1>
                <Form>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        )
    }
}

export default About;