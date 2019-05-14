import { Fragment } from 'react'

import ArticleContainer from '../src/containers/Article'

import ArticleSidebar from '../src/components/ArticleSidebar';
import Header from '../src/components/Header';
import DetailMainImage from '../src/components/DetailMainImage';
import DetailTitle from '../src/components/DetailTitle ';


function Article() {
  return (
    <Fragment>
      <div className="header-gradient-wrapper">
        <Header />
      </div>
      <DetailMainImage />
      <div className='article-wrapper'>
        <DetailTitle />
        <div className="container article-container">
          <ArticleContainer/>
          <ArticleSidebar />
        </div>
      </div>
    </Fragment>
  )
}

export default Article;