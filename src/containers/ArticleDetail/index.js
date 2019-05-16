// @flow
import React from 'react';
import { connect } from 'react-redux';

import ArticleDescription from '../../components/ArticleDescription';
import { getArticleDetailByIdStart } from '../../store/actions';
import { fromMain } from '../../store/selectors';


const ArticleDetailContainer = (props) => <ArticleDescription {...props} />;

const mapStateToProps = (store) => ({
    articleDetail: fromMain.getState(store).articleDatial,
  })
const mapDispatchToProps = (dispatch) => ({
  getArticleDetailByIdStart: (articalId) => dispatch(getArticleDetailByIdStart(articalId)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailContainer);