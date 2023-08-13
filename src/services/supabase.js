import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://twcfzabglxqtvuofqcwp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3Y2Z6YWJnbHhxdHZ1b2ZxY3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5MDY3MjAsImV4cCI6MjAwNzQ4MjcyMH0.BRxRHkFtHI83RMzXD8UrBUu2CMKtM2NiVXlokN6Blmg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
