import React, { useEffect } from 'react';

import {Link} from 'react-router-dom'
import './header.scss';
import BurgerMenu from '../BurgerMenu'
import ModalWindowContainer from '../../containers/Modal';
import Logo from '../../assets/mainIcon.png'



const Header = (props) => {

  const { getCategoriesStart, getCitiesStart } = props

  useEffect(() => {
    getCategoriesStart()
    getCitiesStart()
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link to="/">
              <img src={Logo} className="header-brand__logo" alt="logo" />
              <h2 className="header-brand__title">TryplyTrip</h2>
          </Link>
          <BurgerMenu />
          <nav className="header-navigation">
            <ul className="header-navigation-bar">
              <li className="header-navigation-list">
                <Link to={`/placesCategory`}>
                    Заведения
                </Link>
              </li>
              <li className="header-navigation-list">
                <Link to={`/articles`}>
                    Статьи
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