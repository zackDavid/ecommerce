import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header'


const App = () => {
  return (
  <>
  <Header />
  <main className='py-3'>
    <Container>

    <h1>Bienvenido al ecommerce</h1>
    </Container>
  
  </main>
  </>
  )
};

export default App