// src/scripts/loginHandler.js
import { createClient } from '@supabase/supabase-js';

import { supabase } from '../utils/supabaseClient.js';

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) console.error(error);
  else console.log('Login successful:', user);
});
