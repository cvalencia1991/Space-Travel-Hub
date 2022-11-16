import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
          <ListGroup className="pt-3">
            {Missionsdeploy.map((mission) => (
              <ListGroupItem key={mission.id}>
                {mission.mission_name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col>My Rockets</Col>
      </Row>
    </Container>
  );
}
