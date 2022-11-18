import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Myprofile from '../Components/Myprofile';
import store from '../Redux/configureStore';

it('renders correctly', () => {
  const myProfile = renderer
    .create(<Provider store={store}><Myprofile /></Provider>)
    .toJSON();
  expect(myProfile).toMatchSnapshot();
});
