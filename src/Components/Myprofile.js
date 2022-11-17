import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Myprofile() {
  const rockets = useSelector((state) => state.rockets);
  const reserved = rockets.filter((rocket) => rocket.reserved);
  return (
    <Container>
      <Row>
        <Col>My Missions</Col>
        <Col>
          <h2>My Rockets</h2>
          <ListGroup>
            { reserved.map((rocket) => (
              <ListGroup.Item key={rocket.id}>{ rocket.rocket_name }</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
