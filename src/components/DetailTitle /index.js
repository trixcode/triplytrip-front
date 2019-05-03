
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import './detailTitle.scss';

const DetailTitle = (props) => {
  return (
    <section className="detail-title">
      <div className="container detail-title__container">
        <h2 className="detail-title__name">15 Restaurants in London and New York</h2>
        <div className="detail-tags">
          <div className="detail-tags__wrapper">
            <div className="detail-tags__block">
              <span className="detail-tags__title">Posted On</span>
              <span className="detail-tags__subtitle">May 09, 2017</span>
            </div>
            <div className="detail-tags__block middle-block">
              <span className="detail-tags__title">Category</span>
              <span className="detail-tags__subtitle">Hotel</span>
            </div>
            <div className="detail-tags__block">
              <span className="detail-tags__title">Comment</span>
              <span className="detail-tags__subtitle detail-tags__digits">5</span>
            </div>
          </div>
          {<FontAwesomeIcon
            className="detail-icon__share"
            icon={faShareAlt}
          />}
        </div>
      </div>
    </section>
  )
}

export default DetailTitle;