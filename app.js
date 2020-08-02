const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo (e) {
    e.preventDefault();

    const todoDiv = document.createElement('div'); //todo DIV
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li'); // create li
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.append(newTodo);

    const completeButton = document.createElement('button'); //append check mark button
    completeButton.innerHTML = '<i class = "fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.append(completeButton);

    const trashButton = document.createElement('button'); //append check trash button
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.append(trashButton);

    todoList.append(todoDiv); //append to List

    todoInput.value = ''; // clear todo input value
}

function deleteCheck (e) {
    const item = e.target; // grabs whatever you are clicking on

    if(item.classList[0] === 'trash-btn') {
        const tododelete = item.parentElement;  //goes to the parent element
        tododelete.remove();
    }
    if(item.classList[0] === 'complete-btn') {
        const todocheck = item.parentElement;
        todocheck.classList.toggle ('completed');   // adds complete class to style in css
    }
}