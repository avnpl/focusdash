const input = document.querySelector("#user-input");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

let todoID = 1;

function fetchTodosFromBE() {
  const todos = fetch("http://localhost:3000/todos")
    .then((response) => response.json())
    .then((todos) => {
      todos.forEach((todo) => {
        addTodoToFE(todo.todoValue, todo.id);
        todoID = todo.id + 1;
      });
    });
}

fetchTodosFromBE();

// function addTodoToFE(todoValue, todoID) {
//   let todoItem = document.createElement("div");
//   todoItem.classList.add(`todo-${todoID}`);

//   let todoVal = document.createElement("p");
//   todoVal.innerHTML = todoValue;
//   todoVal.classList.add(`val-${todoID}`);

//   // let todoUp = document.createElement("button");
//   // todoUp.innerHTML = "Update";
//   // todoUp.classList.add(`up-${todoID}`);

//   let todoDel = document.createElement("button");
//   todoDel.innerHTML = "Done";
//   todoDel.classList.add(`del-${todoID}`);

//   todoItem.append(todoVal, /*todoUp,*/ todoDel);
//   list.append(todoItem);
// }

function addTodoToBE(todoValue, todoID) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todoValue: todoValue,
    }),
  };
  fetch("http://localhost:3000/todos", requestOptions);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  // addTodoToFE(input.value, todoID);
  addTodoToBE(input.value, todoID);
  todoID++;
});

function delTodo(todoID) {
  fetch(`http://localhost:3000/todos/${todoID}`, { method: "DELETE" }).then(
    (response) => {
      if (response.ok) {
        document.querySelector(`.todo-${todoID}`).remove();
      }
    }
  );
}

list.addEventListener("click", (e) => {
  // if (e.target.className.slice(0, 2) === "up") {
  //   document.querySelector(
  //     `.val-${e.target.parentElement.className[5]}`
  //   ).innerHTML = input.value;
  // } else if (e.target.className.slice(0, 3) === "del") {
  //   delTodo(e.target.parentElement.className[5]);
  // }

  if (e.target.className.slice(0, 3) === "del") {
    delTodo(e.target.parentElement.className[5]);
  }
});
