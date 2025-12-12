const textField = document.getElementById("textfield");
const addTaskButton = document.getElementById("addTaskButton");
const tasksContainer = document.getElementById("tasksContainer");
const taskMold = document.getElementById("task");
let taskCount = 0;

class task{
    constructor(task_text, node){
        this.task_text = task_text;
        this.node = node;
        node.querySelector('.task-text').innerText = task_text;
    }
    task_text;
    node;
}

let tasks = []; // list of task objects

// on click 
addTaskButton.addEventListener('click', (event)=>{
    //if(textField.value.trim() !== ""){
        taskCount++;
        let task_text = textField.value;
        let task_node = taskMold.cloneNode(true);
        task_node.id = `task${taskCount}`;
        //task_node.innerHTML = '<div class = "task-text"></div><div class = "task-options-icons-container"><img src="img/bin.png" class="task-options-icon"><img src="img/Star.png" class="task-options-icon"></div>';
        console.log(task_node);
        tasks.push(new task(task_text, task_node)); // to store the object in an array. Not really useful now
        tasksContainer.insertBefore(task_node, taskMold);
        //}


        textField.value = ""; // reset text field
})

