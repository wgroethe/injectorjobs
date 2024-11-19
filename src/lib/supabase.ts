import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ltknzoiwxozlckkksals.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0a256b2l3eG96bGNra2tzYWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5OTI5MTYsImV4cCI6MjA0NzU2ODkxNn0.UEBCfF-lOU81MeqUVwOJzUM4rVaOQ6zMzG5CxAAbfqM';

export const supabase = createClient(supabaseUrl, supabaseKey);