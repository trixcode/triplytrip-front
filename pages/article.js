import { Fragment } from 'react'

import ArticleDetailContainer from '../src/containers/ArticleDetail'

import ArticleSidebar from '../src/components/ArticleSidebar';
import Header from '../src/components/Header';
import DetailMainImage from '../src/components/DetailMainImage';
import DetailTitle from '../src/components/DetailTitle ';


function ArticleDetail() {
  return (
    <Fragment>
      <div className="header-gradient-wrapper">
        <Header />
      </div>
      <DetailMainImage />
      <div className='article-wrapper'>
        <DetailTitle />
        <div className="container article-container">
          <ArticleDetailContainer/>
          <ArticleSidebar />
        </div>
      </div>
    </Fragment>
  )
}

export default ArticleDetail;