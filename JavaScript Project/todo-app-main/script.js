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

  const displayTasks = () => {
    todos.forEach(todo => {
        //Clone tasks template
        const tasksList = document.importNode(taskTemplate.content, true)

        // Get checkbox
        const checkbox = tasksList.querySelector("input")
        checkbox.checked = todo.completed

        // Add task text
        const text = tasksList.querySelector("label")
        text.append(todo.name)


        // Add X button to delete
        const deleteBtn = tasksList.querySelector("img")

        tasksContainer.appendChild(tasksList)
    });
  }


  function init() {
    displayTasks()
  }

  init()

