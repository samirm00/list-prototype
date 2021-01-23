# List Manager
...
A simple website allows the user to create and delete todo lists and add or remove items to each list. 
---

## User Story Dependencies

[Story Dependency Diagram](https://excalidraw.com/)

---

## WIREFRAME

![wireframe]()

---

## 0.Setup

- clone the template repo `starter-encapsulation-list-prototype`
- turn on GitHub pages.
- write the strategy plan.
- a simple `README.md`
---

## 1. Initialize Application

__As a user I want to see the initial page when I load the site__

- **When I open the website , I see:**
- a grey background color cover the whole `body`
- a blackish color title `Enter A todo List`.
- I see `input` with placeholder `Add a new todo and press Enter`

### REPO

- This user story is developed on branch `1-initialize`.
- This branch is merged to `master` branch after completion.

### Task A
`index.html` :

- add a header `h1`
- add `input` with placeholder and size.
- add `div` with `id = lists` 

### Task B
`style.css` :

- `body` add general style , background,font-family,color.
- `h1` add font-size, margin, font-family, color 
- `input` with `id = lists` add background and remove border.

## 2. Prototype

__As a user I want to add a new to do list__

- **When I type the list name and press enter  , I see:**
- a new list with `title`
- a new `input` with placeholder `add a new list and press +`.
- I see `input` with placeholder `Add a new todo and press Enter`
- I see two `button` on green with `double select` and one red `trash sign`.

### REPO

- This user story is developed on branch `2-prototype`.
- This branch is merged to `master` branch after completion.

### Task A
`list-prototype.js` :

- create an object `listPrototype`.
- add a method `state` to console.log the state.
- add `render` method :
   - create a new `div` which will be the parent element add class and id.
   - create a delete `button` add class and innerHtml and event listeners , - the `handler` will remove the the todo list if the user click on it .
   - create a new `h2` for the to do list, add class name and inner text
   - create add list `button` using font awesome icons, add event lister ,
   - the handler `addTodos` method will create a new todo or item .
   - create a new `input` to add the new todo or items  
   - create a new `ul` parent for the items or todos.
   - append all the created elements to the parent `div`
   - return  the parent `div`.

- add `addTodos` method :
   - take the value of `input` todo or item , add id , placeholder
   - check if the value is an empty string and if it is `alert` the user and exit.
   - assign the `input` value to `text` properties in our `state` and push it to the state.
   - call `displayTodos` method and then reassign the `input` value to `""`

- add `displayTodos` method 
   - select `ul` element we created in  `render` method and and make sure it is empty
   - from `state` get `todos` array and use `forEach` method to create and style all or `li` items .
   - create `li` element and text and id for each `li`
   - create a `checkbox` for each `li` to know if it is completed or not.
   - add event listener to `checkbox` , the handler `toggle` will check or uncheck the `li` to mark as completed or not.
   - create a delete `button` to remove `li`, and append it to the `li`
   - add event listener to delete `button` and call `deleteTodos` method.
   - append `lis` to `ul` element .

- add `toggle` method 
   - check if the todo is completed and if not then check it 
   - check if the todo is not completed and if not then uncheck it.

- add `deleteTodos` method:
   - remove a  todo at specific position
   - call `displayTodos` method 

- add `toggleAll` method:
   - take `todos` array from state.
   - check if all `li` are completed and if not uncheck all.
   - else check all


### Task B
`style.css` :

- `div` add di_splay flex 
- `delete-btn` change background and cursor 
- `input` with  add background.
- `ul` with `id = lists` add background and remove border.

## 3. create objects from the listprototype 


### REPO

- This user story is developed on branch `3-instance`.
- This branch is merged to `master` branch after completion.

### Task A
`create-new-list.js` :

- import `listPrototype` and `logger`
- create a new function `createNewListHandle`
- if the user didn't press enter , exit the function
- if the todo list title is empty alert the user and  exit.
- create a new list 
- add `state` to the new list 
- call the `render` and assign it to `renderedNewLis`
- append it to th lists `div`
### Task B
`init.js` :

- import the handler `createNewListHandler`
- add event listener to the main `input`,