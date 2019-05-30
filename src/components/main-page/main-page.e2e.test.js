import React from 'react';
import Enzyme, {mount} from 'enzyme';
import leaflet from 'leaflet';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from '../main-page/main-page.jsx';

const MOCK_RENTAL = [
  {title: `MOCK title 1`, image: `mock-image.jpg`, price: 0, type: `Apartment`, rating: 0, isPremium: true, isBookmark: true, coordinates: [100.123, 10.123]},
  {title: `MOCK title 2`, image: `mock-image.jpg`, price: 10, type: `Apartment`, rating: 50, isPremium: false, isBookmark: false, coordinates: [0.123, 20.123]},
  {title: `MOCK title 3`, image: `mock-image.jpg`, price: 100, type: `Private room`, rating: 80, isPremium: true, isBookmark: false, coordinates: [0.123, 0.123]},
  {title: `MOCK title 4`, image: `mock-image.jpg`, price: 180, type: `Private room`, rating: 100, isPremium: false, isBookmark: true, coordinates: [10.123, 100.123]},
];

const zoom = 10;
const city = [10.568, 15.485];

Enzyme.configure({adapter: new Adapter()});

it(`Click on start game button correctly work`, () => {
  const onClick = jest.fn();
  const helloScreen = mount(<MainPage
    rentalArray = {MOCK_RENTAL}
    handleImageClick={onClick}
    city={city}
    zoom={zoom}
    leaflet={leaflet}
  />);

  const startButton = helloScreen.find(`h2.place-card__name a`).first();
  startButton.simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
});
