import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

class Header extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Link to="/">
            <Navbar.Brand href="">Movie Now</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{ marginLeft: '80%' }}>
              <Nav>Welcome, Daniel! </Nav>
            </Nav>

            <Nav>
              <Button variant="outline-danger">Sign Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
