import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import ArticleDetailContainer from '../../containers/ArticleDetail';
import ArticleAsideContainer from '../../containers/ArticleAside';

import HeaderContainer from '../../containers/Header';
import { getArticleDetailByIdStart } from '../../store/actions';
import FooterContainer from '../../containers/Footer';

function ArticleDetail(props) {
  const { getArticleDetailByIdStartAction, match } = props;
  useEffect(() => {
    getArticleDetailByIdStartAction(props.match.params.articleId);
  }, [getArticleDetailByIdStartAction, match.params.articleId]);
  return (
    <Fragment>
      <HeaderContainer />
      <div className="article-wrapper">
        <div className="container article-container">
          <ArticleDetailContainer />
          <ArticleAsideContainer />

        </div>
      </div>
      <FooterContainer />
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  getArticleDetailByIdStartAction: articleDetail => dispatch(getArticleDetailByIdStart(articleDetail)),
});

export default connect(null, mapDispatchToProps)(withRouter(ArticleDetail));
