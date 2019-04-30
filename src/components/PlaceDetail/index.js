import './placeDetail.scss'

const PlaceDetail = () => {
  return (
    <section className="place-detail">
      <div className="place-detail-container container">
        <div className="main-info">
          <div className="main-info-tabs">
            <button id="overview" className="main-info-tabs__tab  main-info-tabs__tab_selected">
              Overview
            </button>
            <button id="contact" className="main-info-tabs__tab">
              Contact
            </button>
            <button id="reviews" className="main-info-tabs__tab">
              Reviews & Rating
            </button>
            <button id="video" className="main-info-tabs__tab">
              Video
            </button>
          </div>
          <div className="main-info-text">
            <p className="main-info-text__text">
            vulputate ut pharetra sit amet aliquam id diam maecenas 
            ultricies mi eget mauris pharetra et ultrices neque ornare 
            aenean euismod elementum nisi quis eleifend quam adipiscing 
            vitae proin sagittis nisl rhoncus mattis rhoncus urna neque 
            viverra justo nec ultrices dui sapien eget mi proin sed libero 
            enim sed faucibus turpis in eu mi bibendum neque
            sapien eget mi proin sed libero 
            enim sed faucibus turpis in eu mi bibendum neque
            </p>
            <p className="main-info-text__text">
            vulputate ut pharetra sit amet aliquam id diam maecenas 
            ultricies mi eget mauris pharetra et ultrices neque ornare 
            aenean euismod elementum nisi quis eleifend quam adipiscing 
            vitae proin sagittis nisl rhoncus mattis rhoncus urna neque 
            viverra justo nec ultrices dui sapien eget mi proin sed libero 
            enim sed faucibus turpis in eu mi bibendum neque
            sapien eget mi proin sed libero 
            enim sed faucibus turpis in eu mi bibendum neque
            </p>

            <h2 className="main-info-text__title">Heading - Pellentesque gravida fermentum</h2>

            <div className="main-info-text__pics"></div>

            <p className="main-info-text__text">
            vulputate ut pharetra sit amet aliquam id diam maecenas 
            ultricies mi eget mauris pharetra et ultrices neque ornare 
            aenean euismod elementum nisi quis eleifend quam adipiscing 
            vitae proin sagittis nisl rhoncus mattis rhoncus urna neque 
            viverra justo nec ultrices dui sapien eget mi proin sed libero 
            enim sed faucibus turpis in eu mi bibendum neque
            sapien eget mi proin sed libero 
            enim sed faucibus turpis in eu mi bibendum neque
            </p>
            <p className="main-info-text__text">
            vulputate ut pharetra sit amet aliquam id diam maecenas 
            ultricies mi eget mauris pharetra et ultrices neque ornare 
            aenean euismod elementum nisi quis eleifend quam adipiscing 
            vitae proin sagittis nisl rhoncus mattis rhoncus urna neque 
            viverra justo nec ultrices dui sapien eget mi proin sed libero 
            enim sed faucibus turpis in eu mi bibendum neque
            sapien eget mi proin sed libero 
            enim sed faucibus turpis in eu mi bibendum neque
            </p>

            <div className="main-info-text__save"></div>
          </div>
        </div>
        
        <aside className="sidebar">
          <div className="owner-info">
            <div className="owner-info__avatar"></div>
            <span className="owner-info__name">Rose Lee</span>
            <span className="owner-info__status">Editor</span>
            <div className="owner-info__followers">
              <div>
                <span>Followers</span>
                <span>120</span>
              </div>
              <div>
                <span>Following</span>
                <span>10</span>
              </div>
            </div>
            <span className="owner-info__follow">Follow</span>

          </div>
          <div className="owner-contacts">
            <ul className="owner-contacts-info">
              <li>Montana, USA</li>
              <li>http://masttbigbreakfast.com/</li>
              <li>+1234 567 8910</li>
            </ul>
            <ul className="owner-contacts-networks">
              <li><div></div></li>
              <li><div></div></li>
              <li><div></div></li>
              <li><div></div></li>
              <li><div></div></li>
              <li><div></div></li>
            </ul>
            <div className="sidebars-button">Visit Website</div>
          </div>
          <div className="price">
            <div className="sidebars-title">
              <div></div><h5>Price Range</h5>
            </div>
            <span>Price: </span><span className="owner-price__price"> $100 - $300</span>
          </div>
          <div className="contact-me">
              <div className="sidebars-title">
                <div></div><h5>Contact Me</h5>
              </div>
              <div className="sidebars-form-wrapper">
              <div className="contact-me-input-block">
                <span>Your Name</span>
                <input type="text"/>
              </div>
              <div className="contact-me-input-block">
                <span>Your Email</span>
                <input type="email" />
              </div>
              <div className="contact-me-input-block">
                <span>Subject</span>
                <input type="text"/>
              </div>
              <div className="contact-me-input-block">
                <span>Your Message</span>
                <input type="text"/>
              </div>
              <button className="sidebars-button">Submit</button>
            </div>
          </div>
          <div className="gallery">
            <div className="sidebars-title">
              <div></div><h5>Gallery</h5>
            </div>
          </div>
          <div className="sidebar-subscribe">
            <div className="sidebars-title">
              <div></div><h5>Subscribe</h5>
            </div>
            <span>Subscribe us and never miss our new<br/> articles</span><br/>
            <input type="email" placeholder="Enter Your Email"></input>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default PlaceDetail