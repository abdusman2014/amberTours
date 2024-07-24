import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Contact Us</h2>
              <h3>
                <strong>Amber Tours</strong> is dedicated to assisting you with
                all your <strong>car rental needs</strong>. Contact us through
                any of the following methods, and our{" "}
                <strong>friendly and knowledgeable team</strong> will be
                delighted to provide the support and information you need. We
                are here to ensure you have a seamless and enjoyable{" "}
                <strong>car rental experience</strong>.
              </h3>
              <h1>Head Office:</h1>
              <a href="/">
                <i className="fa-solid fa-phone"></i>Tel: 051-2203088,
                051-2204852
              </a>
              <a href="/">
                <i className="fa-solid fa-phone"></i>Cell: 0300-5151131,
                0342-5332267
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>
                gculmehtabawan@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>
                Flat 2 Block 6, State Bank Colony, Said Pur Market, Near Z.T.B.L
                Bank, Sector G-7/1
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i> Islamabad, Pakistan
              </a>
              <div style={{ height: 20 }}></div>
              <h1>Branch Office:</h1>
              <a href="/">
                <i className="fa-solid fa-phone"></i> Cell: 0315-3640469,
                0336-2760470
              </a>

              <a href="/">
                <i className="fa-solid fa-envelope"></i>
                Ubaidullah Mirani, Rehmani Mohalla, Near DPO House, Madeji
                District Shikarpur
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i> Tehsil Ghari
                Yaseen-Sindh
              </a>
            </div>
            {/* <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>051 2203088</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
