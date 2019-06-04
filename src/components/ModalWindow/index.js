import React, { useState } from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LoginFormContainer from '../../containers/LoginForm'
import './modalWindow.scss';
import RegisterFormContainer from '../../containers/RegisterForm';


const ModalWindow = (props) => {
  const [showModal, setIsShowModal] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isSignIn, setSignIn] = useState(true);
  const [isSignUp, setSignUp] = useState(false);

  const selectedClass = 'main-info-tabs__tab_selected'
  const defaultClass = ''
  return (

    <div className="modal">


      <button className="modal-open__button" onClick={() => setIsShowModal(!showModal)}><FontAwesomeIcon
        className='model-open__user'
        icon={faUser} /></button>


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
              className="modal-tabs--button"
              onClick={() => setActive(!isActive)}
              classNames
            >
              Sign In</button>
            <button
              className="modal-tabs--button"
              onClick={() => setActive(!isActive)}
            >Sign Up</button>
          </div>
          {
            !isActive ? (
              <LoginFormContainer />
            ) : (
              <RegisterFormContainer />
            )
          }
        </div>

      </Modal>
    </div>
  )
}

export default ModalWindow;