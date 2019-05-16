import { Fragment } from 'react';
import { useEffect } from 'react';

import ArticleDetailContainer from '../src/containers/ArticleDetail';
import DetailTitleContainer from '../src/containers/DetailTitle';

import { connect } from 'react-redux';
import ArticleSidebar from '../src/components/ArticleSidebar';
import Header from '../src/components/Header';
import DetailMainImage from '../src/components/DetailMainImage';
import { getArticleDetailByIdStart } from '../src/store/actions';


function ArticleDetail(props) {
  const { getArticleDetailByIdStartAction } = props
  useEffect(() => {
    const firstId = 1;
    getArticleDetailByIdStartAction(firstId)
  }, [])
  return (
    <Fragment>
      <div className="header-gradient-wrapper">
        <Header />
      </div>
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
  
export default connect(null, mapDispatchToProps)(ArticleDetail);