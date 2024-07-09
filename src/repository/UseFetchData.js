import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import useVehicleStore from "../data/app_data";
import { fetchApi, supabase } from "./api_repository";

const useFetchData = () => {
  //const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setTestimonials, setVehicles } = useVehicleStore();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // const { data } = await supabase.from("vehicles").select();
      const vehiclesData = await fetchApi("vehicles");
      console.log("check: ", vehiclesData);
      // setData(data);
      setVehicles(vehiclesData);
      const testimonialsData = await fetchApi("Testimonials");
      console.log("check: ", testimonialsData);
      // setData(data);
      setTestimonials(testimonialsData);
      //const { data } = await supabase.from("Testimonials").select();
      //  console.log(data);
      // setData(data);
      //setVehicles(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return [isLoading, fetchData];
};
export default useFetchData;
