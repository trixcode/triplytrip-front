import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { setDefaultResponseStatuses } from '../../store/actions';
import './successModal.scss';


const SuccessModal = ({ responseStatuses, setDefaultResponseStatusesAction }) => {
  return (
    <Modal
      className="modal-container"
      isOpen={responseStatuses.isOpen}
      // contentLabel="onRequestClose Example"
      onRequestClose={setDefaultResponseStatusesAction}
      overlayClassName="Overlay"
    >
      <div className='modal-content'>
      <button
        className="modal-close"
        onClick={setDefaultResponseStatusesAction}>
        <FontAwesomeIcon
          className='modal-close__icon'
          icon={faTimes}
        />
      </button>
        <h3 className='modal-content__title'>success!</h3>
        <p className='modal-content__description'>
          Your account has been created.
        </p>
        <div>
          <FontAwesomeIcon
            className='modal-content__icon'
            icon={faCheckCircle}
          />
        </div>
        <button
          className="modal-content-button"
          onClick={setDefaultResponseStatusesAction}>
          continue
      </button>
      </div>
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