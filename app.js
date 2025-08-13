import showModal from './modal.js';

const addButton = document.getElementById('button-add');
const nameInput = document.getElementById('input-name');
const drawButton = document.getElementById('button-draw');

const friends = ['Gabriel', 'Alonso'];

const addName = () => {
  const name = nameInput.value.trim();
  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;
  if (nameRegex.test(name) && name.length > 0) {
    friends.push(name);
    nameInput.value = '';
  } else {
    showModal();
  }
  console.log(friends);
};

addButton.addEventListener('click', addName);
nameInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addName();
  }
});
drawButton.addEventListener('click', () => {
  const friendCount = getFriendCount();
  const pivot = Math.floor(Math.random() * friendCount);
  console.log(`Índice del amigo secreto: ${pivot}`);
});

const getFriendCount = () => {
  return friends.length;
};
