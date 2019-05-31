import React from "react";
import { slide as Menu } from "react-burger-menu";
import './burgerMenu.scss'

const BurgerMenu = () => {
  return (
    <div className="burger">
      <Menu>
        <ul className="header-burger-bar">
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
              Home
                </a>
          </li>
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
              Explore
                </a>
          </li>
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
              Listings
                </a>
          </li>
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
              Destinations
                </a>
          </li>
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
              Pages
                </a>
          </li>
          <li className="header-burger-list">
            <a className="header-burger-link" href="#">
              Blog
              </a>
          </li>
        </ul>

        <div className="header-burger-actions">
          <button className="header-burger-button">+ Add Listing</button>
          <ul className="header-burger-list">
            <li className="header-burger-list header-burger-list__reg">
              <a className="header-burger-link">
                Registration
              </a>
            </li>
            <li className="header-burger-list">
              <a className="header-burger-link">
                Log In
              </a>
            </li>
          </ul>
        </div>
      </Menu>


    </div>

  );
};
export default BurgerMenu;
