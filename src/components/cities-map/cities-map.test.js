import React from 'react';
import renderer from 'react-test-renderer';
import CitiesMap from './cities-map.jsx';

const MOCK_RENTAL = [
  {title: `MOCK title 1`, image: `mock-image.jpg`, price: 0, type: `Apartment`, rating: 0, isPremium: true, isBookmark: true, coordinates: [100.123, 10.123]},
  {title: `MOCK title 2`, image: `mock-image.jpg`, price: 10, type: `Apartment`, rating: 50, isPremium: false, isBookmark: false, coordinates: [0.123, 20.123]},
  {title: `MOCK title 3`, image: `mock-image.jpg`, price: 100, type: `Private room`, rating: 80, isPremium: true, isBookmark: false, coordinates: [0.123, 0.123]},
  {title: `MOCK title 4`, image: `mock-image.jpg`, price: 180, type: `Private room`, rating: 100, isPremium: false, isBookmark: true, coordinates: [10.123, 100.123]},
];

const zoom = 10;
const city = [10.568, 15.485];

it(`CitiesMap correctly renders`, () => {
  const tree = renderer
  .create(<CitiesMap
    rentalArray={MOCK_RENTAL}
    city={city}
    zoom={zoom}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
