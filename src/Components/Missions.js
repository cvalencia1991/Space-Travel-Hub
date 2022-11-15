import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
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
            <th><Button>Join Mission</Button></th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
