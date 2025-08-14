import showModal from '../views/modalView.js';
import { renderList, createListItem } from '../views/friendListView.js';
import nameList from '../data/friendRepository.js';
import { showResult } from '../views/resultView.js';
import { enableInputs } from '../utils/dom.js';
import { isValidName } from '../utils/validation.js';

const addButton = document.getElementById('button-add');
const nameInput = document.getElementById('input-name');
const drawButton = document.getElementById('button-draw');

renderList();

const handleAddName = () => {
  const name = nameInput.value.trim();
  if (isValidName(name)) {
    nameList.addFriend(name); // Modelo
    createListItem(name); // Vista
    nameInput.value = '';
  } else {
    showModal(); // Vista
  }
};

const handleKeyEnterPress = (event) => {
  if (event.key === 'Enter') {
    handleAddName();
  }
};

const handleDraw = () => {
  const friends = nameList.get(); // Modelo
  const pivot = Math.floor(Math.random() * friends.length);
  showResult(friends[pivot]); // Vista
  enableInputs(false); // Vista
};

addButton.addEventListener('click', handleAddName);
nameInput.addEventListener('keypress', handleKeyEnterPress);
drawButton.addEventListener('click', handleDraw);
