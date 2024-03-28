import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <Navbar className='navbar' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className='nav-text nav-border' href="/">King Games</Navbar.Brand>
        <Navbar.Toggle style={{ color: 'red' }} className='nav-text' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='nav-text' href="/">Home</Nav.Link>
            <Nav.Link className='nav-text' href="/ttt">TTT</Nav.Link>
            <Nav.Link className='nav-text' href='/ml'>Mad Libs</Nav.Link>
            <Nav.Link className='nav-text' href='/wordle'>Wordle</Nav.Link>
            <Nav.Link className='nav-text' href='/WWW'>WWW</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar