import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './modalWindow.scss';


const ModalWindow = (props) => {
  const [showModal, setIsShowModal] = useState(false);
  const [isActive, setActive] = useState(false);
  

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

        {/* <button className="modal-close-button" onClick={() => setIsShowModal(!showModal)}>Close Modal</button> */}
        <div className="modal-wrapper">
          <div className="modal-tabs">
            <button
              className="modal-tabs__sign-in modal-tabs--button"
              onClick={() => setActive(!isActive)}
            >
              Sign In</button>
            <button
              className="modal-tabs__sign-up modal-tabs--button"
              onClick={() => setActive(!isActive)}
            >Sign Up</button>
          </div>
          {
            !isActive ? (
              <div className="modal-sign-in">
                <div className="modal-form-wrapper">
                  <form className="modal-form">
                    <span className="modal-form__input-name">Email Address <span className="modal-from__input-star">*</span></span>
                    <input className="modal-form__input"></input>
                    <span className="modal-form__input-name">Username<span className="modal-from__input-star">*</span></span>
                    <input className="modal-form__input"></input>
                    <span className="modal-form__input-name">Password<span className="modal-from__input-star">*</span></span>
                    <input className="modal-form__input" type="password"></input>
                    <button className="modal-form__button">Sign In</button>
                  </form>

                </div>
                <span className="modal-extra">
                  <span className="modal-extra__account modal-extra--button">Already have an account?</span>
                  <span className="modal-extra__sign-in modal-extra--button">Sign In</span>
                </span>
              </div>
            ) : (
                <div className="modal-sign-up">
                  <div className="modal-form-wrapper">
                    <form className="modal-form">
                      <span className="modal-form__input-name">Email Address <span className="modal-from__input-star">*</span></span>
                      <input className="modal-form__input"></input>
                      <span className="modal-form__input-name">Username<span className="modal-from__input-star">*</span></span>
                      <input className="modal-form__input"></input>
                      <span className="modal-form__input-name">Password<span className="modal-from__input-star">*</span></span>
                      <input className="modal-form__input" type="password"></input>
                      <button className="modal-form__button">Sign Up</button>
                    </form>

                  </div>
                  <span className="modal-extra">
                    <span className="modal-extra__account modal-extra--button">Already have an account?</span>
                    <span className="modal-extra__sign-in modal-extra--button">Sign Up</span>
                  </span>
                </div>
              )
          }

        </div>

      </Modal>
    </div>
  )
}

export default ModalWindow;