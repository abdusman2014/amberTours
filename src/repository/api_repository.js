import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://whrljganfwvszxxfsxtf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndocmxqZ2FuZnd2c3p4eGZzeHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwMzA5NjEsImV4cCI6MjAzNDYwNjk2MX0.OVWdYM10C-grs8_wVDmOP9XHAHVmHfudSm8WUwYJA94"
);

const fetchApi = async (tableName) => {
  const { data } = await supabase.from(tableName).select();
  return data;
};

export { fetchApi, supabase };
