import React from "react";
import { slide as Menu } from "react-burger-menu";
import './burgerMenu.scss'

const BurgerMenu = () => {
  return (
    <div className="burger">
      <Menu>
      <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Home
                </a>
              </li>
              <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Explore
                </a>
              </li>
              <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Listings
                </a>
              </li>
              <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Destinations
                </a>
              </li>
              <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Pages
                </a>
              </li>
              <li className="header-navigation-list">
                <a className="header-navigation-link" href="#">
                Blog
                </a>
              </li>
    </Menu>
    </div>
    
  );
};
export default BurgerMenu;
