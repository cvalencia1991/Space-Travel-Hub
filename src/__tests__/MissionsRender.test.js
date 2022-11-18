import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../Components/Missions';
import store from '../Redux/configureStore';

it('renders correctly', () => {
  const missions = renderer
    .create(<Provider store={store}><Missions /></Provider>)
    .toJSON();
  expect(missions).toMatchSnapshot();
});
