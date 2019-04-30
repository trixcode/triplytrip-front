import { Fragment } from 'react'
import ArticleDescription from '../src/components/ArticleDescription';
import ArticleSidebar from '../src/components/ArticleSidebar';
import Header from '../src/components/Header';
import DetailMainImage from '../src/components/DetailMainImage';


function Article() {
  return (
    <Fragment>
      <div className="header-gradient-wrapper">
        <Header />
      </div>
      <DetailMainImage />
      <div className='article-wrapper'>
        <div className="container article-container">
          <ArticleDescription />
          <ArticleSidebar />
        </div>
      </div>
    </Fragment>
  )
}

export default Article;