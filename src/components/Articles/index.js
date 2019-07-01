import { withRouter } from 'react-router'
import { useEffect } from 'react';
import React from 'react'
import SectionTitle from '../SectionTitle';
import ArticlesMainPage from '../ArticlesMainPage';
import './articles.scss';

const Articles = (props) => {
  const { articlePaginate, getArticlesByIdStart } = props;

  

  useEffect(() => {
    getArticlesByIdStart()
  }, []);
  return (
    <section className='section-news'>
      <div className='container'>
        <SectionTitle
          name="daily news tips"
          text="the best places to see autumn colours"
        />
        <div className='news-cards-wrapper'>
          {articlePaginate.map(articlePaginate => (
            <ArticlesMainPage  articlePaginate={articlePaginate}
              key={articlePaginate._id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default withRouter(Articles);