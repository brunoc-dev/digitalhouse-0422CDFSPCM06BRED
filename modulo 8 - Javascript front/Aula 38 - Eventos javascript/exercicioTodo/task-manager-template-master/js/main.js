const comparePassword = async (password) => {
  return Promise.resolve(password == 'minhasenhadificil')
}

//selecionando o botão de Add
const buttonAdd = document.querySelector("#btnAdd");
//selecionando o input
const inputTask = document.querySelector("#form12");

const password = document.querySelector("#password");

const tasklist = document.querySelector(".task-list");

function checkTask(taskLi) {
  taskLi.classList.add("done");
}

function createCheckButton () {
  const imgCheck = document.createElement("img");
  imgCheck.setAttribute("src", "icons/check.png");

  return imgCheck;
}

function createCloseButton () {
  const imgClose = document.createElement("img");
  imgClose.setAttribute("src", "icons/close.png");
  return imgClose
}

function createTaskListItem () {
  const taskItem = document.createElement("li");
  taskItem.setAttribute("class", "task-item");
  return taskItem;
}

function createTaskContent (task) {
  const p = document.createElement("p");
  p.textContent = task;
  return p
}

async function createTask(task, password) {
  if (task.trim() && await comparePassword(password)) {
    const taskListItem = createTaskListItem();
    const imgCheck = createCheckButton();

    imgCheck.onclick = () => checkTask(taskListItem);
    taskListItem.appendChild(createCloseButton());
    taskListItem.appendChild(createTaskContent(task));
    taskListItem.appendChild(imgCheck);
    tasklist.appendChild(taskListItem);
  };
};

buttonAdd.onclick = () => {
  //pegando o valor do input
  const newTask = inputTask.value;
  const incomingPassword = password.value;

  createTask(newTask, incomingPassword);

  inputTask.value = "";
  password.value = "";
};
