import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import offers from '../../mocks/offers.js';
const city = [52.38333, 4.9];
const zoom = 12;

const App = () => {
  return <MainPage rentalArray={offers} city={city} zoom={zoom}/>;
};

export default App;
