
// GET Endpoint to Display All Todos
axios.get("https://api.vschool.io/zacharybaca/todo")
    .then(response => {
        let data = response.data;

        // Grab UL From Document
        let todoList = document.getElementById('todo-list');

        for (let i = 0; i < data.length; i++) {
            // Create H1 for Title
            let title = document.createElement('h1');

            // Add Class to H1
            title.classList.add('item-title');

            // Create p Element for Item Detail
            let itemDetail = document.createElement('p');

            // Add Class to p Element
            itemDetail.classList.add('item-detail');

            // Create p Element for Item Price
            let itemPrice = document.createElement('p');

            // Add Class to p Element
            itemPrice.classList.add('item-price');

            // Create img Element for Item Image
            let itemImage = document.createElement('img');

            // Add Class to img Element
            itemImage.classList.add('item-image');

            // Create DIV Element for Button Container
            let buttonContainer = document.createElement('div');

            // Add Class to DIV Element
            buttonContainer.classList.add('button-container');

            // Create Button Element for Delete Button
            let deleteButton = document.createElement('button');

            // Add Class to Button Element
            deleteButton.classList.add('item-delete-button');

            // Create Button Element for Edit Button
            let editButton = document.createElement('button');

            // Add Class to Button Element
            editButton.classList.add('item-edit-button');

            // Create Label Element for Completed Checkbox
            let completedLabel = document.createElement('label');

            // Add "for" Attribute to Label
            completedLabel.setAttribute('for', 'completed-checkbox');

            // Create Checkbox Element for Completed Todos
            let completedTodo = document.createElement('input');
            completedTodo.setAttribute('type', 'checkbox');

            console.log(data[i]);
        }
    })
