import { result } from '../views/resultView.js';
import { renderList, clearList } from '../views/friendListView.js';
import { addButton, nameInput } from '../views/inputView.js';
import { handleKeyEnterPress } from './enterKeyHandler.js';

export const enableInputs = (enable) => {
  if (!enable) {
    addButton.classList.add('disable');
    nameInput.removeEventListener('keypress', handleKeyEnterPress);
    result.classList.remove('result--hidden');
    clearList();
  } else {
    addButton.classList.remove('disable');
    nameInput.addEventListener('keypress', handleKeyEnterPress);
    renderList();
  }
};
