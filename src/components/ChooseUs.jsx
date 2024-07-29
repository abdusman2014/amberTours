import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us for Your Car Rental Needs</h4>
                <h2>Our Vision and Mission</h2>
                <p>
                  At Amber Tours, our vision is to be the leading and most
                  trusted car rental service provider in Pakistan. We strive to
                  offer seamless, reliable, and affordable transport solutions
                  to meet all your travel needs. Our mission is to deliver
                  high-integrity, professional car rental services with
                  exceptional customer satisfaction. Whether you're looking for
                  cheap car rentals for weddings, corporate transport, or family
                  trips, we are committed to providing the best experience in
                  every journey.
                </p>

                <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Elevate your cross-country adventure with our premium
                      vehicles designed for a superior driving experience.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Enjoy transparent, all-inclusive pricing that covers
                      everything you need for a hassle-free rental experience.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Benefit from our no hidden charges policy, ensuring clear
                      and honest pricing with no surprises.
                      <strong>AmberTours: Your Journey, Your Way</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
