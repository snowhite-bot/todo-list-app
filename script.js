const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    const taskText = taskInput.value;

    if(taskText === "")
        return;

    const li = document.createElement("li");

    li.textContent = taskText;
    li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
    li.addEventListener("dblclick", () => {
    li.remove();
});
});

    taskList.appendChild(li);

    taskInput.value = "";
});