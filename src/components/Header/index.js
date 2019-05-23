import Link from 'next/link'
import './header.scss';



const Header = () => {
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link href="/">
            <a className="header-brand">
              <img src='static/mainIcon.png' className="header-brand__logo" alt="logo" />
              <h2 className="header-brand__title">TryplyTrip</h2>
            </a>
          </Link>

          <nav className="header-navigation">
            <ul className="header-navigation-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Listings</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Blog</a></li>
              <li>|</li>
            </ul>

            <div className="header-actions">
              <button>+ Add Listing</button>
              <a href="#">icon</a>
              <a href="#">icon</a>
            </div>
          </nav>

          <div className="menu-toggle" id="menuToggle">

            <input
             type="checkbox"
              />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu" className="header-hamburger-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Listings</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

        </div>

      </div>


    </header>
  )
}

export default Header;