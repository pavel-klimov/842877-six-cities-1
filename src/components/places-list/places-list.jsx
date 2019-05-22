import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = (props) => {
  const {rentalArray, handleImageClick} = props;
  const rentalElements = rentalArray.map((item, i) => <PlaceCard key={i} item={item} handleImageClick={handleImageClick}/>);
  return <div className="cities__places-list places__list tabs__content">
    {rentalElements}
  </div>;
};

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
/*
const rentalElements = rentalArray.map((item, i) => {
  const premium = (item.isPremium) ? <div className="place-card__mark">
    <span>Premium</span>
  </div> : null;
  const bookmarkClass = (item.isBookmark) ? `place-card__bookmark-button button place-card__bookmark-button--active` : `place-card__bookmark-button button`;
  return <article key={i} className="cities__place-card place-card">
    {premium}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={item.image} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{item.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={bookmarkClass} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${item.rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" onClick={onClick}>{item.title}</a>
      </h2>
      <p className="place-card__type">{item.type}</p>
    </div>
  </article>;
});
*/
