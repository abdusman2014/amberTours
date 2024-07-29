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
                Founded in 2000 by Gul Mehtab Awan in Islamabad, Pakistan,{" "}
                <strong>Amber Tours</strong> has grown from a modest start with
                just three vehicles to become a leading name in the car rental
                industry. With a commitment to delivering exceptional car rental
                services, Amber Tours now boasts a diverse fleet of{" "}
                <strong>29 owned vehicles</strong> and over{" "}
                <strong>100 leasehold vehicles</strong>. Our extensive fleet is
                designed to meet a wide range of transportation needs, from
                everyday commuting to special events and corporate rentals. As a
                top choice for car rental in Islamabad, we are dedicated to
                providing reliable, convenient, and affordable solutions for all
                our customers.
              </p>
              <p>
                At <strong>Amber Tours</strong>, we prioritize staying at the
                forefront of the car rental industry through ongoing{" "}
                <strong>technological advancements</strong> and regular{" "}
                <strong>vehicle upgrades</strong>. Our focus on delivering{" "}
                <strong>high-quality car rental services</strong> ensures that
                our customers receive efficient, reliable, and personalized
                experiences. This dedication has established us as a trusted
                name in <strong>car rentals across Pakistan</strong>,
                reinforcing our strong reputation for excellence in the
                industry.
              </p>
            </div>
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
          </div>
          <div className="about-main__text">
            <h2>Message from the CEO</h2>
            <div className="ceo-message">
              <p>
                Welcome to <strong>AmberTours</strong>! I’m delighted to share
                the story and vision behind our company. AmberTours began in
                2000, shortly after I graduated from university. What started as
                a passion project has grown into a leading car rental business
                that I am proud to run and continually inspired by. At its core,{" "}
                AmberTours is more than just a provider of transportation
                services for individuals and companies; it’s about embracing the
                journey and the freedom to create your own path. Our mission
                extends beyond getting you from point A to point B; it's about
                delivering a travel experience that is uniquely yours. " Amber
                tour's is not just a tagline for us—it’s the essence of what we
                believe in. We are committed to offering you the flexibility to
                design your travel experience according to your needs and
                desires. Whether you’re a tourist exploring new horizons or a
                business requiring reliable transportation, AmberTours ensures
                your journey is smooth, comfortable, and memorable. Over the
                years, AmberTours has grown into Islamabad's leading car rental
                business. With a fleet of company-owned cars and a team of
                dedicated full-time drivers, we are well-equipped to meet the
                diverse needs of our clients. Our professional chauffeurs and
                well-maintained vehicles, including cars, SUVs, vans, and
                coasters, are dedicated to providing the highest level of
                service. We take pride in our attention to detail and our
                unwavering commitment to customer satisfaction. Thank you for
                choosing AmberTours. We look forward to being a part of your
                journey and helping you create experiences that last a lifetime.
              </p>
              <p>
                <strong>AmberTours: Your Journey, Your Way</strong>"
              </p>
            </div>

            <p>
              Regards,
              <br />
              Gul Mehtab Awan
              <br />
              Founder & CEO, Amber Tours
            </p>
          </div>
          <img className="about-team__img" src={Team2} alt="car-renting" />

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
                <p>
                  At <strong>Amber Tours</strong>, our team consists of
                  dedicated professionals, including{" "}
                  <strong>experienced chauffeurs</strong>,{" "}
                  <strong>qualified supervisors</strong>, and{" "}
                  <strong>supportive staff</strong>. We take pride in our
                  stringent <strong>HR policies</strong>, which ensure that only
                  the most <strong>honest</strong> and{" "}
                  <strong>hardworking individuals</strong> are part of our{" "}
                  <strong>car rental service</strong>. Our commitment to
                  maintaining high standards in our team reflects our dedication
                  to providing exceptional service and a reliable transportation
                  experience.
                </p>
              </p>
            </div>
          </div>
          <div className="about-main__text">
            <h2>Clientele</h2>
            <p>
              Over the years, <strong>Amber Tours</strong> has built a diverse
              client network, providing exceptional{" "}
              <strong>car rental services</strong> to various sectors including{" "}
              <strong>non-government organizations (NGOs)</strong>, the{" "}
              <strong>private sector</strong>, and the{" "}
              <strong>education sector</strong>. Our esteemed clients include
              renowned organizations such as <strong>Save the Children</strong>,{" "}
              <strong>USAID</strong>, <strong>Unilever Pakistan</strong>, and
              the <strong>Beaconhouse School System</strong>. Our commitment to
              quality and reliability has made us a trusted name in the
              industry.
            </p>
          </div>
          <div className="about-main__text">
            <h2>Our Commitment</h2>

            <p>
              At <strong>Amber Tours</strong>,{" "}
              <strong>customer satisfaction</strong> is our hallmark, and we
              measure our performance by the satisfaction of our clients. With a{" "}
              <strong>100% referenceable client list</strong>, we are held to
              the highest standards of quality. In an ever-evolving marketplace,
              our clients continue to choose Amber Tours for our extensive{" "}
              <strong>experience</strong>, unwavering{" "}
              <strong>commitment to quality</strong>, and{" "}
              <strong>integrity</strong>. Over the years, we have built a
              diverse client network, serving various sectors such as{" "}
              <strong>non-government organizations (NGOs)</strong>, the{" "}
              <strong>private sector</strong>, and the{" "}
              <strong>education sector</strong>. Some of our esteemed clients
              include <strong>Save the Children</strong>, <strong>USAID</strong>
              , <strong>Unilever Pakistan</strong>, and the{" "}
              <strong>Beaconhouse School System</strong>.
            </p>
            <p>
              We invite you to experience our exceptional car rental services
              and look forward to becoming your trusted travel partner.
            </p>
          </div>
          <img className="about-team__img" src={Team3} alt="car-renting" />
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
