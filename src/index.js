import React from 'react';
import ReactDOM from 'react-dom';
import leaflet from 'leaflet';
import App from './components/app/app.jsx';

const init = () => {
  ReactDOM.render(
      <App leaflet={leaflet}/>,
      document.querySelector(`#root`)
  );
};

init();
