import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import ModalWindowContainer from '../../containers/Modal';
import './burgerMenu.scss';

const BurgerMenu = () => (
  <div className="burger">
    <Menu>
      <ul className="header-burger-bar">
        <li className="header-burger-list">
          <Link to="/placesCategory">
            <p className="header-burger-link" href="#">
                Заведения
            </p>
          </Link>
        </li>
        <li className="header-burger-list">
          <Link to="/articles">
            <p className="header-burger-link" href="#">
                Статьи
            </p>
          </Link>
        </li>

      </ul>

      <div className="header-burger-actions">
        <Link to="/addListing">
          <button type="button" className="header-burger-button">+ Add Listing</button>
        </Link>
        <ModalWindowContainer />
      </div>
    </Menu>


  </div>

);
export default BurgerMenu;
