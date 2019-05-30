import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const ICON_SETTINGS = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
};

class CitiesMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this._city = this.props.city;
    this._zoom = this.props.zoom;
    this._rentalArray = this.props.rentalArray;
  }

  render() {
    return <section id="map" className="cities__map map">
    </section>;
  }

  componentDidMount() {
    const icon = leaflet.icon(ICON_SETTINGS);
    const zoom = this._zoom;
    const map = leaflet.map(`map`, {
      center: this._city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(this._city, zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);
    for (const rentalArray of this._rentalArray) {
      leaflet
        .marker(rentalArray.coordinates, {icon})
        .addTo(map);
    }
  }

}

CitiesMap.propTypes = {
  rentalArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired,
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired
};

export default CitiesMap;
