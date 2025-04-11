// src/Header.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './components/home.css';
import './components/navbar.css';
import './components/ContactUs';
function Header() {
  return (
    <Navbar className="adi-prd-nav w-100 adi-prj-navbar-main-div" bg=" " expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='adi-prj-navbar-title1'>PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='adi-prj-navbar-a-links'>Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutMe" className='adi-prj-navbar-a-links'>About_Me</Nav.Link>
            <Nav.Link as={Link} to="/Projects" className='adi-prj-navbar-a-links'>Projects</Nav.Link>
            <Nav.Link as={Link} to="/ContactMe" className='adi-prj-navbar-a-links'>Contact_Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
