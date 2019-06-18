import React from 'react';
import { connect } from 'react-redux';

import ModalWindow from '../../components/ModalWindow';
// import { setDefaultResponseStatuses } from '../../store/actions';

const ModalWindowContainer = (props) => <ModalWindow {...props} />;

const mapStateToProps = (store) => ({
  isOpenRegisterModal: store.register.isOpenRegisterModal,
  isOpenLoginModal: store.register.isOpenLoginModal,
})
// const mapDispatchToProps = (dispatch) => ({
//   setDefaultResponseStatusesAction: () => dispatch(setDefaultResponseStatuses()),
// })

export default connect(mapStateToProps, null)(ModalWindowContainer)