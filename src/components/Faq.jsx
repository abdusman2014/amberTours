import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Find answers to common concerns and inquiries about our car
                rental booking process to make your experience seamless.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. What types of cars are available for booking?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  <strong>Amber Tours</strong> offers a wide variety of vehicles
                  to suit your needs, including luxury sedans, spacious SUVs,
                  and comfortable vans. Contact us to find the perfect vehicle
                  for your trip.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Can I drive the vehicle myself?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  We do not offer a self-drive service. All of our vehicles come
                  with a professional driver to ensure your safety and comfort
                  throughout your journey .
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>
                    3. Does the price include meals and accommodation for the
                    driver?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Meals and accommodation for the driver are not included in
                  your quote. While you are not required to organize these for
                  the driver, any arrangements made would be greatly appreciated
                  by our team.
                </div>
                <div className="faq-box">
                  <div
                    id="q4-question"
                    onClick={() => openQ("q4")}
                    className={`faq-box__question ${getClassQuestion("q4")}`}
                  >
                    <p>4. Can we play music in the vehicle?</p>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  <div
                    id="q4-answer"
                    onClick={() => openQ("q4")}
                    className={`faq-box__answer ${getClassAnswer("q4")}`}
                  >
                    Many of our vehicles are equipped with AUX capabilities,
                    allowing you to play your favorite music during the ride.
                    However, this is subject to availability. Please contact our
                    team to confirm any additional requirements.
                  </div>
                </div>
                <div className="faq-box">
                  <div
                    id="q5-question"
                    onClick={() => openQ("q5")}
                    className={`faq-box__question ${getClassQuestion("q5")}`}
                  >
                    <p>5. Are there any luggage limitations?</p>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  <div
                    id="q5-answer"
                    onClick={() => openQ("q5")}
                    className={`faq-box__answer ${getClassAnswer("q5")}`}
                  >
                    Our drivers have the discretion to limit the amount of
                    luggage based on the vehicle's capacity and safety
                    considerations. Please discuss your luggage needs with our
                    team when booking.
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

export default Faq;
