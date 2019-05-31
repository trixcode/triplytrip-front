import Link from 'next/link'
import './header.scss';
import BurgerMenu from '../BurgerMenu'


const Header = () => {
  
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
              <li className="header-navigation-list">|</li>
            </ul>

            <div className="header-actions">
              <button className="header-actions-button">+ Add Listing</button>
              <a className="header-actions-link" href="#">icon</a>
              <a className="header-actions-link" href="#">icon</a>
            </div>
          </nav>
          
       
        </div>

      </div>


    </header>
  )
}

export default Header;