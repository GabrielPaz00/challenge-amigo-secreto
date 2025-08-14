import showModal from './modal.js';
import { clearList, createListItem, renderList } from './list.js';
import nameList from './data.js';
const addButton = document.getElementById('button-add');
const nameInput = document.getElementById('input-name');
const drawButton = document.getElementById('button-draw');

renderList();

const addName = () => {
  const name = nameInput.value.trim();
  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/;
  if (nameRegex.test(name) && name.length > 0) {
    nameList.addFriend(name);
    createListItem(name);
    nameInput.value = '';
  } else {
    showModal();
  }
  console.log(nameList.get());
};

addButton.addEventListener('click', addName);
nameInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addName();
  }
});

drawButton.addEventListener('click', () => {
  const pivot = Math.floor(Math.random() * nameList.get().length);
  console.log(`Índice del amigo secreto: ${pivot}`);
});
