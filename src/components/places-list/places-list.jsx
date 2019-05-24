import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {rentalArray, handleImageClick} = this.props;
    const rentalElements = rentalArray.map((item, i) => <PlaceCard key={i} item={item} handleImageClick={handleImageClick} handleCardHover={ () => {
      this.setState({activeItem: item});
    }}/>);
    return <div className="cities__places-list places__list tabs__content">
      {rentalElements}
    </div>;
  }
}

export default PlacesList;

PlacesList.propTypes = {
  rentalArray: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
  })).isRequired,
  handleImageClick: PropTypes.func
};
