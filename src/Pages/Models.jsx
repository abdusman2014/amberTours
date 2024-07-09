import Footer from "../components/Footer";
import { useEffect, useState, useRef } from "react";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";
import { CAR_DATA } from "../components/CarData";
import useVehicleStore from "../data/app_data";
import useFetchData from "../repository/UseFetchData";

function Models() {
  const { vehicles } = useVehicleStore();

  // const isLoading = useVehicleStore( (state) => state.isLoading);
  // const [data, isLoading,fetchData] = useFetchData(
  //   'vehicles'
  // );

  // useEffect(()=>{
  //   fetchData();
  // },[]);
  useEffect(() => {
    console.log("model veh: ", vehicles, "load: ");
  }, [vehicles]);
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            <>
              {vehicles?.map((vehicle) => {
                return (
                  <div className="models-div__box">
                    <div className="models-div__box__img">
                      <img src={vehicle["img"]} alt="car_img" />
                      <div className="models-div__box__descr">
                        <div className="models-div__box__descr__name-price">
                          <div className="models-div__box__descr__name-price__name">
                            <p>{vehicle["name"]}</p>
                            <span>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </div>
                          <div className="models-div__box__descr__name-price__price">
                            <h4>${vehicle["price"]}</h4>
                            <p>per day</p>
                          </div>
                        </div>
                        <div className="models-div__box__descr__name-price__details">
                          <span>
                            <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                            {vehicle["model"]}
                          </span>
                          <span style={{ textAlign: "right" }}>
                            {vehicle["doors"]} &nbsp;{" "}
                            <i className="fa-solid fa-car-side"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                            {vehicle["transmission"]}
                          </span>
                          <span style={{ textAlign: "right" }}>
                            {vehicle["fuel"]} &nbsp;{" "}
                            <i className="fa-solid fa-car-side"></i>
                          </span>
                        </div>
                        <div className="models-div__box__descr__name-price__btn">
                          <div
                            onClick={() => {
                              let url = `https://web.whatsapp.com/send?phone=+923177936365}`;
                              let message =
                                "Hey, I want to Book " +
                                vehicle["name"] +
                                ", Please Provide me more information on this";
                              // Appending the message to the URL by encoding it
                              url += `&text=${encodeURI(message)}&app_absent=0`;

                              // Open our newly created URL in a new tab to send the message
                              window.open(url);
                            }}
                          >
                            Book Ride
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
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

export default Models;
