function addToDo() {
  const todosContainer = document.querySelector("#todos");

  const toDo = document.querySelector("#title").value;
  const timeToDo = document.querySelector("#date").value;

  for (let i = 0; i <= 0; i++) {
    const todo = makeTodo(toDo, timeToDo);
    todosContainer.append(todo);
  }
}
function makeTodo(todo, time, isCompleted) {
  const textTitle = document.createElement("h3");
  textTitle.innerText = todo;

  const textTime = document.createElement("p");
  textTime.innerText = time;

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("inner");
  todoContainer.append(textTitle, textTime);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(todoContainer);

  if (isCompleted) {
    container.append(createUndoButton(), createTrashButton());
  } else {
    container.append(createCheckButton());
  }

  return container;
}

function createButton(buttonTypeClass, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);

  button.addEventListener("click", function (e) {
    eventListener(e);
  });
  return button;
}
function addTaskToCompleted(taskElement) {
  const taskTitle = taskElement.querySelector(".inner > h3").innerText;
  const taskTimestamp = taskElement.querySelector(".inner > p").innerText;

  const newTodo = makeTodo(taskTitle, taskTimestamp, true);
  const listCompleted = document.getElementById("completed-todos");
  // listCompleted.append(newTodo);
  listCompleted.append(newTodo);
  taskElement.remove();
}
function undoTaskFromCompleted(taskElement) {
  const taskTitle = taskElement.querySelector(".inner > h3").innerText;
  const taskTimestamp = taskElement.querySelector(".inner > p").innerText;

  const newTodo = makeTodo(taskTitle, taskTimestamp, false);
  const listCompleted = document.getElementById("todos");
  listCompleted.append(newTodo);
  taskElement.remove();
}

function removeTaskFromCompleted(taskElement){
    taskElement.remove()
}
function createCheckButton() {
  return createButton("check-button", function (e) {
    addTaskToCompleted(e.target.parentElement);
  });
}
function createUndoButton() {
  return createButton("undo-button", function (e) {
    undoTaskFromCompleted(e.target.parentElement);
  });
}
function createTrashButton(){
    return createButton("trash-button", function(e){
        removeTaskFromCompleted(e.target.parentElement)
    })
}
