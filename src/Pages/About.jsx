import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Team from "../images/about/team.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <div className="about-main__text">
              <h2>Welcome to Amber Tours!</h2>
              <p>
                Amber Tours was founded in 2000 by Gul Mehtab Awan in Islamabad,
                Pakistan. With a passion for providing exceptional car rental
                services, Gul started this journey with just three vehicles.
                Today, Amber Tours is a leading car rental business in
                Islamabad, boasting a fleet of 29 owned vehicles and over 100
                leasehold vehicles.
              </p>
              <p>
                At Amber Tours, we believe in staying ahead through continuous
                technological advancements and vehicle upgrades, ensuring
                top-notch service quality for our customers. Our commitment to
                providing efficient and personalized services has helped us
                build a strong reputation across Pakistan.{" "}
              </p>
            </div>
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
          </div>
          <div className="about-main__text">
            <h2>Our Services</h2>
            <h3>We offer a wide range of transport services, including: </h3>

            <ul>
              <li>
                Special transport services for multinational companies and
                non-government organizations
              </li>
              <li>Conference and seminar transport</li>
              <li>Educational tours</li>
              <li>Airport pickup and drop services</li>
              <li>Family and friends pleasure trips across Pakistan</li>
              <li>Wedding ceremony transport</li>
            </ul>
          </div>
          <div className="about-team">
            <div className="about-main__text">
              <h2>Our Team</h2>

              <p>
                Our team comprises dedicated professionals, including
                experienced chauffeurs, qualified supervisors, and a supportive
                staff. We take pride in our strict HR policies, ensuring that
                only the most honest and hardworking individuals are part of
                Amber Tours.
              </p>
            </div>
            <img className="about-team__img" src={Team} alt="car-renting" />
          </div>
          <div className="about-main__text">
            <h2>Clientele</h2>

            <p>
              Over the years, we have built a diverse client network, serving
              various sectors such as non-government organizations, the private
              sector, and the education sector. Some of our esteemed clients
              include Save the Children, USAID, Unilever Pakistan, and
              Beaconhouse School System.
            </p>
          </div>
          <div className="about-main__text">
            <h2>Our Commitment</h2>

            <p>
              Customer satisfaction is our hallmark, and we measure our
              performance by the satisfaction of our clients. With a 100%
              reference-able client list, we are held to the highest standards
              of quality. In an ever-evolving marketplace, our clients continue
              to choose Amber Tours for our experience, commitment to quality,
              and integrity.Over the years, we have built a diverse client
              network, serving various sectors such as non-government
              organizations, the private sector, and the education sector. Some
              of our esteemed clients include Save the Children, USAID, Unilever
              Pakistan, and Beaconhouse School System.
            </p>
            <p>
              We invite you to experience our exceptional car rental services
              and look forward to becoming your trusted travel partner.
            </p>
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

export default About;
