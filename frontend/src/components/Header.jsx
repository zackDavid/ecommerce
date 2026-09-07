import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../assets/logo.png'


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand>
                <img src={logo} alt="Logo Ecommerce" />
                    Ecommerce</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <FaShoppingCart /> Carrito
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>
                            <FaUser /> Iniciar Sesión
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>  
    </header>
  )



}

export default Header