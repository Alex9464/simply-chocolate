const refs = {
  openModalBtn: document.querySelector("[data-open-modal]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle("is-hidden");
  document.body.classList.toggle("modal-open");
}

function logBackdropClick() {
  console.log("клик в бекдроп");
  if (event.target === refs.backdrop) {
    toggleModal();
  }
}
