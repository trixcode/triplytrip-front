import './footer.scss'; 

const Footer = () => {
  return (
    <footer className = "footer">
        <div className = "container footer__container">
                     <ul className = "footer__list">
                         <li><span href="#">The Highights</span></li>
                         <li><a href="#">Dinner</a></li>
                         <li><a href="#">Restarounts</a></li>
                         <li><a href="#">Hotel</a></li>
                         <li><a href="#">Coffee</a></li>
                         <li><a href="#">Club & bar</a></li>
                     </ul>
                    <ul className = "footer__list">
                        <li><span href="#">Events</span></li>
                        <li><a href="#">Low Read live</a></li>
                        <li><a href="#">Kick of Friday</a></li>
                        <li><a href="#">30 Plus Club Classics Dance</a></li>
                        <li><a href="#">We Will Rock You</a></li>
                        <li><a href="#">Baseball Champs</a></li>
                    </ul>
                
                    <ul className = "footer__list">
                        <li><span href="#">My account</span></li>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Favourties</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
        </div>
            <br></br>
              <div className="footer__end">
                <span className="footer__end-txt">
                 Copyright © 2018 Listicle.com | Tel: +91 12343210
                </span>
                <ul className = "footer__end-icons">
                <static />
            </ul>
        </div>
    </footer>
  )
}
export default Footer;