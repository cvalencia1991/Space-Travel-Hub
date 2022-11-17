import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
<<<<<<<<< Temporary merge branch 1
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
          <ListGroup className="mt-4">
            { reserved.map((rocket) => (
              <ListGroup.Item className="p-4" key={rocket.id}>{ rocket.rocket_name }</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
=========
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Myprofile() {
  const missions = useSelector((state) => state.missions);
  const Missionsdeploy = missions.filter((mission) => mission.reserved === true);
  return (
    <Container>
      <Row>
        <Col>
          <h2>My Missions</h2>
          <ListGroup className="mt-4">
            {Missionsdeploy.map((mission) => (
              <ListGroupItem className="p-4" key={mission.id}>
                {mission.mission_name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col>My Rockets</Col>
>>>>>>>>> Temporary merge branch 2
      </Row>
    </Container>
  );
}
