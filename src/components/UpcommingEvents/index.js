import SectionTitle from '../SectionTitle';
import {useEffect} from 'react';
import './upcommingEvents.scss'

const UpcommingEvents = (props) => {
  const { events, getEventsStart } = props;
  useEffect(() => {
    getEventsStart()
  }, []);
  return (
    <section className="upcomming-events">
    <div className="container">
      <SectionTitle 
        name="Upcomming Events"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasselus aliquam retrum"
      />
      <div className="upcomming-events-wrapper">
      {Object.keys(events).map(key=> (
        <div className="event-card" key={key}>
        <img className="event-card-image" src="https://img2.goodfon.com/wallpaper/big/c/5c/hotel-vyveska-neon-vecher.jpg" />
        <div className="event-card-info">
          <h5 className="event-card-info__name">{events[key].name}</h5>
          <div className="event-card-info-block">
            <span className="info-block__location">{events[key].type}</span>
            <span className="info-block__price">{events[key].price}$</span>
            <span className="info-block__open">{events[key].status}</span>
          </div>
        </div>
          <div className="event-card-rating">{events[key].rating}</div>
          <table className="event-card-table">
          <tbody>
            <tr>
              <th>Adress</th>
              <th>From</th>
              <th>To</th>
            </tr>
            <tr><td>{events[key].adress}</td>
            <td>{events[key].fromDate}<br/>{events[key].fromTime}</td>
            <td>{events[key].toDate}<br/>{events[key].toTime}</td></tr>
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