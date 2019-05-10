import React from 'react';

import MainPage from '../main-page/main-page.jsx';

const MOCK_RENTAL = [
  {title: `Beautiful & luxurious apartment at great location`, image: `img/apartment-01.jpg`, price: 120, type: `Apartment`, rating: 93, isPremium: true, isBookmark: false},
  {title: `Wood and stone place`, image: `img/room.jpg`, price: 80, type: `Private room`, rating: 80, isPremium: false, isBookmark: true},
  {title: `Canal View Prinsengracht`, image: `img/apartment-02.jpg`, price: 132, type: `Apartment`, rating: 80, isPremium: false, isBookmark: false},
  {title: `Nice, cozy, warm big bed apartment`, image: `img/apartment-03.jpg`, price: 180, type: `Apartment`, rating: 100, isPremium: true, isBookmark: false},
  {title: `Wood and stone place`, image: `img/room.jpg`, price: 80, type: `Private room`, rating: 80, isPremium: false, isBookmark: false}
];

const App = () => {
  return <MainPage rentalArray = {MOCK_RENTAL} />;
};

export default App;
