const loginForm = document.querySelector('.login-form');

const onLoginFormSubmit = event => {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  loginForm.reset();
};

loginForm.addEventListener('submit', onLoginFormSubmit);
