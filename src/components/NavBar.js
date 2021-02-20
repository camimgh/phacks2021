import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">aligned</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
                <Nav.Link href="/submitreview">Write a Review</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBar;