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

      </ul>

      <div className="header-burger-actions">
        {isLogined ? (
          <Link to="/addListing">
            <button type="button" className="header-burger-button">+ Add Listing</button>
          </Link>
        ) : <div className="header-burger-button__hidden" />}
        <ModalWindowContainer />
      </div>
    </Menu>


  </div>
);

BurgerMenu.propTypes = {
  isLogined: PropTypes.bool.isRequired,
};

export default BurgerMenu;
