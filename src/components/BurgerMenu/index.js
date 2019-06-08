import React from "react";
import { slide as Menu } from "react-burger-menu";
import ModalWindow from '../ModalWindow';

import './burgerMenu.scss'

const BurgerMenu = () => {
  return (
    <div className="burger">
      <Menu>
        <ul className="header-burger-bar">
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
            Домашняя страница
                </a>
          </li>
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
            Категории
                </a>
          </li>
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
              Статьи
                </a>
          </li>
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
            Контакты
                </a>
          </li>
        </ul>

        <div className="header-burger-actions">
          <button className="header-burger-button">+ Add Listing</button>
          <ModalWindow />
        </div>
      </Menu>


    </div>

  );
};
export default BurgerMenu;
