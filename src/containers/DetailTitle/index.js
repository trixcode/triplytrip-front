// @flow
import React from 'react';
import { connect } from 'react-redux';

import DetailTitle from '../../components/DetailTitle ';
import { fromArticles } from '../../store/selectors';


const DetailTitleContainer = (props) => <DetailTitle {...props} />;

const mapStateToProps = (store) => ({
  articleDetail: fromArticles.getState(store).articleDetail,
  })
  
export default connect(mapStateToProps, null)(DetailTitleContainer);