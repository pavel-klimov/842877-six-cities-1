import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = (props) => {
  const {item, handleImageClick, handleCardHover} = props;
  const premium = (item.isPremium) ? <div className="place-card__mark">
    <span>Premium</span>
  </div> : null;
  const bookmarkClass = (item.isBookmark) ? `place-card__bookmark-button button place-card__bookmark-button--active` : `place-card__bookmark-button button`;
  return <article className="cities__place-card place-card" onMouseEnter={handleCardHover}>
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
        <a href="#" onClick={handleImageClick}>{item.title}</a>
      </h2>
      <p className="place-card__type">{item.type}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
  }).isRequired,
  handleImageClick: PropTypes.func,
  handleCardHover: PropTypes.func
};

export default PlaceCard;
