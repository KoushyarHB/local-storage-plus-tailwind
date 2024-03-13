const addTask = document.getElementById("add-task");
const overLay = document.querySelector(".overlay");
addTask.addEventListener("click", showModal);
function showModal() {
  overLay.classList.remove("hidden");
}

const closeModalBtn = document.getElementById("closeModal");
closeModalBtn.addEventListener("click", hideModal);
function hideModal() {
  overLay.classList.add("hidden");
}
