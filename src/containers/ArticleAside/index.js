import React from 'react';
import { connect } from 'react-redux';

import { fromArticles } from '../../store/selectors';
import ArticleAside from '../../components/ArticleAside';


const ArticleAsideContainer = props => <ArticleAside {...props} />;


const mapStateToProps = store => ({
  articlePaginate: fromArticles.getState(store).articlePaginate,
});

export default connect(mapStateToProps, null)(ArticleAsideContainer);
