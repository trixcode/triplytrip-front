import React from 'react';
import { connect } from 'react-redux';

import { fromArticles } from '../../store/selectors';
import Footer from '../../components/Footer';
import { getArticlesToFooterStart } from '../../store/actions';


const FooterContainer = props => <Footer {...props} />;


const mapDispatchToProps = dispatch => ({
  getArticlesToFooterStart: footerArticle => dispatch(getArticlesToFooterStart(footerArticle)),
});

const mapStateToProps = store => ({
  articlePaginate: fromArticles.getState(store).articlePaginate,
  footerArticle: fromArticles.getState(store).footerArticle,

});

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
