const taskInput = document.getElementById("taskInput");
const all = document.querySelector(".all");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task 😊");
    return;
  }
  else{

  const taskDiv = document.createElement("div");
  taskDiv.className = "taskList";

  taskDiv.innerHTML = `
    <label class="cb-container">
      <input type="checkbox" onchange="toggleDone(this)">
      <span class="checkmark"></span>
      <span class="text">${taskText}</span>
    </label>

    <div class="actions">
      <button class="edit" onclick="editTask(this)">✏</button>
      <button class="done" onclick="doneTask(this)">✔</button>
      <button class="delete" onclick="deleteTask(this)">🗑</button>
    </div>
  `;

  all.appendChild(taskDiv);
  taskInput.value = "";
}
}
function deleteTask(btn) {
  btn.closest(".taskList").remove();
}
function editTask(btn) {
  const textSpan = btn.closest(".taskList").querySelector(".text");
  const newText = prompt("Edit your task:", textSpan.innerText);
  consolelog(textSpan);

  if (newText !== null && newText.trim() !== "") {
    textSpan.innerText = newText.trim();
  }
}
function doneTask(btn) {
  const checkbox = btn.closest(".taskList").querySelector("input");
  checkbox.checked = !checkbox.checked;
  checkbox.dispatchEvent(new Event("change"));
}


function toggleDone(checkbox) {
  const text = checkbox.closest(".cb-container").querySelector(".text");
  text.style.textDecoration = checkbox.checked ? "line-through" : "none";
  text.style.opacity = checkbox.checked ? "0.6" : "1";
}
