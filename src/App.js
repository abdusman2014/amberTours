import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Gallery from "./Pages/Gallery";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import useFetchData from "./repository/UseFetchData";
import useVehicleStore from "./data/app_data";
import Services from "./Pages/Services";
import { useEffect, useRef } from "react";

function App() {
  const [isLoading, fetchData] = useFetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="models" element={<Models />} />

            <Route path="gallery" element={<Gallery />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
