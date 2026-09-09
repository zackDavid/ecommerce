import  {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';


const ProductScreen = () => {

    const { id: productId } = useParams();
    const product = products.find((p) => p._id === productId);
    console.log(product);

  return (
    <>
    <Link className='btn btn-light my-3' to='/'>Regresar</Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
      
        <Col md={4}>
            <ListGroup.Item>
              <h3>{product.name}</h3>
          </ListGroup.Item>
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroupItem>
        </Col>

      <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
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