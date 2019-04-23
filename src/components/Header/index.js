
import './header.scss';

const Header = () => {
    return (
            <div className="headerContainer">
                <header className="header">
                    <div className="headerBrand">
                        <img scr="./mainIcon.png" className="brandLogo" alt="logo" />
                        <h2 className="brand">Listicle</h2>
                    </div>
                    <div className="headerNavigation">
                        <ul className="headerNavigationList">
                            <li className="headerNavigationItem"><a href="#">Home</a></li>
                            <li className="headerNavigationItem"><a href="#">Explore</a></li>
                            <li className="headerNavigationItem"><a href="#">Listings</a></li>
                            <li className="headerNavigationItem"><a href="#">Destinations</a></li>
                            <li className="headerNavigationItem"><a href="#">Pages</a></li>
                            <li className="headerNavigationItem"><a href="#">Blog</a></li>
                            <li className="headerNavigationItem">|</li>
                            <li className="headerNavigationItem"><button>+ Add Listing</button></li>
                            <li className="headerNavigationItem"><a href="#">icon</a></li>
                            <li className="headerNavigationItem"><a href="#">icon</a></li>
                        </ul>
                    </div>
                </header>
            </div>
    )
}

export default Header;