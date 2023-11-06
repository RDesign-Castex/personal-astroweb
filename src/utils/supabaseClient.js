import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rztrnschmeolywxkxvmc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dHJuc2NobWVvbHl3eGt4dm1jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODg4MjQ0MiwiZXhwIjoyMDE0NDU4NDQyfQ.IQRr3h59SdNPWiU9GAT4u7gxwgiJO1oOko94_VDA2AE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
