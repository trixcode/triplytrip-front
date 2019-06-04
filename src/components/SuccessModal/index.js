import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './modalWindow.scss';


const SuccessModal = (props) => {
  const [showModal, setIsShowModal] = useState(false);
  

  return (

    <div className="modal">


      <button className="modal-open__button" onClick={() => setIsShowModal(!showModal)}><FontAwesomeIcon
        className='model-open__user'
        icon={faUser} /></button>

      {/* <Field 
            placeholder='Email Address'
            className='modal-form__input'
            type="text"
          /> */}
      <Modal
        className="modal-container"
        isOpen={showModal}
        // contentLabel="onRequestClose Example"
        onRequestClose={() => setIsShowModal(!showModal)}
        overlayClassName="Overlay"
      >

        <button className="modal-close-button" onClick={() => setIsShowModal(!showModal)}>Close Modal</button>
      
          <div>a</div>
      </Modal>
    </div>
  )
}

export default SuccessModal;