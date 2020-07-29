import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { AppContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";
import { Auth } from "aws-amplify";
import "./App.css";
import Routes from "./Routes";

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [obj, userHasAuthenticated] = useState({isAuthenticated: false, email: ''});
  
  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      const userAttributes = await Auth.currentAuthenticatedUser()
      userHasAuthenticated({isAuthenticated: true, email: userAttributes.attributes.email});
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated({isAuthenticated: false, email: ''});

  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">BGC Toys</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                {obj.isAuthenticated ? (
                  <>
                    <LinkContainer to="/settings">
                      <NavItem>Configurações</NavItem>
                    </LinkContainer>
                    <NavItem onClick={handleLogout}>Sair</NavItem>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/signup">
                      <NavItem>Cadastrar</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Entrar</NavItem>
                    </LinkContainer>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider
          value={{ obj, userHasAuthenticated }}
        >
          <Routes />
        </AppContext.Provider> 
      </div>
    )
  );
}

export default App;