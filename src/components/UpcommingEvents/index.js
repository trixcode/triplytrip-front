import './upcommingEvents.scss'

const UpcommingEvents = () => {
  return (
    <section className="upcomming-events">
    <div className="container-event">
      <h1 className="upcomming-events-title">Upcomming Events</h1>
      <span className="upcomming-events-text">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Phasselus aliquam retrum 
      </span>
      <div className="upcomming-events-wrapper">
        <div className="event-card">
          <div className="event-card-header">
            <h5 className="event-card-header-name">Low Road Live</h5>
            <div className="event-card-header-info">
              <span className="event-card-header-info__location">Festival, Night Live</span>
              <span className="event-card-header-info__price">120$</span>
              <span className="event-card-header-info__open"></span>
            </div>
            
          </div>
          <div className="event-card-rating">4,5</div>
          <table className="event-card-table">
            <tr><th>Adress</th><th>From</th><th>To</th></tr>
            <tr><th>8-9 Hoxton Square London N1<br/> 6NU UK</th><th>July 22, 19<br/>10:15 AM</th><th>July 26, 19<br/>10:15 AM</th></tr>
          </table>
        </div>

        <div className="event-card">
          <div className="event-card-header">
            <h5 className="event-card-header-name">Low Road Live</h5>
            <div className="event-card-header-info">
              <span className="event-card-header-info__location">Festival, Night Live</span>
              <span className="event-card-header-info__price">120$</span>
              <span className="event-card-header-info__open">Closed</span>
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