// @flow
import React from 'react';
import { connect } from 'react-redux';

import Discover from '../../components/Discover';
import {getTopDestinationsStart} from '../../store/actions';


const DiscoverContainer = (props) => <Discover {...props} />;

const mapStateToProps = (store) => ({
    topDestinations: store.main.topDestinations,
  })
const mapDispatchToProps = (dispatch) => ({
    getTopDestinationsStart: (requestParams='') => dispatch(getTopDestinationsStart(requestParams)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);
