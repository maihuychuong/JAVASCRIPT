function togglePassword() {
  const passwordField = document.getElementById('password');
  const button = document.getElementById('toggleButton');

  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    button.textContent = 'Hide';
  } else {
    passwordField.type = 'password';
    button.textContent = 'Show';
  }
}
