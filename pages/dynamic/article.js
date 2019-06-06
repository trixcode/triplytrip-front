import { Fragment } from 'react';
import { useEffect } from 'react';
import { withRouter } from 'next/router'
import { connect } from 'react-redux';

import ArticleDetailContainer from '../../src/containers/ArticleDetail';

import SuccessModal from '../../src/components/SuccessModal';
import ArticleSidebar from '../../src/components/ArticleSidebar';
import HeaderContainer from '../../src/containers/Header';
import { getArticleDetailByIdStart } from '../../src/store/actions';
import DetailPostTop from '../../src/components/DetailPostTop';


function ArticleDetail(props) {
  const { getArticleDetailByIdStartAction, router } = props;
  useEffect(() => {
    getArticleDetailByIdStartAction(router.query.articleId)
  }, [])
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