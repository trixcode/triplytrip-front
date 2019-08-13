import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './detailTitle.scss';

const DetailTitle = (props) => {
  const { articleDetail } = props;
  console.log(articleDetail);
  return (
    <section className="detail-title">
      <div className="container detail-title__container">
        <h2 className="detail-title__name">{articleDetail.title}</h2>
        <div className="detail-tags">
          <div className="detail-tags__wrapper">
            <div className="detail-tags__block">
              <span className="detail-tags__title">Posted On</span>
              <span className="detail-tags__subtitle">{moment(articleDetail.createdDate).format('MMM DD YYYY')}</span>
            </div>
            {<FontAwesomeIcon
              className="detail-icon__share"
              icon={faShareAlt}
            />}
          </div>
        </div>
      </div>
    </section>
  );
};

DetailTitle.propTypes = {
  articleDetail: PropTypes.shape({
    title: PropTypes.string,
    createDate: PropTypes.string,
  }).isRequired,
};


export default DetailTitle;
