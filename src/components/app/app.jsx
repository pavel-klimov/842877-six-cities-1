import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';
import offers from '../../mocks/offers.js';
const city = [52.38333, 4.9];
const zoom = 12;

const App = (props) => {
  const {leaflet} = props;
  return <MainPage rentalArray={offers} city={city} zoom={zoom} leaflet={leaflet}/>;
};

App.propTypes = {
  leaflet: PropTypes.object
};

export default App;
