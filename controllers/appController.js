import nameList from '../data/friendRepository.js';
import { isValidName } from '../utils/validation.js';
import showModal from '../views/modalView.js';
import {
  renderList,
  clearList,
  createListItem,
} from '../views/friendListView.js';
import { showResult, result } from '../views/resultView.js';
import { addButton, nameInput, backButton } from '../views/inputView.js';

const drawButton = document.getElementById('button-draw');

renderList();

//función para actualizar la lista de amigos
const handleAddName = () => {
  const name = nameInput.value.trim();
  if (isValidName(name)) {
    nameList.addFriend(name);
    createListItem(name);
    nameInput.value = '';
  } else {
    showModal();
  }
};

//función para sortear los amigos
const handleDraw = () => {
  const friends = nameList.get();
  if (friends.length > 0) {
    const pivot = Math.floor(Math.random() * friends.length);
    showResult(friends[pivot]);
    enableInputs(false);
  }
};

const handleKeyEnterPress = (event) => {
  if (event.key === 'Enter') {
    handleAddName();
  }
};

const enableInputs = (enable) => {
  if (!enable) {
    addButton.classList.add('disable');
    nameInput.removeEventListener('keypress', handleKeyEnterPress);
    result.classList.remove('result--hidden');
    clearList();
  } else {
    console.log('a');
    addButton.classList.remove('disable');
    nameInput.addEventListener('keypress', handleKeyEnterPress);
    result.classList.add('result--hidden');
    renderList();
  }
};

addButton.addEventListener('click', handleAddName);
nameInput.addEventListener('keypress', handleKeyEnterPress);
drawButton.addEventListener('click', handleDraw);
backButton.addEventListener('click', enableInputs);
