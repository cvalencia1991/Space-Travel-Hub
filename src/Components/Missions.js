/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, Missionstatus } from '../Redux/Missions/Missionslice';

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
    dispatch(Missionstatus(id));
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
            <th>status</th>
            <th><Button onClick={() => joinMission(mission.id)}>Join Mission</Button></th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
