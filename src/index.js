import _, { forEach } from 'lodash';
import './style.css';

// declear global variable
  let todoTask = [
    {"description":"First wake-up", "completed": false , "index": 0},
    {"description":"Second do exercise", "completed": false , "index": 0},
    {"description":"Third say prayer", "completed": false , "index": 0},
    {"description":"Four bath yourself", "completed": false , "index": 0},
    {"description":"Fifth wear cloth", "completed": false , "index": 0}
];

// Create a Method to Render DOM and Populate ToDo app with todoTask
function addList(){
  // Create DOM Variable
let listContainer = document.querySelector('.list-container');

  for(let i=0; i<todoTask.length; i++){
  // let checkbox = document.createElement('input');
  let list = document.createElement('div');

  //add property to DOM Element
  list.classList.add('list');
  // checkbox.setAttribute =("type", "checkbox");

    // Append Dom elements to parent
    // list.appendChild(checkbox);
    listContainer.appendChild(list);
    list.innerHTML = ` <p contenteditable=true class="task-text"><input type="checkbox" class="check">${todoTask[i]['description']}</p>`;
    
    //Update todoTask index.
    todoTask[i]['index'] = i;  
  }
}


//Create delete method

//Create complete method

//Create drag method

//Create localStorage


addList();
