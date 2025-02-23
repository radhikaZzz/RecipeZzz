import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import { getData, storeData } from '../storage';
import './NavigationBar.css';

const NavigationBar = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = getData('users');
    if(storedUsers) {
      const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
      if (loggedInUser) {
        setUsername(loggedInUser.username);
      }
    }
  }, []);

  const handleLogout = () => {
    const storedUsers = getData('users');
    if (storedUsers) {
      const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
      if (loggedInUser) {
        loggedInUser.isLoggedIn = false;
        storeData('users', storedUsers);
        navigate('/');
      }
    }
  };

  return (
<     Navbar className="custom-navbar">
        <Container>
        <Navbar.Brand as={Link} to="/">
          Recipe Sharing Platform
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes">
              Recipes
            </Nav.Link>
            {username ? (
              <>
               <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link disabled>Welcome, {username}!</Nav.Link>
                <Button variant="link" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;