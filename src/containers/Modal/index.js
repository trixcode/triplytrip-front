import React from 'react';
import { connect } from 'react-redux';

import ModalWindow from '../../components/ModalWindow';
import { setNotLogined, loginUserSuccess, registerSuccess } from '../../store/actions';

const ModalWindowContainer = props => <ModalWindow {...props} />;

const mapStateToProps = store => ({
  isLogined: store.main.isLogined,
});
const mapDispatchToProps = dispatch => ({
  loginUserSuccess: formValue => dispatch(loginUserSuccess(formValue)),
  registerSuccess: formValue => dispatch(registerSuccess(formValue)),
  setNotLogined: isLogined => dispatch(setNotLogined(isLogined)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowContainer);
