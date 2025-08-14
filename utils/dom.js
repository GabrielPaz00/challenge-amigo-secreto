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
