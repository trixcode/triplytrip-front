import SectionTitle from '../SectionTitle';

import './upcommingEvents.scss'

const UpcommingEvents = () => {
  return (
    <section className="upcomming-events">
    <div className="container">
      <SectionTitle 
        name="Upcomming Events"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasselus aliquam retrum"
      />
      <div className="upcomming-events-wrapper">
        <div className="event-card">
        <img className="event-card-image" src="https://img2.goodfon.com/wallpaper/big/c/5c/hotel-vyveska-neon-vecher.jpg" />
        <div className="event-card-info">
          <h5 className="event-card-info__name">Low Road Live</h5>
          <div className="event-card-info-block">
            <span className="info-block__location">Festival, Night Live</span>
            <span className="info-block__price">120$</span>
            <span className="info-block__open"></span>
          </div>
        </div>
          <div className="event-card-rating">4,3</div>
          <table className="event-card-table">
            <tr><th>Adress</th><th>From</th><th>To</th></tr>
            <tr><th>8-9 Hoxton Square London N1<br/> 6NU UK</th><th>July 22, 19<br/>10:15 AM</th><th>July 26, 19<br/>10:15 AM</th></tr>
          </table>
        </div>

        <div className="event-card">
        <img className="event-card-image" src="https://img2.goodfon.com/wallpaper/big/c/5c/hotel-vyveska-neon-vecher.jpg" />
        <div className="event-card-info">
          <h5 className="event-card-info__name">Low Road Live</h5>
          <div className="event-card-info-block">
            <span className="info-block__location">Festival, Night Live</span>
            <span className="info-block__price">120$</span>
            <span className="info-block__open">Closed</span>
          </div>
        </div>
          <div className="event-card-rating">4,3</div>
          <table className="event-card-table">
            <tr><th>Adress</th><th>From</th><th>To</th></tr>
            <tr><th>8-9 Hoxton Square London N1<br/> 6NU UK</th><th>July 22, 19<br/>10:15 AM</th><th>July 26, 19<br/>10:15 AM</th></tr>
          </table>
        </div>
      </div>
    </div>
    </section>
  )
}

export default UpcommingEvents;