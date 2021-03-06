import React, { Component } from "react";
import './Resources.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import HealthForm from '../align_new_health_form.jpg';
import ResourceForm from '../align_resources.jpg';


class Resources extends Component {
    render() {
        return (
            <div id="resources">
                <h1 className="headers">Resources</h1>
                <Form>
                <div className="asking-form">
                    <FormControl type="text" placeholder="Ask a question" className="mr-sm-2"/>
                    <Button variant="outline-success">Submit</Button>
                </div>
                </Form>
                <Form>
                <div className="asking-form">
                    <FormControl type="text" placeholder="Find answers to previous questions" className="mr-sm-2"/>
                    <Button href="/search" variant="outline-success">Submit</Button>
                </div>
                </Form>
                <h3 className="headers">Patient Descriptor Worksheet</h3>
                <iframe src={HealthForm} width="300px" height="400px" />
                <h3 className="headers">Nationwide Queer Health Resources</h3>
                <iframe src={ResourceForm} width="300px" height="400px" />
            </div>
        )
    }
}

export default Resources;