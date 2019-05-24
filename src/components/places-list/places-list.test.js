import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from '../places-list/places-list.jsx';

const MOCK_RENTAL = [
  {title: `MOCK title 1`, image: `mock-image.jpg`, price: 0, type: `Apartment`, rating: 0, isPremium: true, isBookmark: true},
  {title: `MOCK title 2`, image: `mock-image.jpg`, price: 10, type: `Apartment`, rating: 50, isPremium: false, isBookmark: false},
  {title: `MOCK title 3`, image: `mock-image.jpg`, price: 100, type: `Private room`, rating: 80, isPremium: true, isBookmark: false},
  {title: `MOCK title 4`, image: `mock-image.jpg`, price: 180, type: `Private room`, rating: 100, isPremium: false, isBookmark: true},
];

it(`PlacesList correctly renders`, () => {
  const tree = renderer
  .create(<PlacesList
    rentalArray = {MOCK_RENTAL}
    handleImageClick={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
