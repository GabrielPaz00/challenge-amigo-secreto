import showModal from '../views/modalView.js';
import { renderList, createListItem } from '../views/friendListView.js';
import nameList from '../data/friendRepository.js';
import { showResult } from '../views/resultView.js';
import { enableInputs, handleKeyEnterPress } from '../utils/dom.js';
import { isValidName } from '../utils/validation.js';
import { addButton, nameInput } from '../views/inputView.js';

const drawButton = document.getElementById('button-draw');

renderList();

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

const handleDraw = () => {
  const friends = nameList.get();
  const pivot = Math.floor(Math.random() * friends.length);
  showResult(friends[pivot]);
  enableInputs(false);
};

addButton.addEventListener('click', handleAddName);
nameInput.addEventListener('keypress', handleKeyEnterPress);
drawButton.addEventListener('click', handleDraw);
