import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from '../place-card/place-card.jsx';

const MOCK_RENTAL_IS_PREMIUM = {title: `MOCK title 1`, image: `mock-image.jpg`, price: 0, type: `Apartment`, rating: 0, isPremium: true, isBookmark: true};
const MOCK_RENTAL_IS_NOT_PREMIUM = {title: `MOCK title 2`, image: `mock-image.jpg`, price: 10, type: `Apartment`, rating: 50, isPremium: false, isBookmark: false};

it(`PlaceCard with premium correctly renders`, () => {
  const tree = renderer
  .create(<PlaceCard
    item = {MOCK_RENTAL_IS_PREMIUM}
    handleImageClick={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`PlaceCard without premium correctly renders`, () => {
  const tree = renderer
  .create(<PlaceCard
    item = {MOCK_RENTAL_IS_NOT_PREMIUM}
    handleImageClick={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
