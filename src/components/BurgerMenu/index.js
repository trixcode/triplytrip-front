import React from "react";
import { slide as Menu } from "react-burger-menu";
import ModalWindow from '../ModalWindow';
import Link from 'next/link'
import './burgerMenu.scss'

const BurgerMenu = () => {
  return (
    <div className="burger">
      <Menu>
        <ul className="header-burger-bar">
          <li className="header-burger-list">
            <Link href={`/placesCategory`}>
              <a className="header-burger-link" href="#">
                Заведения
                </a>
            </Link>
          </li>
          <li className="header-burger-list">
            <Link href={`/articles`}>
              <a className="header-burger-link" href="#">
                Статьи
                </a>
            </Link>
          </li>

        </ul>

        <div className="header-burger-actions">
          <Link href={`/addListing`}>
            <button className="header-burger-button">+ Add Listing</button>
          </Link>
          <ModalWindow />
        </div>
      </Menu>


    </div>

  );
};
export default BurgerMenu;
