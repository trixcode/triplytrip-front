import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import PlaceDetail from '../../components/PlaceDetail';
import { fromPlaces } from '../../store/selectors';
import { getPlaceDetailByIdStart } from '../../store/actions';

const PlaceDetailContainer = props => <PlaceDetail {...props} />;

const mapStateToProps = store => ({
  placeDetail: fromPlaces.getState(store).placeDetail,
});
const mapDispatchToProps = dispatch => ({
  getPlaceDetailByIdStart: placeId => dispatch(getPlaceDetailByIdStart(placeId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlaceDetailContainer));
