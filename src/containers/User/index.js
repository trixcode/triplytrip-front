import React from 'react';
import { connect } from 'react-redux';

import UserForm from '../../components/UserForm';
import { getUserListingStart } from '../../store/actions';

const UserContainer = props => <UserForm {...props} />;

const mapStateToProps = store => ({
  myListing: store.listing.myListing,
});
const mapDispatchToProps = dispatch => ({
  getUserListingStart: (requestParams = '') => dispatch(getUserListingStart(requestParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
