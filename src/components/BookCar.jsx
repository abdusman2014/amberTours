import { useEffect, useState } from "react";
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";
import { CAR_DATA } from "./CarData";
import useVehicleStore from "../data/app_data";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal
  const { vehicles } = useVehicleStore();

  useEffect(() => {
    console.log("book veh: ", vehicles);
  }, [vehicles]);

  // booking car
  const [carType, setCarType] = useState("");
  const [car, setCar] = useState(null);
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    let url = `https://web.whatsapp.com/send?phone=+923177936365}`;
    let message =
      "Hey, I want to Book " +
      car["name"] +
      "\n Name: " +
      name +
      " " +
      lastName +
     
      "\n Pickup date: " +
      pickTime +
      "\n Dropoff date: " +
      dropTime;
    // Appending the message to the URL by encoding it
    console.log(message);
    url += `&text=${encodeURI(message)}&app_absent=0`;

    // // Open our newly created URL in a new tab to send the message
    window.open(url);
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    console.log(e.target.value, "v: ", vehicles);
    var veh = vehicles.find((vehicle) => {
      console.log(vehicle["id"]);
      return vehicle["id"] === Number(e.target.value);
    });
    console.log(veh);
    setCar(veh);
    setCarType(e.target.value);
    setCarImg(veh["img"]);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  // switch (carType) {
  //   case "Audi A1 S-Line":
  //     imgUrl = CarAudi;
  //     break;
  //   case "VW Golf 6":
  //     imgUrl = CarGolf;
  //     break;
  //   case "Toyota Camry":
  //     imgUrl = CarToyota;
  //     break;
  //   case "BMW 320 ModernLine":
  //     imgUrl = CarBmw;
  //     break;
  //   case "Mercedes-Benz GLK":
  //     imgUrl = CarMercedes;
  //     break;
  //   case "VW Passat CC":
  //     imgUrl = CarPassat;
  //     break;
  //   default:
  //     imgUrl = "";
  // }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your Whatsapp to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car</option>
                    {vehicles?.map((vehicle) => (
                      <option value={vehicle["id"]}>{vehicle["name"]}</option>
                    ))}
                    {/* <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option> */}
                  </select>
                </div>

                {/* <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select pick up location</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Multan</option>
                    <option>Karachi</option>
                  </select>
                </div> */}

                {/* <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Multan</option>
                    <option>Karachi</option>
                  </select>
                </div> */}

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-off <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>
               
                 
                  <button onClick={openModal} type="submit">
                    Search
                  </button>
              
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      {car && (
        <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
          {/* title */}
          <div className="booking-modal__title">
            <h2>Complete Reservation</h2>
            <i onClick={openModal} className="fa-solid fa-xmark"></i>
          </div>
          {/* message */}
          <div className="booking-modal__message">
            <h4>
              <i className="fa-solid fa-circle-info"></i> Upon completing this
              reservation enquiry, you will receive:
            </h4>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          {/* car info */}
          <div className="booking-modal__car-info">
            <div className="dates-div">
              <div className="booking-modal__car-info__dates">
                <h5>Location & Date</h5>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <h6>Pick-Up Date & Time</h6>
                    <p>
                      {pickTime} /{" "}
                      <input type="time" className="input-time"></input>
                    </p>
                  </div>
                </span>
              </div>

              <div className="booking-modal__car-info__dates">
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                  <div>
                    <h6>Drop-Off Date & Time</h6>
                    <p>
                      {dropTime} /{" "}
                      <input type="time" className="input-time"></input>
                    </p>
                  </div>
                </span>
              </div>

              {/* <div className="booking-modal__car-info__dates">
                <span>
                  <i className="fa-solid fa-calendar-days"></i>
                  <div>
                    <h6>Pick-Up Location</h6>
                    <p>{pickUp}</p>
                  </div>
                </span>
              </div> */}

              {/* <div className="booking-modal__car-info__dates">
                <span>
                  <i className="fa-solid fa-calendar-days"></i>
                  <div>
                    <h6>Drop-Off Location</h6>
                    <p>{dropOff}</p>
                  </div>
                </span>
              </div> */}
            </div>
            <div className="booking-modal__car-info__model">
              <h5>
                <span>Car -</span> {car["name"]}
              </h5>
              {<img src={car["img"]} alt="car_img" />}
            </div>
          </div>
          {/* personal info */}
          <div className="booking-modal__person-info">
            <h4>Personal Information</h4>
            <form className="info-form">
              <div className="info-form__2col">
                <span>
                  <label>
                    First Name <b>*</b>
                  </label>
                  <input
                    value={name}
                    onChange={handleName}
                    type="text"
                    placeholder="Enter your first name"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Last Name <b>*</b>
                  </label>
                  <input
                    value={lastName}
                    onChange={handleLastName}
                    type="text"
                    placeholder="Enter your last name"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>

                {/* <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span> */}

                <span>
                  <label>
                    Age <b>*</b>
                  </label>
                  <input
                    value={age}
                    onChange={handleAge}
                    type="number"
                    placeholder="18"
                  ></input>
                  <p className="error-modal ">This field is required.</p>
                </span>
              </div>

              {/* <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div> */}

              {/* <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div> */}

              <div className="reserve-button">
                <button onClick={confirmBooking}>Reserve Now</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default BookCar;
