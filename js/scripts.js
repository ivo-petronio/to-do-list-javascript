/********************************
*******SELEÇÃO DE ELEMENTOS******
********************************/

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const finishToDo = document.querySelector(".finish-todo");
const todo = document.querySelector("todo");
const finishBtn = document.querySelector(".finish-todo");
let oldInputValue;





/********************************
************FUNÇÕES**************
********************************/
const save_to_do = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"><i/>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = ""; // LIMPA O CAMPO "TAREFA" APÓS O ENVIO
    todoInput.focus();

};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

const updateToDo = (editInputValue) => {
    const toDos = document.querySelectorAll(".todo");
    toDos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");
        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = editInputValue;
        }
    });
};



/********************************
*************EVENTOS*************
********************************/

todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputValue = todoInput.value;
    if (inputValue) {
        save_to_do(inputValue);
    }
});

todoList.addEventListener("click", (e) => {
    
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if (parentEl && document.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }

});

editForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const editInputValue = editInput.value;
    if (editInputValue) {
        updateToDo(editInputValue);
    }
    toggleForms();
    todoInput.focus();

});


cancelEditBtn.addEventListener("clique", (e) => {

    e.preventDefault();
    toggleForms();

})