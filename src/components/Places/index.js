import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../PlaceCard';
import SectionTitle from '../SectionTitle';
import './places.scss';

const Places = (props) => {
  const { places, getPlacesStart, categories } = props;

  const [isAllSelected, setAllTab] = useState(true);
  const [isHotelSelected, setHotelTab] = useState(false);
  const [isRestaurantSelected, setRestaurantTab] = useState(false);
  const [isCafeSelected, setCafeTab] = useState(false);
  const [isClubSelected, setClubSelected] = useState(false);
  const [isGuestSelected, setGuestSelected] = useState(false);
  const [isHostelSelected, setHostelSelected] = useState(false);

  const switchClassesOfTabs = (a, b, c, d, e, f, g) => {
    a(true);
    b(false);
    c(false);
    d(false);
    e(false);
    f(false);
    g(false);
  };
  const getCategoryId = (name) => {
    const category = categories.find(categoryOf => (categoryOf.name === name ? categoryOf._id : ''));
    const idOfCategory = category._id;
    getPlacesStart(`category=${idOfCategory}`);
  };
  useEffect(() => {
    getPlacesStart('isOpen=true&_limit=8');
  }, [getPlacesStart]);
  return (
    <section className="section-places">
      <div className="container">
        <SectionTitle
          name="самые популярные места"
          text="по Кыргызстану, где вы можете провести приятно время. Все это можете найти у нас в каталоге"
        />
        <div className="places-tags-wrapper">
          <button
            type="button"
            className={isAllSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            id="all"
            onClick={() => getPlacesStart('isOpen=true&_limit=8')
            + switchClassesOfTabs(setAllTab, setHotelTab, setCafeTab, setRestaurantTab, setClubSelected, setGuestSelected, setHostelSelected)}
          >
            Все
          </button>
          <button
            type="button"
            className={isHotelSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            onClick={() => getCategoryId('hotel')
            + switchClassesOfTabs(setHotelTab, setAllTab, setCafeTab, setRestaurantTab, setClubSelected, setGuestSelected, setHostelSelected)}
          >
            Отели
          </button>
          <button
            type="button"
            className={isRestaurantSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            onClick={() => getCategoryId('restaurant')
            + switchClassesOfTabs(setRestaurantTab, setAllTab, setCafeTab, setHotelTab, setClubSelected, setGuestSelected, setHostelSelected)}
          >
            Рестораны
          </button>
          <button
            type="button"
            className={isCafeSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            onClick={() => getCategoryId('cafe')
            + switchClassesOfTabs(setCafeTab, setAllTab, setHotelTab, setRestaurantTab, setClubSelected, setGuestSelected, setHostelSelected)}
          >
            Кафе
          </button>
          <button
            type="button"
            className={isClubSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            onClick={() => getCategoryId('night club')
            + switchClassesOfTabs(setClubSelected, setCafeTab, setAllTab, setHotelTab, setRestaurantTab, setGuestSelected, setHostelSelected)}
          >
            Ночные клубы
          </button>
          <button
            type="button"
            className={isGuestSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            onClick={() => getCategoryId('guest house')
            + switchClassesOfTabs(setGuestSelected, setClubSelected, setCafeTab, setAllTab, setHotelTab, setRestaurantTab, setHostelSelected)}
          >
            Гостевые дома
          </button>
          <button
            type="button"
            className={isHostelSelected ? 'places__tag places__tag_selected' : 'places__tag'}
            onClick={() => getCategoryId('hostel')
            + switchClassesOfTabs(setHostelSelected, setGuestSelected, setClubSelected, setCafeTab, setAllTab, setHotelTab, setRestaurantTab)}
          >
            Хостел
          </button>
        </div>
        <div
          className="place-cards-wrapper"
        >
          {places.places.slice(0, 8).map(placeObj => (
            <PlaceCard
              key={placeObj._id}
              place={placeObj}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Places.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  getPlacesStart: PropTypes.func.isRequired,
  places: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default Places;
