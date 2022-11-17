/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { getMissions, MissionLeave, MissionJoin } from '../Redux/Missions/Missionslice';

let didInit = false;

export default function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      dispatch(getMissions());
    }
  }, []);
  const missions = useSelector((state) => state.missions);

  const joinMission = (id) => {
    dispatch(MissionJoin(id));
  };

  const LeaveMission = (id) => {
    dispatch(MissionLeave(id));
  };
  return (
    <table className="table table-bordered table-striped m-5 w-auto p-3">
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th className="stylesjoin"> </th>
        </tr>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <th>{mission.mission_name}</th>
            <th>{mission.description}</th>
            <th>
              {mission.reserved ? <Badge className="mt-5" bg="info">Active Member</Badge>
                : <Badge className="mt-5" bg="secondary">NOT A MEMBER</Badge> }
            </th>
            <th>
              {mission.reserved
                ? <Button className="stylemissionsbutton" variant="outline-danger" onClick={() => LeaveMission(mission.id)}>Leave Mission</Button>
                : <Button className="stylemissionsbutton" Button variant="outline-secondary" onClick={() => joinMission(mission.id)}>Join Mission</Button> }
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
