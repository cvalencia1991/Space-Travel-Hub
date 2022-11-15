import { configureStore } from '@reduxjs/toolkit';
import rocketsReducers from './Rockets/rocketsSlice';

const reducer = {
  rockets: rocketsReducers,
};

const store = configureStore({ reducer });

export default store;
