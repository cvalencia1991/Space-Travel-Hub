/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { React } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardImg } from 'react-bootstrap';

const Rocket = (props) => {
  const {
    id, rocket_name, description, flickr_images,
  } = props;

  return (
    <Card style={{ width: '100%' }}>
      <Row>
        <Col>
          <CardImg src={flickr_images[0]} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card&aposs content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Rocket;