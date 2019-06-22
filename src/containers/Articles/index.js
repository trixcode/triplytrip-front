import React from 'react';
import { connect } from 'react-redux';

import ArticlesWrapper from '../../components/ArticlesWrapper';
import { fromArticles } from '../../store/selectors';
import { getArticlesByPageStart } from '../../store/actions'

const ArticlesContainer = (props) => <ArticlesWrapper {...props} />;

const mapDispatchToProps = (dispatch) => ({
  getArticlesByPageStart: (articlePaginate) => dispatch(getArticlesByPageStart(articlePaginate)),
})

const mapStateToProps = (store) => ({
    articlePaginate: fromArticles.getState(store).articlePaginate,
  })

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);