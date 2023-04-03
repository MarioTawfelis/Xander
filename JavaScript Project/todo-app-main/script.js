const addNewForm = document.querySelector("#add-new") //New todo form
const newTaskText = document.querySelector(".add-new-text") //New todo text

const taskTemplate = document.querySelector("#task-template") //Task template
const tasksContainer = document.querySelector(".tasks") // Tasks UL

const filterAll = document.querySelector(".filter-all") //Filter - all tasks button
const filterActive = document.querySelector(".filter-active") //Filter - active tasks button
const filterComplete = document.querySelector(".filter-completed") // Filter - completed tasks button

const clearCompleted = document.querySelector(".clear") //Clear completed tasks button

const LOCAL_STORAGE_LIST = 'task.todos';

let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST)) || [
    {
      id: '1',
      name: 'Complete online JavaScript course',
      completed: false,
    },
    {
      id: '2',
      name: 'Jog around the park 3x',
      completed: false,
    },
    {
      id: '3',
      name: '10 minutes meditation',
      completed: false,
    },
    {
      id: '4',
      name: 'Read for 1 hour',
      completed: false,
    },
    {
      id: '5',
      name: 'Pick up groceries',
      completed: false,
    },
    {
      id: '6',
      name: 'Complete Todo App on Frontend Mentor',
      completed: false,
    },
  ]

// Creates JSON formatted task
const createTask = content => {
    //Create a new ID for the new task by incremeneting the total number of current tasks
    let id = todos.length + 1

    return {id: id.toString(), name:content, completed:false}
}

// Stores a task locally
const storeTask = () => {
    //Get task content from DOM
    const content = newTaskText.value
    console.log(content)

    //Create a new task
    const task = createTask(content)
    console.log(task)

    //Append task to JSON var
    todos.push(task)

    //Store the updated list locally
    saveLocal()

    //Display tasks
    displayTasks()
}

// Deletes a task by ID
const deleteTask = event => {
    // Ensure that the delete button was pressed before deletion
    if(event.target.tagName.toLowerCase() === 'img'){
        // Get the click button's ID to know which task to delete
        let taskId = event.target.id
        // console.log(taskId)

        // Delete selected task
        todos.splice(Number(taskId)-1, 1)
    }

    //Store the updated list locally
    saveLocal()

    //Clear tasks template
    clearTemplate(tasksContainer)

    //Display tasks
    displayTasks()

}

// Display tasks by populating the template tag
const displayTasks = () => {
    todos.forEach(todo => {
        //Clone tasks template
        const tasksList = document.importNode(taskTemplate.content, true)

        // Get checkbox
        const checkbox = tasksList.querySelector("input")
        checkbox.checked = todo.completed
        checkbox.id = todo.id

        // Add task text
        const text = tasksList.querySelector("label")
        text.append(todo.name)
        text.htmlFor = todo.id

        // Add X button to delete
        const deleteBtn = tasksList.querySelector("img")
        deleteBtn.id = todo.id

        tasksContainer.appendChild(tasksList)
    });
}

// Clear the template - Invoke before disaplyTasks
const clearTemplate = container => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}

// Clears completed tasks
const clearCompletedTasks = () => {
    // Filter out completed tasks
    const incompleteTasks = todos.filter(task => !task.completed)
    
    // Update todos
    todos = incompleteTasks

    //Clear tasks template
    clearTemplate(tasksContainer)

    //Store the updated list locally
    saveLocal()

    //Display tasks
    displayTasks()
}

// Marks a task as (in)complete
const setComplete = event => {
    if(event.target.tagName.toLowerCase() === 'input'){
        // Retrieve the clicked task
        const seletecdTask = todos.find(task => event.target.id === task.id)
        seletecdTask.completed = event.target.checked
    }

    //Clear tasks template
    clearTemplate(tasksContainer)

    //Store the updated list locally
    saveLocal()

    //Display tasks
    displayTasks()

    // Iterate over todos and update 
    // for(let i=0; i<todos.length-1; i++) {
    //     if(todos[i].id == taskId) {
    //         todos[i].completed = true
    //         break
    //     }
    // }
}

// Store tasks locally
const saveLocal = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST, JSON.stringify(todos))
}

function init() {
    clearTemplate(tasksContainer)
    displayTasks()
    saveLocal()
}


// Event listeners
addNewForm.addEventListener('submit', storeTask)
tasksContainer.addEventListener('click', deleteTask)
tasksContainer.addEventListener('click', setComplete)
clearCompleted.addEventListener('click', clearCompletedTasks)

init()

