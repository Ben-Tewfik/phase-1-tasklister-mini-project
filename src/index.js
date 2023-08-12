document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  form.addEventListener("submit", e => {
    e.preventDefault();
    myTodos(input.value);
    input.value = "";
  });
});

function myTodos(todo) {
  const myList = document.getElementById("tasks");
  const btn = document.createElement("button");
  const listItem = document.createElement("li");
  btn.textContent = "X";
  listItem.textContent = ` ${todo} `;
  const select = selectElement();
  listItem.appendChild(select);
  listItem.appendChild(btn);
  myList.appendChild(listItem);

  select.addEventListener("change", changeTaskColor);

  btn.addEventListener("click", deleteTask);
}

// delet element function
function deleteTask(e) {
  e.target.parentNode.remove();
}

// changing the color of the text function
function changeTaskColor(e) {
  const listItem = e.target.parentNode;
  const selectList = e.target.value;
  if (selectList === "medium") {
    listItem.style.color = "yellow";
  } else if (selectList === "low") {
    listItem.style.color = "green";
  } else {
    listItem.style.color = "red";
  }
}

// creating select with three options function
function selectElement() {
  const select = document.createElement("select");
  const priorities = [
    { value: "high", text: "high", color: "red" },
    { value: "medium", text: "medium", color: "yellow" },
    { value: "low", text: "low", color: "green" },
  ];
  priorities.forEach(element => {
    const option = document.createElement("option");
    option.textContent = element.text;
    option.style.color = element.color;
    option.value = element.value;
    select.appendChild(option);
  });
  return select;
}
