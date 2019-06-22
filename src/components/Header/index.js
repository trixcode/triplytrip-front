import React, { useEffect } from 'react';

import {Link} from 'react-router-dom'
import './header.scss';
import BurgerMenu from '../BurgerMenu'
import ModalWindowContainer from '../../containers/Modal';
import Logo from '../../assets/mainIcon.png'



const Header = (props) => {

  const { getCategoriesStart, getCitiesStart, setNotLogined, setLogined } = props

  useEffect(() => {
    getCategoriesStart()
    getCitiesStart()
    checkIsAuth()
  }, []);
  
  const checkIsAuth = () => {
    const token = localStorage.getItem('token')
    token === null ? setNotLogined() : setLogined()
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link to="/">
            <div className="header-brand">
              <img src={Logo} className="header-brand__logo" alt="logo" />
              <h2 className="header-brand__title">TryplyTrip</h2>
            </div>
          </Link>
          <BurgerMenu />
          <nav className="header-navigation">
            <ul className="header-navigation-bar">
              <li className="header-navigation-list">
                <Link to={`/placesCategory`}>
                  <span className="header-navigation-link">
                    Заведения
                  </span>
                </Link>
              </li>
              <li className="header-navigation-list">
                <Link to={`/articles`}>
                  <span className="header-navigation-link">
                    Статьи
                  </span>
                </Link>
              </li>

            </ul>

            <div className="header-actions">
              <Link to={`/addListing`}>
                <button className="header-actions-button">+ Add Listing</button>
              </Link>
              <ModalWindowContainer />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;