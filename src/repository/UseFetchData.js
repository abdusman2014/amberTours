import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";


const supabase = createClient("https://whrljganfwvszxxfsxtf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndocmxqZ2FuZnd2c3p4eGZzeHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwMzA5NjEsImV4cCI6MjAzNDYwNjk2MX0.OVWdYM10C-grs8_wVDmOP9XHAHVmHfudSm8WUwYJA94");

const useFetchData = (table) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await supabase.from(table).select();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [table]);
  return [data, isLoading];
};
export default useFetchData;