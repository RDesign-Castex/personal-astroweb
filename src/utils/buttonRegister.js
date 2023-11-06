export function handleButtonClick() {
    window.location.href = "/auth";
};

function handleRegisterClick() {
  // Obtén los valores ingresados por el usuario (asumiendo que hay campos de entrada con los ids 'new-username', 'new-password', y 'confirm-password')
  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Valida que los campos no estén vacíos y que las contraseñas coincidan
  if (!username || !password || !confirmPassword) {
      alert('Por favor, completa todos los campos.');
      return;
  }
  
  if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
  }

  // Envía una solicitud de registro al servidor
  fetch('/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Registro exitoso, redirige al usuario a la página de login
          window.location.href = '/login';
      } else {
          // Registro fallido, muestra un mensaje de error
          alert('Registro fallido: ' + data.message);
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
}
  