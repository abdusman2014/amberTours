import { useState } from "react";

function CarBox({ data }) {
  const [carLoad, setCarLoad] = useState(true);
  console.log("data: ", data);
  return (
    <>
      {/* {data.map((car, id) => ( */}
      <div key={"id"} className="box-cars">
        {/* car */}
        <div className="pick-car">
          {carLoad && <span className="loader"></span>}
          <img
            style={{ display: carLoad ? "none" : "block" }}
            src={data["img"]}
            alt="car_img"
            onLoad={() => setCarLoad(false)}
          />
        </div>
        {/* description */}
        <div className="pick-description">
          <div className="pick-description__price">
            <span>${data["price"]}</span>/ rent per day
          </div>
          <div className="pick-description__table">
            <div className="pick-description__table__col">
              <span>Model</span>
              <span>{data["model"]}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Mark</span>
              <span>{data["mark"]}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Year</span>
              <span>{data["year"]}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Doors</span>
              <span>{data["doors"]}</span>
            </div>

            <div className="pick-description__table__col">
              <span>AC</span>
              <span>{data["air"]}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Transmission</span>
              <span>{data["transmission"]}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Fuel</span>
              <span>{data["fuel"]}</span>
            </div>
          </div>
          {/* btn cta */}
          <a className="cta-btn" href="#booking-section">
            Reserve Now
          </a>
        </div>
      </div>
    </>
  );
}

export default CarBox;
