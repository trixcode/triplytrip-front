import React from 'react';
import { connect } from 'react-redux';

import Places from '../../components/Places';
import {getPlacesStart} from '../../store/actions';

const PlacesContainer = (props) => <Places {...props} />;

const mapStateToProps = (store) => ({
    places: store.places,
  })
const mapDispatchToProps = (dispatch) => ({
  getPlacesStart: (requestParams='') => dispatch(getPlacesStart(requestParams)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlacesContainer)