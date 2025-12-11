const textField = document.getElementById("textfield");
const addTaskButton = document.getElementById("addTaskButton");
let tasksContainer = document.getElementById("tasksContainer");
const taskMold = document.getElementById("task");

class task{
    constructor(task_text, node){
        this.task_text = task_text;
        this.node = node;
        node.innerHTML = task_text;
    }
    task_text;
    node;
}

let tasks = []; // list of task objects

// on click 
addTaskButton.addEventListener('click', (event)=>{
    if(textField.value.trim() !== ""){
        let task_text = textField.value;
        let task_node = document.createElement("div");
        task_node.className="task"; // To apply the style
        tasks.push(new task(task_text, task_node)); // to store the object in an array. Not really useful now
        tasksContainer.insertAdjacentElement('afterbegin', task_node);
        textField.value = ""; // reset text field
    }
})