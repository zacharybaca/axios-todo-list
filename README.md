
## You will be creating a Todo list

Use the totally rad todo API created by the legendary Bob. Here are the docs for it.

For the requirements below, you'll be building a frontend site that pulls your list of todos down from the API to display them, and allows the user to perform other CRUD methods on them as well.

For example, when the user adds a new todo, it will also POST that todo to the database using the provided API. This way, once the change is made, it's made permanently. When you refresh the page, since it's pulling from the data on the API, it should pull the current list of todos.

You will do the parts of this assignment in steps. You're encouraged to have someone else look at your code between each step. This will help you to become comfortable talking about code, and might open you up to other ways of doing things. Any suggestions given to you by fellow students should be considered, but don't feel obligated to apply the suggestions you get.

Since you will be needing Axios with a browser to run our JS, we’ll use a CDN.

## Requirements

An instructor will check the site for general similarity to the original web site, as well as have a quick discussion about what the hardest parts of this assignment were and what was most helpful in the process. Functionality and responsiveness are the biggest things the instructors will be looking for. Ideally you would be spending 1-3 days on the JavaScript portion of the project.

## Part 1 - GET

1. The user can see their current list of todos.
2. Todos show up as soon as the page loads.
3. If a todo item is complete, it should have a strikethrough line on it.
4. Images should be displayed as images if there are any.

### Hints:
createTodo function that takes one todo and inserts it to the DOM is very userfull
Use postman to get those first few todos in there with some images so you can style your list!


## Part 2 - POST

1. The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will      still display that new todo item. Making the new todo appear without a refresh is extra credit, but you're encouraged to attempt it.

2. A user should be able to give the item a title.
3. A user should be able to give the item a price.
4. A user should be able to give the item a description.
5. A user should be able to attach an imgUrl to the item.


## Part 3 - PUT Part 1

1. Each todo will have a checkbox where it can be marked complete or incomplete.
2. Checking the checkbox should update the database.
3. Completed todos will render the checkbox as checked when the page loads.


## Part 4 - DELETE

1. A user will be able to delete todos (this is different from marking a todo as "completed")
2. Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo


## Part 5 - CSS
Your task is to replicate the visuals of this site without simply copying the source code.
Part of replicating the site will require you to make it responsive. Change the width of your browser to see what the original site would look like on a mobile device, and try to mimic it in your own version of the site. 

Be aware that the CSS for this project does not have to be pixel perfect. Ideally you would be spending 1-2 days on the CSS portion of this project.

    - Page will be responsive using media queries. We will be checking for responsiveness at: 
      Phone Size (portrait) - width: 390px, height: 844px
      Phone Size (landscape) - width: 844px, height: 390px
      Tablet - width: 820px, height: 1180px
      Desktop - width:1024px, height:1024px (desktop minimum width)

    - Flexbox and/or Grid will be used to align elements on the page


## Part 6 - PUT Part 2 (Extra Credit)

1. Each Todo will have an "edit" button.
2. When clicked, the info will change to input boxes that are autofilled with the old Todo data.
3. A user can change the value of these inputs.
4. When the "edit" button is clicked, it will change to a "save" button.
5. When "save" is clicked, the form will disappear, and the new values will be displayed.
6. On save, the todo will be edited in the database.

Read through the "using id" section in the API documentation to learn how to delete items using the item's unique id.