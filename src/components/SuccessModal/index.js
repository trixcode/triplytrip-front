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
      className="modalSuccess-container"
      isOpen={responseStatuses.isOpen}
      onRequestClose={setDefaultResponseStatusesAction}
      overlayClassName="Overlay"
    >
      <div className='modalSuccess-content'>
        <button
          className="modalSuccess-close"
          onClick={setDefaultResponseStatusesAction}>
          <FontAwesomeIcon
            className='modalSuccess-close__icon'
            icon={faTimes}
          />
        </button>
        <h3 className='modalSuccess-content__title'>{responseStatuses.title}</h3>
        <p className='modalSuccess-content__description'>
          {responseStatuses.message}
        </p>
        <div>
          {
            responseStatuses.isSuccess ?
              (
                <FontAwesomeIcon
                  className='modalSuccess-content__icon'
                  icon={faCheckCircle}
                />
              )
              :
              (
                <FontAwesomeIcon
                  className='modalSuccess-content__icon error'
                  icon={faTimesCircle}
                />
              )
          }
        </div>
        {responseStatuses.isSuccess ?
          (
            <button
              className="modalSuccess-content-button"
              onClick={setDefaultResponseStatusesAction}>
              continue
            </button>
          )
          :
          (
            <button
              className="modalSuccess-content-button try"
              onClick={setDefaultResponseStatusesAction}>
              close
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