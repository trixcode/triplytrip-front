import React from 'react';
import { connect } from 'react-redux';

import ModalWindow from '../../components/ModalWindow';
import { setNotLogined, loginUserSuccess } from '../../store/actions';

const ModalWindowContainer = (props) => <ModalWindow {...props} />;

const mapStateToProps = (store) => ({
  isOpenRegisterModal: store.register.isOpenRegisterModal,
  isLogined: store.main.isLogined
})
 const mapDispatchToProps = (dispatch) => ({
  loginUserSuccess: (formValue) => dispatch(loginUserSuccess(formValue)),
  setNotLogined: (isLogined) => dispatch(setNotLogined(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowContainer)