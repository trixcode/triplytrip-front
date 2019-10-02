import React from 'react';
import { connect } from 'react-redux';

import ModalWindow from '../../components/ModalWindow';
import {
  setNotLogined, loginUserSuccess, registerSuccess, logoutUserStart,
} from '../../store/actions';

const ModalWindowContainer = props => <ModalWindow {...props} />;

const mapStateToProps = store => ({
  isLogined: store.user.isLogined,
});
const mapDispatchToProps = dispatch => ({
  loginUserSuccess: formValue => dispatch(loginUserSuccess(formValue)),
  registerSuccess: formValue => dispatch(registerSuccess(formValue)),
  setNotLogined: isLogined => dispatch(setNotLogined(isLogined)),
  logoutUserStart: () => dispatch(logoutUserStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowContainer);
