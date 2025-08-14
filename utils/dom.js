import { result } from '../views/resultView.js';
import { renderList, clearList } from '../views/friendListView.js';
import { addButton, nameInput } from '../views/inputView.js';

export const handleKeyEnterPress = (event) => {
  if (event.key === 'Enter') {
    handleAddName();
  }
};

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
