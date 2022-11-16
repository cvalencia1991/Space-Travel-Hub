/* eslint-disable react/prop-types */
import { React } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardImg } from 'react-bootstrap';

const Rocket = (props) => {
  const {
    rocketName, description, flickrImages,
  } = props;

  return (
    <Card className="border-0 mb-4" style={{ width: '100%' }}>
      <Row>
        <Col xs="3">
          <CardImg src={flickrImages[0]} style={{ borderRadius: '0' }} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{rocketName}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">Reserve Rocket</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Rocket;
