import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://grbjzpouvzbtvvxnensg.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyYmp6cG91dnpidHZ2eG5lbnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwODUzOTYsImV4cCI6MjAzNzY2MTM5Nn0.I_O4oDYWqfDoX8n3RLA14kXYZTMgFVYx-ZRcKXugGUs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
