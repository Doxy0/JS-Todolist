// selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// event listener

todoButton.addEventListener('click', addTodo)

todoList.addEventListener('click', deleteCheck);

filterOption.addEventListener('click', filterTodo);


// function

function addTodo(event){
    // Prevents form from submitting
    event.preventDefault();

    //Todo DIV

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create LI

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //completed button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // delete button

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);


    // append to list

    todoList.appendChild(todoDiv);

    // clear input value

    todoInput.value = "";



};

function deleteCheck(event){
    const item = event.target;
    
    // delete todo item

    if (item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;

        // animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }

    // check mark todo item

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }



}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach((todo) => {


        //check for undefined values and skips then and only apply the switch statement on nodes with properties 
      if (todo.classList !== undefined) {
        switch (e.target.value) {
            
          case "all":
            todo.style.display = "flex";
            break;

          case "completed":
            if (todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
          
           case "uncompleted":
            if (!todo.classList.contains("completed")) {
                todo.style.display = "flex";
            }else {
                todo.style.display = "none";
            }
            break;
                
            
        }
      }
      return;
    });
}
