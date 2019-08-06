import React from 'react'
import { withRouter } from 'react-router'
import moment from 'moment';

const ArticlesMainPage = (props) => {
  const { articlePaginate, history } = props;
  const pushToArticleDetail = () => {
    history.push(`/article/${articlePaginate._id}`)
  }
  return (
    <div
      onClick={pushToArticleDetail}
      className='news-card' >
      <div className='news-card-header'>
        <div className='news-card__date'>
          <span className='date__day'>{moment(articlePaginate.createdDate).format('DD')}</span>
          <span className='date__month'>{moment(articlePaginate.createdDate).format('MMM')}</span>
        </div>
        <img className='news-card__image' src={articlePaginate.mainImage} alt={articlePaginate.title} />
      </div>
      <div className='news-card-footer'>
        <div className='news-card__title'>{articlePaginate.title}</div>
        {/* <div className='news-card__tag'>
          <span className='icon'>News</span>
          <span className='icon'>Comments</span>
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: articlePaginate.description }} className='news-card__description'></div>
        <div className="news-card-button-wrapper">
          <button className='news-card-button'>подробнее</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ArticlesMainPage);
