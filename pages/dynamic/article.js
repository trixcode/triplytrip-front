import { Fragment } from 'react';
import { useEffect } from 'react';
import { withRouter } from 'next/router'


import ArticleDetailContainer from '../../src/containers/ArticleDetail';
import DetailTitleContainer from '../../src/containers/DetailTitle';

import { connect } from 'react-redux';
import ArticleSidebar from '../../src/components/ArticleSidebar';
import Header from '../../src/components/Header';
import DetailMainImage from '../../src/components/DetailMainImage';
import { getArticleDetailByIdStart } from '../../src/store/actions';


function ArticleDetail(props) {
  const { getArticleDetailByIdStartAction, router } = props;
  console.log(router.query)
  useEffect(() => {
    getArticleDetailByIdStartAction(router.query.articleId)
  }, [])
  return (
    <Fragment>
      <Header />
      <DetailMainImage />
      <div className='article-wrapper'>
        <DetailTitleContainer />
        <div className="container article-container">
          <ArticleDetailContainer />
          <ArticleSidebar />
        </div>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getArticleDetailByIdStartAction: (articleDetail) => dispatch(getArticleDetailByIdStart(articleDetail)),
})
  
export default connect(null, mapDispatchToProps)(withRouter(ArticleDetail));