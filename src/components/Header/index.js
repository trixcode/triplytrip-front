
import './header.scss';

const Header = () => {
  return (
      <header className="header">
        <div className="header__brand">
          <img scr="./mainIcon.png" className="header__brand--logo" alt="logo" />
          <h2 className="header__brand--title">Listicle</h2>
        </div>
        <nav className="header__navigation">
          <ul className="header__navigation--list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Listings</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li>|</li>
          </ul>

          <div className="header__actions">
            <button>+ Add Listing</button>
            <a href="#">icon</a>
            <a href="#">icon</a>
          </div>
        </nav>
      </header>
  )
}

export default Header;