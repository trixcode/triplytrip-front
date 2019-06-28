import React, { useState, useEffect, Fragment } from 'react';
import Modal from 'react-modal';
import classNames from 'classnames'
import LoginFormContainer from '../../containers/LoginForm'
import './modalWindow.scss';
import RegisterFormContainer from '../../containers/RegisterForm';


const ModalWindow = (props) => {
  const [showModal, setIsShowModal] = useState(false);
  const [ isLoginOpen , setLoginOpen ] = useState(true);
  const [ isRegisterOpen, setRegisterOpen ] = useState(false);

  const { setNotLogined, isLogined, loginUserSuccess, registerSuccess} = props;

  const switchTabs =(a, b) => {
    a(true)
    b(false)
  }
  useEffect(() => {
    Modal.setAppElement('body');
    closeModal()
  },);
  
  const selectedClass = 'modal-tabs--button_selected'
  const defaultClass = 'modal-tabs--button'

  const exitFromAcc = () => {
    loginUserSuccess(null)
    registerSuccess(null)
    setNotLogined()
    localStorage.removeItem('token')
  }

  const closeModal = () => {
    if (isLogined === true) {
      setIsShowModal(false)
    }
  }

  return (

    <div className="modal">
        
      {
        isLogined ?  <button className="modal-open__button" onClick={exitFromAcc}>Выйти</button> :
        (<Fragment>
          <button className="modal-open__button"  onClick={() => setIsShowModal(!showModal) + switchTabs(setLoginOpen, setRegisterOpen)}>Войти</button>
          <button className="modal-open__button" onClick={() => setIsShowModal(!showModal)+switchTabs(setRegisterOpen, setLoginOpen)}>Регистрация</button>
        </Fragment>)
      }
        { (
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