import SectionTitle from '../SectionTitle';
import {useEffect} from 'react';
import './upcommingEvents.scss'

const UpcommingEvents = (props) => {
  const { currentEvents, getEventsStart } = props;
  useEffect(() => {
    getEventsStart('isOpen=true&_sort=dateTimeStart&_limit=2')
  }, []);
  return (
    <section className="upcomming-events">
    <div className="container">
      <SectionTitle 
        name="Upcomming Events"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasselus aliquam retrum"
      />
      <div className="upcomming-events-wrapper">
      {currentEvents.map(currentEvent=> (
        <div className="event-card" key={currentEvent.id}>
        <img className="event-card-image" src={currentEvent.imageUrl} />
        <div className="event-card-info">
          <h5 className="event-card-info__name">{currentEvent.name}</h5>
          <div className="event-card-info-block">
            <span className="info-block__location">{currentEvent.type}</span>
            <span className="info-block__price">{currentEvent.price}$</span>
            <span className="info-block__open">{currentEvent.isOpen}</span>
          </div>
        </div>
          <div className="event-card-rating">{currentEvent.rating}</div>
          <table className="event-card-table">
          <tbody>
            <tr>
              <th>Address</th>
              <th>From</th>
              <th>To</th>
            </tr>
            <tr><td>{currentEvent.address}</td>
            <td>{currentEvent.dateTimeStart}</td>
            <td>{currentEvent.dateTimeEnd}</td></tr>
            </tbody>
          </table>
        </div>
      ))}
      </div>
    </div>
    </section>
  )
}

export default UpcommingEvents;