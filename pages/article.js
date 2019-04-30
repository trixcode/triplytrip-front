import { Fragment } from 'react'
import ArticleDescription from '../src/components/ArticleDescription';
import ArticleSidebar from '../src/components/ArticleSidebar';


function Article() {
  return (
    <Fragment>
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