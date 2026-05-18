//Student Name: Alejandro, Lim Winchien
//filename:LabAct6_Alejandro.js

// Comment 1: stores all the tasks and whether they are completed or not.
let tasks = [
    { task: "Buy groceries", completed: false },
    { task: "Finish homework", completed: false },
    { task: "Clean the house", completed: true },
    { task: "Call Mom", completed: false }
];

// Comment 2: shows all the tasks on the webpage.
function displayTasks() {
    // <ul> element to add tasks to
    const todoList = document.getElementById("todoList");

    // Comment 3: for clearing the list first so it won’t duplicate items.
    todoList.innerHTML = "";

    // Comment 4: loop through all the tasks in the array.
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        // Comment 5: If the task completed, add a CSS class for styling.
        if (tasks[i].completed) {
            li.classList.add("completed");
        }

        // Comment 6: create a span to display the task text.
        let taskText = document.createElement("span");
        taskText.textContent = tasks[i].task;

        // Comment 7: create a button to complete or undo the task.
        let toggleButton = document.createElement("button");
        toggleButton.textContent = tasks[i].completed ? "Undo" : "Complete";

        // Comment 8: when button is clicked, change the completed state.
        toggleButton.addEventListener("click", function () {
            tasks[i].completed = !tasks[i].completed; // Comment 9: switches the task's completed status.
            displayTasks(); // Comment 10: refresh the list so the change shows on screen.
        });

        // Comment 11: add the text and button to the list item.
        li.appendChild(taskText);
        li.appendChild(toggleButton);

        // Comment 12: add the list item to the <ul>.
        todoList.appendChild(li);
    }
}

// Comment 13: when the add task button is clicked, ask the user for a new task.
document.getElementById("addTaskBtn").addEventListener("click", function () {
    let newTask = prompt("Enter a new task: ");
    if (newTask) {
        tasks.push({ task: newTask, completed: false });
        displayTasks(); // Comment 14: update the list to show the new task.
    }
});

// Comment 15: display the tasks automatically when the page loads.
displayTasks();
