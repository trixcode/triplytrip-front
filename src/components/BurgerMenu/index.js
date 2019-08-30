import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import ModalWindowContainer from '../../containers/Modal';
import './burgerMenu.scss';

const BurgerMenu = ({ isLogined }) => (
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
        <li className="header-burger-list">
          <Link to="/user">
            {isLogined ? (
              <p className="header-burger-link" href="#">
                Пользователь
              </p>
            ) : ('')}
          </Link>
        </li>

      </ul>

      <div className="header-burger-actions">
        <Link to="/addListing">
          {isLogined ? (
            <button type="button" className="header-burger-button">+ Добавить Список</button>
          ) : <div className="header-burger-button__hidden" />}
        </Link>
        <ModalWindowContainer />
      </div>
    </Menu>


  </div>
);

BurgerMenu.propTypes = {
  isLogined: PropTypes.bool.isRequired,
};

export default BurgerMenu;
