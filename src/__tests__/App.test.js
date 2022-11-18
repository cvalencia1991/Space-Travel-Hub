import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../Redux/configureStore';

it('renders correctly', () => {
  const app = renderer
    .create(<Provider store={store}><App /></Provider>)
    .toJSON();
  expect(app).toMatchSnapshot();
});
