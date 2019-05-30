import React from 'react';
import PropTypes from 'prop-types';

const ICON_SETTINGS = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
};

class CitiesMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this._map = React.createRef();
  }

  render() {
    return <section id="map" className="cities__map map" ref={this._map}>
    </section>;
  }

  componentDidMount() {
    const {rentalArray, city, zoom, leaflet} = this.props;
    const icon = leaflet.icon(ICON_SETTINGS);
    const map = leaflet.map(this._map.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);
    for (const rentalItem of rentalArray) {
      leaflet
        .marker(rentalItem.coordinates, {icon})
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
  zoom: PropTypes.number.isRequired,
  leaflet: PropTypes.object
};

export default CitiesMap;
