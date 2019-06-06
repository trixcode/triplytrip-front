import React from 'react';
import { connect } from 'react-redux';

import { fromArticles } from '../../store/selectors';
import ArticleSidebar from '../../components/ArticleSidebar';


const ArticleSidebarContainer = (props) => <ArticleSidebar {...props} />;

const mapStateToProps = (store) => ({
    articleDetail: fromArticles.getState(store).articleDetail,
  })

export default connect(mapStateToProps, null)(ArticleSidebarContainer);