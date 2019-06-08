import React, { useEffect } from 'react';

import Link from 'next/link'
import './header.scss';
import BurgerMenu from '../BurgerMenu'
import ModalWindow from '../ModalWindow';



const Header = (props) => {
  
  const {getCategoriesStart, getCitiesStart} = props

  useEffect(() => {
    getCategoriesStart()
    getCitiesStart()
  }, []);

  return (
    <header className="header">
      <div className="container">
      <div className="header-wrapper">
          <Link href="/">
            <a className="header-brand">
              <img src='/static/mainIcon.png' className="header-brand__logo" alt="logo" />
              <h2 className="header-brand__title">TryplyTrip</h2>
            </a>
          </Link>
          <BurgerMenu />
          <nav className="header-navigation">
            <ul className="header-navigation-bar">
              <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Домашняя страница
                </a>
              </li>
              <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Категории
                </a>
              </li>
              <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Статьи
                </a>
              </li>
              
              <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Контакты
                </a>
              </li>
            </ul>

            <div className="header-actions">
              <Link href={`/addListing`}>
                <button className="header-actions-button">+ Add Listing</button>
              </Link>
              <ModalWindow />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;