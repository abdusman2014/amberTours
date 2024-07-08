import { useEffect, useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";
import useVehicleStore from "../data/app_data";

function PickCar() {
  const [active, setActive] = useState("SecondCar");
  const {vehicles} = useVehicleStore();
  const [colorBtn, setColorBtn] = useState();
  const [selectedCar, setSelectedCar] = useState();

  useEffect(()=>{
    if(vehicles !== undefined){
      setColorBtn(vehicles[0]["id"]);
      setSelectedCar(vehicles[0]);
    }
    console.log("pick car: ",vehicles);
  },[vehicles]);
  useEffect(()=>{
   
    console.log("selected car: ",selectedCar);
  },[selectedCar]);

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
   {vehicles === null || vehicles === undefined ? (<></>) : ( <section className="pick-section" id="pick-section">
       
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                {vehicles?.map((vehicle) => (
                   <button
                   className={`${coloringButton(vehicle["id"])}`}
                   onClick={() => {
                    // setActive("SecondCar");
                    var veh = vehicles.find((veh) => (veh["id"] === vehicle["id"]));
                    console.log("select: ",veh);
                    setSelectedCar(veh);
                     btnID(vehicle["id"]);
                   }}
                 >
                   {vehicle["name"]}
                 </button>
                ))}
                {/* <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  VW Golf 6
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
                </button> */}
              </div>

              {selectedCar !== undefined ? <CarBox data={selectedCar}  /> : <p>undefined</p>}
              {/* {active === "SecondCar" && <CarBox data={CAR_DATA[1]}  />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA[2]}  />}
              {active === "FourthCar" && <CarBox data={CAR_DATA[3]}  />}
              {active === "FifthCar" && <CarBox data={CAR_DATA[4]}  />}
              {active === "SixthCar" && <CarBox data={CAR_DATA[5]}  />} */}
            </div>
          </div>
        </div>
      </section>)}
    </>
  );
}

export default PickCar;
