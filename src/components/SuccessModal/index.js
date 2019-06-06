import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { setDefaultResponseStatuses } from '../../store/actions';
import './successModal.scss';


const SuccessModal = ({ responseStatuses, setDefaultResponseStatusesAction }) => {
  return (
    <Modal
      className="modal-container"
      isOpen={responseStatuses.isOpen}
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
        <h3 className='modal-content__title'>{responseStatuses.title}</h3>
        <p className='modal-content__description'>
          {responseStatuses.message}
        </p>
        <div>
          {
            responseStatuses.isSuccess ?
              (
                <FontAwesomeIcon
                  className='modal-content__icon'
                  icon={faCheckCircle}
                />
              )
              :
              (
                <FontAwesomeIcon
                  className='modal-content__icon error'
                  icon={faTimesCircle}
                />
              )
          }
        </div>
        {responseStatuses.isSuccess ?
          (
            <button
              className="modal-content-button"
              onClick={setDefaultResponseStatusesAction}>
              continue
            </button>
          )
          :
          (
            <button
              className="modal-content-button try"
              onClick={setDefaultResponseStatusesAction}>
              try again
            </button>
          )
        }
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