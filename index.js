

// Grab UL From Document
let todoList = document.getElementById('todo-list');

// Grab Checkbox Inputs From Document
let checkBoxes = document.getElementsByClassName('completed-checkbox');

// Global Variable to Access Data From Todo API
let todos;

// AddToDo Function to Add Tasks to DOM
function addToDo(todo) {
    // Create List Item Element
    let listItem = document.createElement('li');

    // Add Class to List Item
    listItem.classList.add('todo');

     // Create H1 for Title
     let title = document.createElement('h1');

     // Set Title Equal to Todo Title
     title.innerText = todo.title;

     // Add Class to H1
     title.classList.add('item-title');

     // Append Title to listItem
     listItem.appendChild(title);

     // Create <hr /> Element to Add Underline to Title
     let underLineElement = document.createElement('hr');

     // Append <hr /> Element to listItem
     listItem.appendChild(underLineElement);

     // If Description Exists, Create Element
     if (todo.description) {
      
        // Create p Element for Item Detail
        let itemDetail = document.createElement('p');

        // Set itemDetail to Todo Description Text
        itemDetail.innerText = todo.description;

        // Add Class to p Element
        itemDetail.classList.add('item-detail');

        // Check If Todo is Completed
        if (todo.completed) {
         itemDetail.style.textDecoration = 'line-through';
        }
        else {
         itemDetail.style.textDecoration = 'none';
        }

        // Append Description to listItem
        listItem.appendChild(itemDetail);
     }
     
     // If Price Exists, Create Element
     if (todo.price) {
         // Create p Element for Item Price
        let itemPrice = document.createElement('p');

        // Set itemPrice to Price of Todo
        itemPrice.innerText = `$${todo.price}.00`

        // Add Class to p Element
        itemPrice.classList.add('item-price');

        // Append Price to listItem
        listItem.appendChild(itemPrice);

        // Check If Todo is Completed
        if (todo.completed) {
         itemPrice.style.textDecoration = 'line-through';
        }
        else {
         itemPrice.style.textDecoration = 'none';
        }
     }
    
     // If Image Exists, Create Element
     if (todo.imgUrl) {
        // Create img Element for Item Image
        let itemImage = document.createElement('img');

        // Set itemImage Src to Todo URL
        itemImage.src = todo.imgUrl;

        // Add Class to img Element
        itemImage.classList.add('item-image');

        // Append Image to listItem
        listItem.appendChild(itemImage);
     }
     
     // Create DIV Element for Button Container
     let buttonContainer = document.createElement('div');

     // Add Class to DIV Element
     buttonContainer.classList.add('button-container');

     // Create Button Element for Delete Button
     let deleteButton = document.createElement('button');

     // Add Class to Button Element
     deleteButton.classList.add('item-delete-button');

     // Add Text to Delete Button
     deleteButton.innerText = 'Delete Task';

     // Append deleteButton to buttonContainer
     buttonContainer.appendChild(deleteButton);

     // Create Button Element for Edit Button
     let editButton = document.createElement('button');

     // Add Class to Button Element
     editButton.classList.add('item-edit-button');

     // Add Text to Edit Button
     editButton.innerText = 'Edit Task';

     // Append editButton to buttonContainer
     buttonContainer.appendChild(editButton);

     // Append buttonContainer to listItem
     listItem.appendChild(buttonContainer);

     // Create Label Element for Completed Checkbox
     let completedLabel = document.createElement('label');

     // Add Text to Completed Label
     completedLabel.innerText = 'Completed';

     // Add "for" Attribute to Label
     completedLabel.setAttribute('for', 'completed-checkbox');

     // Append completedLabel to listItem
     listItem.appendChild(completedLabel);

     // Create Checkbox Element for Completed Todos
     let completedTodo = document.createElement('input');
     completedTodo.setAttribute('type', 'checkbox');

     // Add Class to Checkbox Element
     completedTodo.classList.add('completed-checkbox');

     // Append completedTodo to listItem
     listItem.appendChild(completedTodo);

     // Check If Task is Completed
     if (todo.completed && todo.title) {
      title.style.textDecoration = 'line-through';
      completedTodo.checked = true;
     }
     else {
      title.style.textDecoration = 'none';
      completedTodo.checked = false;
     }

     // Append List Item to TodoList
     todoList.appendChild(listItem);
}

// GET Endpoint to Display All Todos
axios.get("https://api.vschool.io/zacharybaca/todo")
    .then(response => {
        let data = response.data;
        
        let checkBoxes = document.getElementsByClassName('completed-checkbox');
         
        for (let i = 0; i < data.length; i++) {
            // addToDo Function Displays Saved Todos to DOM
            addToDo(data[i]);
        }

        // Try to move checkBoxes Event Listener Code Inside For Loop Where it is Calling addToDo
        for (let i = 0; i < checkBoxes.length; i++) {
            // Change Event Applies line-through Style When Box is Checked
            checkBoxes[i].addEventListener('change', (e) => {
               // PUT Endpoint to Update Todo in Database
               let todo = data[i]._id;
               console.log('Target: ', e.target.parentElement.children)
               console.log('Target-Class: ', e.target.parentElement.children[0].className)
               if (e.target.checked) {
                  let itemTitle, itemDetail, itemPrice
                  if (e.target.parentElement.children[0].className === 'item-title') {
                     itemTitle = e.target.parentElement.children[0];
                     itemTitle.style.textDecoration = 'line-through';
                  }

                  if (e.target.parentElement.children[2].className === 'item-detail') {
                     itemDetail = e.target.parentElement.children[2];
                     itemDetail.style.textDecoration = 'line-through';
                  }
                  
                  if (e.target.parentElement.children[3].className === 'item-price') {
                     itemPrice = e.target.parentElement.children[3];
                     itemPrice.style.textDecoration = 'line-through';
                  }
                  
                  // Updated Object Passed into PUT request
                  let updatedTodo = {
                     completed: true
                  }

                  console.log('TODO: ', todo);
                  axios.put(`https://api.vschool.io/zacharybaca/todo/${todo}`, updatedTodo).then(response => console.log(response.data)).catch(error => console.log(error))

               } 
            })
        }
            
    })
    
    // PUT Endpoint to Update Todo in Database, and Apply Styling to Todo on UI
    const updateTodo = (todo) => {
      todo = {
         completed: true
      }

      axios.put(`https://api.vschool.io/zacharybaca/todo/${todo._id}`, todo)
    }

    // Global Function That Will Get Todos From API
    async function getTodos() {
      let response = await axios.get("https://api.vschool.io/zacharybaca/todo");
      console.log(response.data);
      return response.data;
    }
    
    // Function That Will Give an ID of a Todo
    async function getTodoId(todo) {
      let todos = await getTodos();
      
      for (let i = 0; i < todos.length; i++) {
         if (String(todo._id) === todos[i]._id) {
            console.log(todos[i]._id)
            return todos[i]._id;
         }
         
      }
    }
    
// Add Event Listener on Form to Post ToDo
document.todoForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const todo = {
      title: document.todoForm.title.value,
      price: document.todoForm.price.value,
      description: document.todoForm.description.value,
      imgUrl: document.todoForm.imageUrl.value,
      completed: document.todoForm.completed
   }

   // POST Endpoint to Add Todo
   axios.post("https://api.vschool.io/zacharybaca/todo", todo)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))

      // Clear Form Data After Submission
      document.todoForm.title.value = '';
      document.todoForm.price.value = '';
      document.todoForm.description.value = '';
      document.todoForm.imageUrl.value = '';

      // // Delete and Re-Add the Todo Elements for Updated List
      //    // Loop Through todoList
      //    // Delete Each Element Inside List
      //    let child = todoList.lastElementChild;

      //    while (child) {
      //       todoList.removeChild(child);
      //       child = todoList.lastElementChild;
      //    }
   })
