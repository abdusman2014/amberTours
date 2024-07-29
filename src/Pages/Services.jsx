import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Team from "../images/about/team.jpg";
import Team2 from "../images/about/team2.png";
import Team3 from "../images/about/team3.png";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

import Services1 from "../images/Services/services1.jpeg"
import Services2 from "../images/Services/Services2.jpeg"

function Services() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="Out Services" />
        <div className="container">
          <div className="about-main">
            <div className="about-main__text">
              <h2>Personal Rentals: Freedom to Explore at Your Own Pace</h2>
              <p>
                Welcome to{" "}
                <strong>AmberTours' Personal Rentals service,</strong> designed
                to give you the freedom to explore <strong>Pakistan</strong> on
                your terms. Whether you need a vehicle for personal errands, a
                family trip, or a solo adventure, we have the perfect car for
                you.
              </p>
              <p>
                <strong>Why Choose AmberTours for Personal Rentals?</strong>
              </p>
              <div className="ceo-message">
                <p>
                  <strong>Wide Range of Vehicles:</strong> From compact cars for
                  city driving to SUVs for family trips and vans for group
                  adventures, we have the right vehicle to meet your needs.{" "}
                  <br />
                  <strong> Flexible Rental Options:</strong> Choose daily,
                  weekly, or monthly rental plans that suit your schedule and
                  budget. <br />
                  <strong> Competitive Rates:</strong> Enjoy affordable pricing
                  without compromising on quality and comfort. <br />
                  <strong> Convenient Booking:</strong> Reserve your vehicle
                  online or through our customer service, with options for
                  vehicle delivery and pick-up at your convenience. <br />
                  <strong> Reliable Support:</strong> Experience peace of mind
                  with our 24/7 customer support and roadside assistance,
                  ensuring a hassle-free rental experience. <br />
                  <strong> Well-Maintained Fleet:</strong> All our vehicles are
                  regularly serviced and cleaned to ensure a safe, comfortable,
                  and enjoyable ride.
                </p>
                <p>
                  <strong>Booking Your Personal Rental?</strong>
                </p>
                <p>
                  <strong>Choose Your Vehicle:</strong> Browse our extensive
                  fleet online and select the vehicle that best suits your
                  needs. <br />
                  <strong> Select Rental Period:</strong> Decide on the duration
                  of your rental, whether it's for a day, a week, or longer.
                  Customize Your Rental: Add any extras you might need, such as
                  a GPS system or child safety seat. <br />
                  <strong> Confirm Your Booking:</strong> Complete your booking
                  online or contact our customer service team for assistance.
                  Embark on your next adventure with AmberTours' Personal
                  Rentals.
                  <br />
                  <strong> AmberTours:</strong> Your Journey, Your Way—book your
                  vehicle today and experience the freedom to create your own
                  journey with the reliability and comfort you deserve.
                </p>
              </div>
            </div>
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
          </div>
          <div className="about-main">
            <div className="about-main__text">
              <h2>Airport Transfers: Reliable Pick-Up and Drop-Off Services</h2>
              <p>
                Welcome to
                <strong> AmberTours' Airport Transfers service</strong>, your
                reliable partner for stress-free travel to and from
                <strong> Pakistan's major airports.</strong> Whether you're
                arriving for business, leisure, or heading out on a new
                adventure, our professional chauffeur-driven cars ensure a
                smooth and comfortable journey.
              </p>
              <p>
                <strong>Why Choose AmberTours for Airport Transfers?</strong>
              </p>
              <div className="ceo-message">
                <p>
                  <strong>Punctuality Guaranteed: </strong> Our drivers ensure
                  timely arrivals and departures, using the best routes to avoid
                  traffic. Meet and Greet Service: Our chauffeurs will assist
                  with your luggage and guide you to your vehicle from the
                  arrival gate.
                  <br />
                  <strong> Wide Range of Vehicles:</strong> Select from our
                  well-maintained fleet of cars, SUVs, and vans to match your
                  travel needs. 24/7 Availability: Our services operate around
                  the clock to fit your flight schedule.
                  <br />
                  <strong> Affordable Rates: </strong> Benefit from competitive
                  pricing without sacrificing quality and comfort.
                  <br />
                  <strong> Convenient Booking:</strong> Reserve your vehicle
                  online or through our customer service, with options for
                  vehicle delivery and pick-up at your convenience. <br />
                  <strong> AmberTours:</strong> Your Journey, Your Way. Book
                  your airport transfer with AmberTours today and experience
                  reliable, stress-free travel. <br />
                </p>
              </div>
            </div>
            <img
              className="about-main__img"
              src={Services2}
              alt="car-renting"
            />
          </div>
          <div className="about-main">
            <div className="about-main__text">
              <h2>
                Corporate Rentals: Tailored Solutions for Your Business Needs
              </h2>
              <p>
                Welcome to<strong> AmberTours</strong>, we understand that
                businesses require reliable and efficient{" "}
                <strong>transportation solutions. </strong>Our Corporate Rentals
                service is designed to provide customized options that cater to
                the unique needs of your organization.
              </p>
              <p>
                <strong>Why Choose AmberTours for Corporate Rentals?</strong>
              </p>
              <div className="ceo-message">
                <p>
                  <strong>Flexible Plans: </strong> Whether you need a vehicle
                  for a day, a week, a month, or longer, we offer flexible
                  rental plans that fit your requirements.
                  <br />
                  <strong> Wide Range of Vehicles:</strong> Our fleet includes
                  economy cars, luxury sedans, SUVs, and vans to accommodate
                  different needs, from executive travel to group
                  transportation.
                  <br />
                  <strong> Dedicated Account Management: </strong> Enjoy
                  personalized service with a dedicated account manager to
                  handle all your rental needs and ensure a seamless experience.
                  <br />
                  <strong> Corporate Discounts: </strong> Benefit from special
                  corporate rates and discounts for long-term rentals and bulk
                  bookings.
                  <br />
                  <strong> Reliable Service: </strong> Our professional drivers
                  are trained to provide punctual and courteous service,
                  ensuring that your team can focus on what matters most.
                  <br />
                </p>
                <p>
                  Enhance your business efficiency with{" "}
                  <strong>AmberTours' Corporate Rentals. </strong> Contact us
                  today to discuss your requirements and discover how we can
                  support your transportation needs.   <br /><br />
                 <strong> AmberTours: Your Journey,
                  Your Way.</strong>
                </p>
              </div>
            </div>
            <img
              className="about-main__img"
              src={Services1}
              alt="car-renting"
            />
          </div>
        </div>
      </section>
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
    </>
  );
}

export default Services;
