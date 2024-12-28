import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://eiubdgrxdfnvgoafjxth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdWJkZ3J4ZGZudmdvYWZqeHRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MTYxNTgsImV4cCI6MjAzODE5MjE1OH0.rfnJxBpOFXme4NfoDp_qoh0bGrZzv6Mps1_wn6JRjuw"
);
