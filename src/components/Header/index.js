import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BurgerMenu from '../BurgerMenu';
import ModalWindowContainer from '../../containers/Modal';
import Logo from '../../assets/mainIcon.png';
import SuccessModal from '../SuccessModal';
import './header.scss';


const Header = (props) => {
  const {
    getCategoriesStart, getCitiesStart, setNotLogined, setLogined, isLogined,
  } = props;

  const checkIsAuth = () => {
    const token = localStorage.getItem('token');
    if (token === null) {
      setNotLogined(false);
    } else {
      setLogined(true);
    }
  };

  useEffect(() => {
    getCategoriesStart();
    getCitiesStart();
    checkIsAuth();
  }, []);
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
          <BurgerMenu isLogined={isLogined} />
          <nav className="header-navigation">
            <ul className="header-navigation-bar">
              <li className="header-navigation-list">
                <Link to="/placesCategory">
                  <span className="header-navigation-link">
                    Заведения
                  </span>
                </Link>
              </li>
              <li className="header-navigation-list">
                <Link to="/articles">
                  <span className="header-navigation-link">
                    Статьи
                  </span>
                </Link>
              </li>
              <li className="header-navigation-list">
                <Link to="/user">
                  {isLogined ? (
                    <span className="header-navigation-link">
                      Пользователь
                    </span>
                  ) : ('')}
                </Link>
              </li>
            </ul>

            <div className="header-actions">
              <Link to="/addListing">
                {isLogined ? (
                  <button type="button" className="header-actions-button">+ Добавить Список</button>
                ) : <div className="header-actions-button__hidden" />}
              </Link>
              <ModalWindowContainer />
            </div>
          </nav>
        </div>
      </div>
      <SuccessModal />
    </header>
  );
};

Header.propTypes = {
  getCategoriesStart: PropTypes.func.isRequired,
  getCitiesStart: PropTypes.func.isRequired,
  setNotLogined: PropTypes.func.isRequired,
  setLogined: PropTypes.func.isRequired,
  isLogined: PropTypes.bool.isRequired,
};

export default Header;
