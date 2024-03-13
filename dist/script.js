const tasksArr = [];
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

const modalFrom = document.getElementById("modal-form");
modalFrom.addEventListener("submit", handleModalForm);
let counter = 0;

function handleModalForm(e) {
  e.preventDefault();
  const { taskName, priority, status, date } = e.target;
  console.log(taskName.value, priority.value, status.value, date.value);
  let task = {
    name: taskName.value,
    priority: priority.value,
    status: status.value,
    date: date.value,
    id: counter,
  };
  counter++;
  tasksArr.push(task);
  console.log(tasksArr);
  renderTasks(tasksArr);
}

function renderTasks(arr) {
  const tasksTable = document.getElementById("tasks-table");
  const tasksTableBody = tasksTable.querySelector("tbody");
  tasksTableBody.innerHTML = "";
  arr.forEach((task) => {
    const taskRow = document.createElement("tr");

    const taskNameCell = document.createElement("td");
    taskNameCell.classList.add("body-cell");
    const taskNameP = document.createElement("p");
    taskNameP.classList.add("task-name");
    taskNameP.textContent = task.name;
    taskNameCell.append(taskNameP);

    const priorityCell = document.createElement("td");
    priorityCell.classList.add("body-cell");
    const priorityP = document.createElement("p");
    priorityP.classList.add(`${task.priority}-priority`);
    priorityP.textContent = task.priority;
    priorityCell.append(priorityP);

    const statusCell = document.createElement("td");
    statusCell.classList.add("body-cell");
    const statusP = document.createElement("p");
    statusP.classList.add(`${task.status}-status`);
    statusP.textContent = task.status;
    statusCell.append(statusP);

    const dateCell = document.createElement("td");
    dateCell.classList.add("body-cell");
    const dateP = document.createElement("p");
    dateP.classList.add("date");
    dateP.textContent = task.date;
    dateCell.append(dateP);

    const actionsCell = document.createElement("td");
    actionsCell.classList.add("body-cell");
    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("flex", "gap-1", "justify-center");
    const deleteBtn = document.createElement("img");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.src = "../assets/icons/delete.svg";
    deleteBtn.alt = "delete";
    const editBtn = document.createElement("img");
    editBtn.classList.add("edit-btn");
    editBtn.src = "../assets/icons/edit.svg";
    editBtn.alt = "edit";
    const showBtn = document.createElement("img");
    showBtn.classList.add("show-btn");
    showBtn.src = "../assets/icons/show.svg";
    showBtn.alt = "show";
    actionsWrapper.append(deleteBtn, editBtn, showBtn);
    actionsCell.append(actionsWrapper);

    taskRow.append(
      taskNameCell,
      priorityCell,
      statusCell,
      dateCell,
      actionsCell
    );
    tasksTableBody.append(taskRow);
  });
}
