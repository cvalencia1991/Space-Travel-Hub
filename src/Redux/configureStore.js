import { configureStore } from '@reduxjs/toolkit';
import rocketsReducers from './Rockets/rocketsSlice';
import MissionsReducers from './Missions/Missionslice';

const reducer = {
  rockets: rocketsReducers,
  missions: MissionsReducers,
};

const store = configureStore({ reducer });

export default store;
