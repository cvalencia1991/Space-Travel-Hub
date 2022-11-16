/* eslint-disable react/prop-types */
import { React } from 'react';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { reserveRocket, cancelReservation } from '../Redux/Rockets/rocketsSlice';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    id, rocketName, description, flickrImages, reserved,
  } = props;

  const handleReserve = () => {
    dispatch(reserveRocket(id));
  };

  const handleCancel = () => {
    dispatch(cancelReservation(id));
  };

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
            { reserved
              ? <Button variant="primary" onClick={handleCancel}>Cancel Reservation</Button>
              : <Button variant="primary" onClick={handleReserve}>Reserve Rocket</Button>}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Rocket;
