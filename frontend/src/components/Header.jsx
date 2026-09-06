import React from 'react'
import {navbar, Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'



const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart"><FaShoppingCart /> Carrito</Nav.Link>
                        <Nav.Link href="/login"><FaUser /> Iniciar Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </header>
  )



}

export default Header