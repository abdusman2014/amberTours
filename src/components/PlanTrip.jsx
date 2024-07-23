import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Amber Tours Transport Services</h3>
              <h2>We offer a wide range of transport services</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Wedding ceremony transport</h3>
                <p>
                  Make your special day unforgettable with Amber Tours' elegant
                  and reliable wedding transport services. Choose our affordable
                  car rental options for weddings in Pakistan for a memorable
                  experience.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Family and Friends Pleasure Trips</h3>
                <p>
                  Enjoy comfortable and memorable journeys with our tailored
                  transport services for family and friends' trips across
                  Pakistan. Affordable and reliable, perfect for all your travel
                  needs.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Transport Services for Companies</h3>
                <p>
                  We offer customized and professional transport solutions for
                  multinational companies and NGOs. Trust us for seamless,
                  efficient, and cost-effective corporate transport services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
