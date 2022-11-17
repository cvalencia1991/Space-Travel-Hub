import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Navbar from '../Components/Navbar';
import store from '../Redux/configureStore';

it('renders correctly', () => {
  const navbar = renderer
    .create(<Provider store={store}><Router><Navbar /></Router></Provider>)
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
