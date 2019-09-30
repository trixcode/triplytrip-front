import React from 'react';
import { connect } from 'react-redux';

import UserForm from '../../components/UserForm';
import { getUserListingStart, deleteUserListingStart } from '../../store/actions';

const UserContainer = props => <UserForm {...props} />;

const mapStateToProps = store => ({
  myListing: store.listing.myListing,
  user: store.login.user || store.register.user,
});
const mapDispatchToProps = dispatch => ({
  getUserListingStart: (requestParams = '') => dispatch(getUserListingStart(requestParams)),
  deleteUserListingStart: placeID => dispatch(deleteUserListingStart(placeID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
