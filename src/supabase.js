import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hwmlrnzagjujdexyesvr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3bWxybnphZ2p1amRleHllc3ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNDc0MzgsImV4cCI6MjAxNjkyMzQzOH0.EdwxcEjfUmL1MuGBv7aEmU8H8xdV4ZD6upoh6JOyHf8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
