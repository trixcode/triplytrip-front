import React from 'react';
import { connect } from 'react-redux';

import Articles from '../../components/Articles';
import { getLatestNewsStart } from '../../store/actions';


const LatestNewsContainer = (props) => <Articles {...props} />;

const mapStateToProps = (store) => ({
  latestNews: store.main.latestNews,
})
const mapDispatchToProps = (dispatch) => ({
  getLatestNewsStart: (requestParams='') => dispatch(getLatestNewsStart(requestParams)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(LatestNewsContainer);
