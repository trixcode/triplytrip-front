import './upcommingEvents.scss'

const UpcommingEvents = () => {
  return (
    <section className="upcomming-events">
    <div className="container">
      <h1 className="upcomming-events-title">Upcomming Events</h1>
      <span className="upcomming-events-text">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Phasselus aliquam retrum 
      </span>
      <div className="upcomming-events-events">
        <div className="upcomming-events-events-event">
          <div className="upcomming-events-events-event-title">
            <span className="upcomming-events-events-event-title">Low Road Live</span>
            <div className="upcomming-events-events-event-title-information">
              <span className="upcomming-events-events-event-title-information__location">Festival, Night Live</span>
              <span className="upcomming-events-events-event-title-information__price">120$</span>
              <span className="upcomming-events-events-event-title-information__open"></span>
            </div>
            
          </div>
          <div className="upcomming-events-events-event-index">4,5</div>
          <table className="upcomming-events-events-event-table">
            <tr><th>Adress</th><th>From</th><th>To</th></tr>
            <tr><th>8-9 Hoxton Square London N1<br/> 6NU UK</th><th>July 22, 19<br/>10:15 AM</th><th>July 26, 19<br/>10:15 AM</th></tr>
          </table>
        </div>

        <div className="upcomming-events-events-event">
          <div className="upcomming-events-events-event-title">
            <span className="upcomming-events-events-event-title">Low Road Live</span>
            <div className="upcomming-events-events-event-title-information">
              <span className="upcomming-events-events-event-title-information__location">Festival, Night Live</span>
              <span className="upcomming-events-events-event-title-information__price">120$</span>
              <span className="upcomming-events-events-event-title-information__open">Closed</span>
            </div>
            
          </div>
          <div className="upcomming-events-events-event-index">4,5</div>
          <table className="upcomming-events-events-event-table">
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