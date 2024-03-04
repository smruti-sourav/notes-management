var modal = document.getElementById("taskModal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function addTask() {
    var title = document.getElementById("todo-title").value.trim();
    var description = document.getElementById("todo-description").value.trim();
    var currentTime = new Date().toLocaleTimeString();

    if (title === '' || description === '') {
        alert("Please enter both title and description for the task.");
        return;
    }

    var taskBox = document.createElement("div");
    taskBox.className = "task-box";

    var titleElement = document.createElement("h3");
    titleElement.textContent = title;

    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;

    var timeElement = document.createElement("p");
    timeElement.textContent = "Time: " + currentTime;
    timeElement.classList.add("task-time");

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.onclick = function () {
        var newTitle = prompt("Enter the new title for this task:", title);
        var newDesc = prompt("Enter the new description for this task:", description);
        if (newTitle !== null) {
            titleElement.textContent = newTitle;
        }
        if (newDesc !== null) {
            descriptionElement.textContent = newDesc;
        }
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
        if (confirm("Are you sure you want to delete this task?")) {
            taskBox.remove();
        }
    };

    var actionButtons = document.createElement("div");
    actionButtons.className = "action-buttons";
    actionButtons.appendChild(editButton);
    actionButtons.appendChild(deleteButton);

    taskBox.appendChild(titleElement);
    taskBox.appendChild(descriptionElement);
    taskBox.appendChild(timeElement);
    taskBox.appendChild(actionButtons);

    document.getElementById("tasks").appendChild(taskBox);

    
    document.getElementById("todo-title").value = "";
    document.getElementById("todo-description").value = "";

    closeModal();
}
