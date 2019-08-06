// @flow
import React from 'react';
import { connect } from 'react-redux';

import ArticleDescription from '../../components/ArticleDescription';
import { fromArticles } from '../../store/selectors';


const ArticleDetailContainer = (props) => <ArticleDescription {...props} />;

const mapStateToProps = (store) => ({
    articleDetail: fromArticles.getState(store).articleDetail,
  })

export default connect(mapStateToProps, null)(ArticleDetailContainer);