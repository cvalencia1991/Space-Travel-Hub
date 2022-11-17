import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rocket from '../Components/Rocket';
import store from '../Redux/configureStore';

it('renders correctly', () => {
  const rocketComponent = renderer
    .create(
      <Provider store={store}>
        <Rocket
          key="1"
          id="1"
          rocketName="Test Rocket"
          description="Test description"
          flickrImages="https://imgur.com/DaCfMsj.jpg"
          reserved="false"
        />

      </Provider>,
    )
    .toJSON();
  expect(rocketComponent).toMatchSnapshot();
});
