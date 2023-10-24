const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');

let todos = [];

// Render the list of todos
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(function (todo, index) {
        const li = document.createElement('li');
        li.textContent = todo.text;
        if (todo.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', function () {
            toggleCompleted(index);
        });
        todoList.appendChild(li);
    });
}

// Add a new todo
function addTodo() {
    const newTodoText = newTodoInput.value.trim();
    if (newTodoText === "") {
        return;
    }
    todos.push({
        text: newTodoText,
        completed: false
    });
    newTodoInput.value = "";
    renderTodos();
}

// Toggle the completed state of a todo
function toggleCompleted(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Add event listeners
addTodoButton.addEventListener('click', addTodo);
newTodoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

// Initial render
renderTodos();
