import React, { useEffect } from 'react';
import moment from 'moment';
import SectionTitle from '../SectionTitle';
import './upcommingEvents.scss';

const UpcommingEvents = (props) => {
  const { currentEvents, getEventsStart } = props;
  useEffect(() => {
    getEventsStart('isOpen=true&_sort=dateTimeStart&_limit=2');
  }, [getEventsStart]);
  return (
    <section className="upcomming-events">
      <div className="container">
        <SectionTitle
          name="ближайшие события"
          text="Самые интересные события этого месяца в Кыргызстане."
        />
        <div className="upcomming-events-wrapper">
          {currentEvents.map(currentEvent => (
            <div className="event-card" key={currentEvent._id}>
              <img className="event-card-image" src={currentEvent.mainImage} alt="event" />
              <div className="event-card-info">
                <h5 className="event-card-info__name">{currentEvent.title}</h5>
                <div className="event-card-info-block">
                  <span className="info-block__location">{currentEvent.eventTypes.name}</span>
                  <span className="info-block__price">
                    {currentEvent.price}
                    $
                  </span>
                  <span className="info-block__open">{currentEvent.isOpen}</span>
                </div>
              </div>
              <div className="event-card-rating">{currentEvent.rating}</div>
              <table className="event-card-table">
                <tbody>
                  <tr>
                    <th>Адрес</th>
                    <th>От</th>
                    <th>До</th>
                  </tr>
                  <tr>
                    <td>{currentEvent.address}</td>
                    <td>
                      {moment(currentEvent.dateTimeStart).format('DD MMM YYYY')}
                      <br />
                      {moment(currentEvent.dateTimeStart).format('HH:mm')}
                    </td>
                    <td>
                      {moment(currentEvent.dateTimeEnd).format('DD MMM YYYY')}
                      <br />
                      {moment(currentEvent.dateTimeEnd).format('HH:mm')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcommingEvents;
