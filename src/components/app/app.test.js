import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';

it(`App correctly renders`, () => {
  const tree = renderer
  .create(<App />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
