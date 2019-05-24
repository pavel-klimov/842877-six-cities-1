import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesList from './places-list.jsx';

const MOCK_RENTAL = [
  {title: `MOCK title 1`, image: `mock-image.jpg`, price: 0, type: `Apartment`, rating: 0, isPremium: true, isBookmark: true},
  {title: `MOCK title 2`, image: `mock-image.jpg`, price: 10, type: `Apartment`, rating: 50, isPremium: false, isBookmark: false},
  {title: `MOCK title 3`, image: `mock-image.jpg`, price: 100, type: `Private room`, rating: 80, isPremium: true, isBookmark: false},
  {title: `MOCK title 4`, image: `mock-image.jpg`, price: 180, type: `Private room`, rating: 100, isPremium: false, isBookmark: true},
];

Enzyme.configure({adapter: new Adapter()});

it(`Hover on second card correctly work`, () => {
  const handleCardHover = jest.fn();
  const placesList = mount(<PlacesList
    rentalArray = {MOCK_RENTAL}
    handleCardHover={handleCardHover}
  />);

  const secondCard = placesList.find(`.place-card`).at(1);
  secondCard.simulate(`mouseenter`);

  expect(placesList.state(`activeItem`)).toEqual(MOCK_RENTAL[1]);
});
