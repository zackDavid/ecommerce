import {useEffect, useState} from 'react';
import  {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = () => {

  const [product, setProducts] = useState([]);

    const {id: productId} = useParams();
    useEffect(() => {
      const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${productId}`);
        setProducts(data);
      }

      fetchProduct();
    }, [productId]);

    return (
      <>
      <Link className='btn btn-light my-3' to='/'>Regresar</Link>
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroupItem>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              </ListGroupItem>
              <ListGroupItem>Precio: ${product.price}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Precio:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                    </ListGroup.Item>                    
                    <ListGroup.Item>
                    <Row>
                      <Col>Estatus:</Col>
                      <Col>
                        <strong>${product.countInStock > 0 ? 'En Stock' : 'Fuera de Stock'}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Agregar al Carrito
                    </Button>
                  </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    );
  };

export default ProductScreen;