import './footer.scss'; 

const Footer = () => {
  return (
    <div className = "footer">
        <div className = "footer-blocks">
            <div className = "footer-blocks-1">
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

                <div className = "footer__list">
                    <span className="App">Download App</span>
                    <div className="footer__list-img"> </div>
                    <div className="footer__list-img"> </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__end">
              <span className="footer__end-txt">
                Copyright@2018 Listings.com        Tel: +91 12343210
              </span>
              <ul className = "footer__end-icons">
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              </ul>
          </div>
        </div>
    </div>
  )
}
export default Footer;