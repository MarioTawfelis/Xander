const addNewForm = document.getElementById("add-new") //New todo form
const newTaskText = document.getElementsByClassName("add-new-text") //New todo text
const tasksTemplate = document.getElementById("tasks") //Tasts template

const filterAll = document.getElementsByClassName("filter-all") //Filter - all tasks button
const filterActive = document.getElementsByClassName("filter-active") //Filter - active tasks button
const filterComplete = document.getElementsByClassName("filter-completed") // Filter - completed tasks button

const clearCompleted = document.getElementsByClassName("clear") //Clear completed tasks button

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
        const tasksList = document.importNode(tasksTemplate.content, True)
        // Get checkbox
        // const checkbox = tasksList

        // Add task text
        // Add X button to delete
    });
  }

  displayTasks()