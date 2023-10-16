import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';

export default function MyNavbar() {
  return ( 
    <>
    <Navbar bg="dark" data-bs-theme="dark" expand="lg"> 
      <Container>
        <Navbar.Brand href="">Zeina A</Navbar.Brand>
        <Nav className="me-auto">
          <LinkContainer to=""><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/experience"><Nav.Link>Experience</Nav.Link></LinkContainer>
          <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}
