import React, { useEffect } from 'react';
import SectionTitle from '../SectionTitle';

import './discover.scss';

const Discover = (props) => {
  const { topDestinations, getTopDestinationsStart } = props;
  useEffect(() => {
    getTopDestinationsStart();
  }, [getTopDestinationsStart]);
  return (
    <section className="section-discover">
      <div className="container">
        <SectionTitle
          name="откройте для себя места своей мечты"
          text="Уникальное кочевое наследие и захватывающая история Великого Шелкового пути привлекают как искателей приключений, так и любителей культуры"
        />
        <div className="discover-cards-wrapper">
          {topDestinations.map(topDestination => (
            <div
              key={topDestination._id}
              className="discover-card"
            >
              <img
                className="discover-card__image"
                src={topDestination.mainImage}
                alt="logo"
              />
              <div className="discover-card__info-text">
                <div className="discover-card__info-place">
                  <span
                    className="discover-card__info-place-name"
                  >
                    {topDestination.cities.name}
                  </span>
                </div>
                <div className="discover-card__info-destination">
                  <span
                    className="discover-card__info-destination-name"
                  >
                    {`${topDestination.countDestinations} `}
                     Мест
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Discover;
