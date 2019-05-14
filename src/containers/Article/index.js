// @flow
import React from 'react';
import { connect } from 'react-redux';

import ArticleDescription from '../../components/ArticleDescription';
import { getArticlesStart } from '../../store/actions';
import { fromMain } from '../../store/selectors';


const ArticleContainer = (props) => <ArticleDescription {...props} />;

const mapStateToProps = (store) => ({
    articles: fromMain.getState(store).articles,
  })
const mapDispatchToProps = (dispatch) => ({
    getArticlesStart: (requestParams='') => dispatch(getArticlesStart(requestParams)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);