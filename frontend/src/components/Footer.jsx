import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row className='text-center'>
                <Col className='py-3'>
                   <p>Copyright &copy; {currentYear} Ecommerce</p>
                </Col>
            </Row>
        </Container>
    </footer>
    
  )
}

export default Footer