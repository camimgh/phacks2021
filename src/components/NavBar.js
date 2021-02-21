import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';
import logo from '../aligned.jpg';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <img alt="aligned-logo" href="/" src={logo} width="36" height="36" clsasName="d-inline=block align-top" />
            {' '}
            <Navbar.Brand href="/">aligned</Navbar.Brand>
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