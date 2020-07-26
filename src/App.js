import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
      <BrowserRouter>
        <Navbar.Header>
          <Navbar.Brand>
            
            <Link to="/">Scratch</Link>
            
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        </BrowserRouter>
        <Navbar.Collapse>
        <BrowserRouter>
          <Nav pullRight>
            
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            
           
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
            
          </Nav>
          </BrowserRouter>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;