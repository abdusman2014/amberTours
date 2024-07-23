import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

import useVehicleStore from "../data/app_data";

function Testimonials() {
  const { testimonials } = useVehicleStore();
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client Testimonials</h2>
              <p>
                Explore how our exceptional service has positively impacted our
                clients. Read their testimonials to see firsthand how our
                services have delivered outstanding results and experiences.
              </p>
            </div>

            <div className="all-testimonials">
              {testimonials.map((testimonial) => (
                <div className="all-testimonials__box">
                  <span className="quotes-icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </span>
                  <p>" {testimonial["testimonial"]} "</p>
                  <div className="all-testimonials__box__name">
                    <div className="all-testimonials__box__name__profile">
                      <img src={testimonial["img"]} alt="user_img" />
                      <span>
                        <h4>{testimonial["company"]}</h4>
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Ron Rizzly</h4>
                      <p>Novi Sad</p>
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
