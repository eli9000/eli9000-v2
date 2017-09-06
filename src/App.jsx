import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">eli9000.com</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">About me</NavItem>
              <NavItem eventKey={2} href="#">Projects</NavItem>
              <NavDropdown eventKey={3} title="Peep the resume" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Download PDF</MenuItem>
                <MenuItem eventKey={3.2}>Download Word doc</MenuItem>
                <MenuItem eventKey={3.3}>Resume in JSON format</MenuItem>
                <MenuItem eventKey={3.4}>View my resume slideshow!</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.5}>Or just view on site</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#"><i className="fa fa-facebook fa-lg" /></NavItem>
              <NavItem eventKey={2} href="#"><i className="fa fa-twitter fa-lg" /></NavItem>
              <NavItem eventKey={3} href="#"><i className="fa fa-linkedin fa-lg" /></NavItem>
              <NavItem eventKey={4} href="#"><i className="fa fa-github fa-lg" /></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;