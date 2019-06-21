import { Fragment } from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import React from 'react'
import ArticleDetailContainer from '../../containers/ArticleDetail';

import SuccessModal from '../../components/SuccessModal';
import ArticleSidebar from '../../components/ArticleSidebar';
import HeaderContainer from '../../containers/Header';
import { getArticleDetailByIdStart } from '../../store/actions';
import DetailPostTop from '../../components/DetailPostTop';


function ArticleDetail(props) {
  const { getArticleDetailByIdStartAction } = props;
  useEffect(() => {
    getArticleDetailByIdStartAction(props.match.params.articleId)
  }, [])
  console.log(props.match.params.articleId)
  return (
    <Fragment>
      <HeaderContainer />
      <DetailPostTop />
      <div className='article-wrapper'>
        <div className="container article-container">
          <ArticleDetailContainer />
          <ArticleSidebar />
          <SuccessModal />
        </div>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getArticleDetailByIdStartAction: (articleDetail) => dispatch(getArticleDetailByIdStart(articleDetail)),
})
  
export default connect(null, mapDispatchToProps)(withRouter(ArticleDetail));