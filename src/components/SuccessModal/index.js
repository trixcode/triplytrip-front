import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { setDefaultResponseStatuses } from '../../store/actions';
import './successModal.scss';


const SuccessModal = ({responseStatuses, setDefaultResponseStatusesAction}) => {
  return (
    <Modal
      className="modal-container"
      isOpen={responseStatuses.isOpen}
      // contentLabel="onRequestClose Example"
      onRequestClose={setDefaultResponseStatusesAction}
      overlayClassName="Overlay"
    >
      <button
        className="modal-close-button"
        onClick={setDefaultResponseStatusesAction}>
        Close Modal
      </button>
    </Modal>
  )
}
const mapStateToProps = (store) => ({
  responseStatuses: store.main.responseStatuses,
})
const mapDispatchToProps = (dispatch) => ({
  setDefaultResponseStatusesAction: () => dispatch(setDefaultResponseStatuses()),
})
export default connect(mapStateToProps, mapDispatchToProps)(SuccessModal);