import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../Components/Rockets';
import store from '../Redux/configureStore';

it('renders correctly', () => {
  const rockets = renderer
    .create(<Provider store={store}><Rockets /></Provider>)
    .toJSON();
  expect(rockets).toMatchSnapshot();
});
