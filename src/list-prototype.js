'use strict';


/* List Prototype

  This object will contain all the methods for your many lists
  in your app you will use Object.create(listPrototype) to create many lists
  it will include all the functions you need for a list:
    logic
    views
    handlers

  You will need to use binding (or arrow functions) to connect handlers to views

*/

export const listPrototype = {
  state: function(){
    console.log(this.state.header);
  },

  render: function(){

    // create parent div 
    const divEl = document.createElement('div');
    divEl.classList.add('list-div');
    divEl.id = 'list-div';

    // delete button
    const buttonEl = document.createElement('button');
    buttonEl.id = 'delete';
    buttonEl.innerHTML ='<i class="fas fa-trash"></i>'
    buttonEl.classList.add('delete-btn');     
    buttonEl.addEventListener('click', function(){      
      this.parentElement.remove();
    })

    // select all button

    const buttonSelectAll = document.createElement('button');
    buttonSelectAll.innerHTML = '<i class="fas fa-check-double"></i>';
    buttonSelectAll.classList.add('select-all');

    buttonSelectAll.addEventListener('click', this.toggleAll.bind(this));

    // header element 
    const h2El = document.createElement('h2');
    h2El.innerText = this.state.header ;
    h2El.className = 'header2'

    // button add a list 

    const buttonList = document.createElement('button');
    buttonList.innerHTML = '<i class="fas fa-plus"></i>';
    buttonList.id = 'add';
    buttonList.addEventListener('click',this.addTodos.bind(this));

    // create input to lists 
    const inputList = document.createElement('input');
    inputList.type ='text';
    inputList.placeholder = 'Add a new todo and click on + '
    inputList.className ='first-input'
    inputList.id = `${this.state.header}input`;

    // ul for list items 
    const ulEl = document.createElement('ul');
    ulEl.className = 'second-ul'
    ulEl.id = `${this.state.header}ul`;

    // append buttons , header, input and ul

    divEl.appendChild(buttonEl);
    divEl.appendChild(buttonSelectAll);
    divEl.appendChild(h2El);
    divEl.appendChild(buttonList);
    divEl.appendChild(inputList);
    divEl.appendChild(ulEl);

    return divEl;
  },

  displayTodos: function(){

    let todosUl = document.getElementById(`${this.state.header}ul`);
    todosUl.innerHTML = '';
    this.state.todos.forEach( function(todo, position){
      const todoLi = document.createElement('li');
      const todoText = document.createTextNode(todo.text);
      todoLi.id = position ;
      todoLi.appendChild(todoText);

      const inputItem = document.createElement('input');
      inputItem.type = 'checkbox';      
      todoLi.insertBefore(inputItem, todoText);

      inputItem.addEventListener('click', this.toggle.bind(this , position));

      if(this.state.todos[position].completed){
        todoLi.className = 'checkbox';
        inputItem.checked = true ;
      } else {
        todoLi.classList.remove('checkbox');
        inputItem.checked = false ;
      }

      const buttonDelete =document.createElement('button');
      buttonDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
      buttonDelete.className = 'delete-btn';

      todoLi.appendChild(buttonDelete);

      buttonDelete.addEventListener('click', this.deleteTodos.bind(this,position));

      todosUl.appendChild(todoLi);
    },this);      
    
  },

  addTodos: function(e){
    const todoId = `${this.state.header}input`;
    let newItem = document.getElementById(todoId).value;

    if(newItem === ''){
      alert('Please add todo title ')
      return;
    }

    this.state.todos.push({text: newItem, completed:false});
    this.displayTodos();

    newItem = '';

 

  },

  toggle: function(position){
   if(!this.state.todos[position].completed){
    this.state.todos[position].completed = true ;
    this.displayTodos();
   }else{
    this.state.todos[position].completed = false ;
    this.displayTodos();
   }
 
  },
  toggleAll: function () {
   
    const listObj = this.state.todos;
    for (let i = 0; i < listObj.length; i++ ) {
      if(listObj[i].completed === true){
        listObj[i].completed = false;
      }else {
        listObj[i].completed = true;
      }
    }

    this.displayTodos();
  },
  
  deleteTodos: function (position) {    

    this.state.todos.splice(position, 1);

    this.displayTodos();

   
  },

}