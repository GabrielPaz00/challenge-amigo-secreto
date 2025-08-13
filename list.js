const list = document.getElementById('friend-list');

const createListItem = (name, index) => {
  const li = document.createElement('li');
  const deleteIcon = document.createElement('i');
  li.className = 'list-item';
  deleteIcon.className = 'bi bi-trash-fill';
  li.textContent = name;
  list.appendChild(li);
  li.appendChild(deleteIcon);
  deleteIcon.addEventListener('click', () => deleteItem(index));
};

const deleteItem = (index) => {
  console.log(index);
};

export default createListItem;
