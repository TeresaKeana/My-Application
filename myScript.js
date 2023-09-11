//Create an empty array to store tasks
var tasks=[];

//Function to add tasks to the array as well as display them in a list
function addTask(){
    let taskTitle=document.getElementById("title").value;
    let taskDescription=document.getElementById("description").value;
    let taskStatus=document.getElementById("status").value;

var task = {
        title: taskTitle,
        description: taskDescription,
        status: taskStatus
    };
    tasks.push(task);

    let taskList = document.getElementById("list");
    let listItem = document.createElement("li");
    listItem.innerHTML = `Title: ${task.title}<br>Description: ${task.description}<br>Status: ${task.status}
    <button id="edit" onclick="editTask(${tasks.length -1})">Edit Task</button>
    <button id="delete" onclick="deleteTask(${tasks.length -1})">Delete Task</button>`;
    taskList.appendChild(listItem);
    
    //To clear form after adding a task
    document.getElementById("title").value = " ";
    document.getElementById("description").value = " ";
    document.getElementById("status").value = "To Do";
}

//Function to delete tasks
function deleteTask(index){
    tasks.splice(index, 1);
    displayTasks();
}

//Function to edit tasks
function editTask(index) {
    var editedTask = tasks[index];
    document.getElementById("title").value = editedTask.title;
    document.getElementById("description").value = editedTask.description;
    document.getElementById("status").value = editedTask.status;
    deleteTask(index); 
}

//Function to display tasks in list format
function displayTasks() {
    var taskList = document.getElementById("list");
    taskList.innerHTML = ""; 

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var listItem = document.createElement("li");
        listItem.innerHTML = `${task.title}<br>${task.description}<br>Status: ${task.status}
            <button id="edit" onclick="editTask(${i})">Edit Task</button>
            <button id="delete" onclick="deleteTask(${i})">Delete Task</button>`;
        taskList.appendChild(listItem);
    }
}

//Add tasks to array and list when form is submitted
document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});

displayTasks();
console.log(tasks);
