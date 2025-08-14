const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');
const main = document.getElementById('main-content');

const showModal = () => {
  modal.showModal();
  main.classList.add('blur');
};
const closeModal = () => {
  modal.close();
  main.classList.remove('blur');
};

closeModalButton.addEventListener('click', closeModal);

export default showModal;
