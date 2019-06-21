import React, { useState, useEffect, Fragment } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames'
import LoginFormContainer from '../../containers/LoginForm'
import './modalWindow.scss';
import RegisterFormContainer from '../../containers/RegisterForm';
import { select } from '@redux-saga/core/effects';


const ModalWindow = (props) => {
  const [showModal, setIsShowModal] = useState(false);
  const [ isLoginOpen , setLoginOpen ] = useState(true);
  const [ isRegisterOpen, setRegisterOpen ] = useState(false);
  const [ isLoginOpenModal, setLoginOpenModal ] = useState(true);
  const [ isRegisterOpenModal, setRegisterOpenModal ] = useState(true);

  const {isOpenRegisterModal, isOpenLoginModal, setNotLogined, isLogined, loginUserSuccess} = props;

  const switchTabs =(a, b) => {
    a(true)
    b(false)
  }

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  
  const selectedClass = 'modal-tabs--button_selected'
  const defaultClass = 'modal-tabs--button'

  const exitFromAcc = () => {
    loginUserSuccess(null)
    setNotLogined()
    localStorage.setItem('token', '')
  }

  return (

    <div className="modal">

      {
        isLogined ? (<button className="modal-open__button" onClick={exitFromAcc}>Выйти</button>) :
        (<Fragment>
          <button className="modal-open__button"  onClick={() => setIsShowModal(!showModal)}>Войти</button>
          <button className="modal-open__button" onClick={() => setIsShowModal(!showModal)}>Регистрация</button>
        </Fragment>)
      }
      {
        isOpenLoginModal && (
          <Modal
          className="modal-container"
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={() => setIsShowModal(!showModal)}
          overlayClassName="Overlay"
        >
  
          
          <div className="modal-wrapper">
            <div className="modal-tabs">
              <button
                 onClick={() =>
                  switchTabs(setLoginOpen, setRegisterOpen)}
                  className={isLoginOpen ? classNames(defaultClass, selectedClass) : defaultClass}>
                  Войти</button>
              <button
                // className="modal-tabs--button"
                onClick={() =>
                  switchTabs(setRegisterOpen, setLoginOpen)}
                  className={isRegisterOpen ? classNames(defaultClass, selectedClass) : defaultClass}>
                  Регистрация
              </button>
            </div>
            {isLoginOpen ? <LoginFormContainer /> : ''}
            {isRegisterOpen ? <RegisterFormContainer /> : ''}
            
          </div>
  
        </Modal>
        )
        } 
        { isOpenRegisterModal && (
          <Modal
          className="modal-container"
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={() => setIsShowModal(!showModal)}
          overlayClassName="Overlay"
        >
  
          
          <div className="modal-wrapper">
            <div className="modal-tabs">
              <button
                 onClick={() =>
                  switchTabs(setLoginOpen, setRegisterOpen)}
                  className={isLoginOpen ? classNames(defaultClass, selectedClass) : defaultClass}
                  >

                  Войти</button>
              <button
                // className="modal-tabs--button"
                onClick={() =>
                  switchTabs(setRegisterOpen, setLoginOpen)}
                  className={isRegisterOpen ? classNames(defaultClass, selectedClass): defaultClass} 
                  >
                  Регистрация
              </button>
            </div>
            {isLoginOpen ? <LoginFormContainer /> : ''}
            {isRegisterOpen ? <RegisterFormContainer /> : ''}
            
          </div>
  
        </Modal>
        )
      }
     
    </div>
  )
}

export default ModalWindow;