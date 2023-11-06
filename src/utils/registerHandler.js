// src/scripts/registerHandler.js

import { supabase } from '../utils/supabaseClient.js';

// Mostrar el formulario al hacer clic en el botón
document.getElementById('show-form-button').addEventListener('click', () => {
  document.getElementById('form-container').style.display = 'block';
});

// Manejar el envío del formulario
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email-register').value;
  const password = document.getElementById('password-register').value;
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) console.error(error);
  else console.log('Registration successful:', user);
});

// Manejar el registro/login con GitHub
document.getElementById('github-button').addEventListener('click', async () => {
  const { user, error } = await supabase.auth.signUp({ provider: 'github' });
  if (error) console.error(error);
  else console.log('Registration/Login successful:', user);
});

// Manejar el registro/login con Google
document.getElementById('google-button').addEventListener('click', async () => {
  const { user, error } = await supabase.auth.signUp({ provider: 'google' });
  if (error) console.error(error);
  else console.log('Registration/Login successful:', user);
});
