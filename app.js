import showModal from './modal.js';
import { clearList, createListItem, renderList } from './list.js';
import nameList from './data.js';
const addButton = document.getElementById('button-add');
const nameInput = document.getElementById('input-name');
const drawButton = document.getElementById('button-draw');
const result = document.getElementById('result');

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

const handleKeyEnterPress = (event) => {
  if (event.key === 'Enter') {
    addName();
  }
};

nameInput.addEventListener('keypress', handleKeyEnterPress);

const showResult = (name) => {
  result.innerHTML = name;
};

const enableInputs = (enable) => {
  if (!enable) {
    addButton.classList.add('disable');
    nameInput.removeEventListener('keypress', handleKeyEnterPress);
    clearList();
  } else {
    addButton.classList.remove('disable');
    nameInput.addEventListener('keypress', handleKeyEnterPress);
    renderList();
  }
};

drawButton.addEventListener('click', () => {
  const pivot = Math.floor(Math.random() * nameList.get().length);
  showResult(nameList.get()[pivot]);
  console.log(`Nombre del amigo secreto: ${nameList.get()[pivot]}`);
  console.log(`Índice del amigo secreto: ${pivot}`);
  enableInputs(false);
});
