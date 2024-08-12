function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <ul className="footer-content__1">
            <li>
              <span>Amber</span> Tours
            </li>
            <li>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>
              <a href="tel:+92512203088">
                <i className="fa-solid fa-phone"></i> 051 2203088 
              </a>
              <br/>
              <a href="tel:+92512204852">
                <i className="fa-solid fa-phone"></i> 
                051 2204852
              </a>
            </li>

            <li>
              <a>
                <i className="fa-solid fa-envelope"></i>
                Flat 2 Block 6, State Bank Colony, Said Pur Market, Near Z.T.B.L
                Bank, Sector G-7/1
              </a>
            </li>
          </ul>

          <ul className="footer-content__2">
            <li>Working Hours</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
