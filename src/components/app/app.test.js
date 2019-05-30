import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';
import leafletMOCK from '../../mocks/leaflet.js';

const zoom = 10;
const city = [10.568, 15.485];

it(`App correctly renders`, () => {
  const tree = renderer
  .create(<App city={city} zoom={zoom} leaflet={leafletMOCK} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
