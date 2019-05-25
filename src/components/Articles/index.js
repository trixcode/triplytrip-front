import { useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link'

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
            latestNewsList.map(latestnews => (
              <div
                key={latestnews.id}
                className='news-card' latestnews={latestnews}>
                <div className='news-card-header'>
                  <div className='news-card__date'>
                    <span className='date__day'>{moment(latestnews.createdDate).format('DD')}</span>
                    <span className='date__month'>{moment(latestnews.createdDate).format('MMM')}</span>
                  </div>
                  <img className='news-card__image' src={latestnews.image} alt={latestnews.title} />
                </div>
                <div className='news-card-footer'>
                  <div className='news-card__title'>{latestnews.title}</div>
                  <div className='news-card__tag'>
                    <span className='icon'>News</span>
                    <span className='icon'>Comments</span>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: latestnews.description }} className='news-card__description'></div>
                  <Link href='/article'>
                    <button className='news-card-button'>read more</button>
                  </Link>
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