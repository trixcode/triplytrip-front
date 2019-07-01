// @flow
import React from 'react';
import { connect } from 'react-redux';

import DetailPostTop from '../../components/DetailPostTop';
import { fromArticles } from '../../store/selectors';


const DetailPostTopContainer = (props) => <DetailPostTop {...props} />;

const mapStateToProps = (store) => ({
  articlePaginate: fromArticles.getState(store).articlePaginate,
  placeDetail: fromArticles.getState(store).placeDetail,
  places: store.places,
  })
  
export default connect(mapStateToProps, null)(DetailPostTopContainer);