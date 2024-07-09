import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";
import useVehicleStore from "../data/app_data";
import { useEffect, useRef } from "react";

function Home() {
  const { vehicles, setVehicles, completeLoading } = useVehicleStore();
  useEffect(() => {
    console.log("veh home: ", vehicles);
  }, [vehicles]);
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      {/* <Download /> */}
      <Footer />
    </>
  );
}

export default Home;
