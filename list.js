import nameList from './data.js';
const list = document.getElementById('friend-list');

export const createListItem = (name) => {
  const li = document.createElement('li');
  const deleteIcon = document.createElement('i');
  li.className = 'list-item';
  deleteIcon.className = 'bi bi-trash-fill';
  li.textContent = name;
  list.appendChild(li);
  li.appendChild(deleteIcon);
};

list.addEventListener('click', (event) => {
  if (event.target.classList.contains('bi-trash-fill')) {
    const li = event.target.parentElement;
    const index = Array.from(list.children).indexOf(li);
    nameList.deleteFriend(index);
    li.remove();
  }
});

export const renderList = () => {
  nameList.get().forEach((name) => createListItem(name));
};

export const clearList = () => {
  list.innerHTML = '';
};
