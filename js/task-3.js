const nameInputElement = document.querySelector('#name-input');
const nameOutputElement = document.querySelector('#name-output');

const onInputNameElement = event => {
  const targetInputName = event.target.value;
  nameOutputElement.textContent = targetInputName || 'Anonymous';
};

nameInputElement.addEventListener('input', onInputNameElement);
