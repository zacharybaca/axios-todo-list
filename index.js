

// Grab UL From Document
let todoList = document.getElementById('todo-list');

// Grab Input Title from Form
let enteredTitle = document.todoForm.title.value;

// Grab Price from Number Input
let priceEntered = document.todoForm.price.value;

// Grab Description from Input
let descriptionEntered = document.todoForm.description.value;

// Grab URL for Image
let urlEntered = document.todoForm.imageUrl.value;

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

        // Append Description to listItem
        listItem.appendChild(itemDetail);
     }
     
     // If Price Exists, Create Element
     if (todo.price) {
         // Create p Element for Item Price
        let itemPrice = document.createElement('p');

        // Set itemPrice to Price of Todo
        itemPrice.innerText = todo.price;

        // Add Class to p Element
        itemPrice.classList.add('item-price');

        // Append Price to listItem
        listItem.appendChild(itemPrice);
     }
    
     // If Image Exists, Create Element
     if (todo.imgUrl) {
        // Create img Element for Item Image
        let itemImage = document.createElement('img');

        // Set itemImage Src to Todo URL
        itemImage.src = todo.imgURL;

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
     deleteButton.innerText = 'Delete';

     // Append deleteButton to buttonContainer
     buttonContainer.appendChild(deleteButton);

     // Create Button Element for Edit Button
     let editButton = document.createElement('button');

     // Add Class to Button Element
     editButton.classList.add('item-edit-button');

     // Add Text to Edit Button
     editButton.innerText = 'Edit';

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

     // Append List Item to TodoList
     todoList.appendChild(listItem);
}


// GET Endpoint to Display All Todos
axios.get("https://api.vschool.io/zacharybaca/todo")
    .then(response => {
        let data = response.data;

        for (let i = 0; i < data.length; i++) {
           addToDo(data[i]);
        }
    })
