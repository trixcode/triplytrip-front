import { useEffect } from 'react';
import moment from 'moment';

import SectionTitle from '../SectionTitle';

import './articles.scss';

const Articles = (props) => {
  const { latestNewsList, getLatestNewsStart } = props;
  useEffect(() => {
    getLatestNewsStart()
  }, []);
  return (
    <section className='section-news'>
      <div className='container'>
        <SectionTitle
          name="daily news tips"
          text="the best places to see autumn colours"
        />
        <div className='news-cards-wrapper'>
          {
            latestNewsList.map(latestNews => (
              <div className='news-card' latestNews={latestNews}>
                <div className='news-card-header'>
                  <div className='news-card__date'>
                    <span className='date__day'>{moment(latestNews.createdDate).format('DD')}</span>
                    <span className='date__month'>{moment(latestNews.createdDate).format('MMM')}</span>
                  </div>
                  <img className='news-card__image' src={latestNews.image} alt={latestNews.title} />
                </div>
                <div className='news-card-footer'>
                  <div className='news-card__title'>{latestNews.title}</div>
                  <div className='news-card__tag'>
                    <span className='icon'>News</span>
                    <span className='icon'>Comments</span>
                  </div>
                  <div dangerouslySetInnerHTML={{__html: latestNews.description}} className='news-card__description'></div>
                  <button className='news-card-button'>read more</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Articles;