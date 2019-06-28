import React from 'react';
import { connect } from 'react-redux';
import { fromArticles } from '../../store/selectors';

import Articles from '../../components/Articles';
import { getArticlesByIdStart } from '../../store/actions'



const LatestNewsContainer = (props) => <Articles {...props} />;


const mapDispatchToProps = (dispatch) => ({
  getArticlesByIdStart: (articlePaginate) => dispatch(getArticlesByIdStart(articlePaginate)),
})

const mapStateToProps = (store) => ({
    articlePaginate: fromArticles.getState(store).articlePaginate,
  })
export default connect(mapStateToProps, mapDispatchToProps)(LatestNewsContainer);
