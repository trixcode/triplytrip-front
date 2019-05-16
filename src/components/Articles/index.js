import { useEffect } from 'react';
import SectionTitle from '../SectionTitle';

import './articles.scss';

const Articles = (props) => {
  const { latestNews, getLatestNewsStart } = props;
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
            Object.keys(latestNews).map(key => (
              <div className='news-card' key={key}>
                <div className='news-card-header'>
                  <div className='news-card__date'>
                    <span className='date__day'>15</span>
                    <span className='date__month'>jun</span>
                  </div>
                  <img className='news-card__image' src={latestNews[key].image} alt={latestNews[key].title} />
                </div>
                <div className='news-card-footer'>
                  <div className='news-card__title'>{latestNews[key].title}</div>
                  <div className='news-card__tag'>
                    <span className='icon'>News</span>
                    <span className='icon'>Comments</span>
                  </div>
                  <p className='news-card__description'>{latestNews[key].description}</p>
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